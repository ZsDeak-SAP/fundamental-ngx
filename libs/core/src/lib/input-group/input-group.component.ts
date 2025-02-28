import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnDestroy,
    Output,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ContentDensityObserver, contentDensityObserverProviders } from '@fundamental-ngx/core/content-density';
import { filter, fromEvent, map, merge, Observable, Subject, takeUntil, debounceTime } from 'rxjs';

import { Nullable } from '@fundamental-ngx/cdk/utils';
import { FormItemControl, registerFormItemControl } from '@fundamental-ngx/core/form';

import {
    InputGroupAddonButtonDirective,
    InputGroupAddOnDirective,
    InputGroupInputDirective
} from './input-group-directives';
import { InputGroupPlacement } from './types';
import { FormStates } from '@fundamental-ngx/cdk/forms';

let addOnNonButtonRandomId = 0;
let addOnButtonRandomId = 0;
let addOnInputRandomId = 0;

/**
 * The component that represents an input group.
 * The input group includes form inputs with add-ons that allow the user to better understand the information being entered.
 *
 * ```html
 * <fd-input-group placement="after" addOnText="$" placeholder="Amount">
 * </fd-input-group>
 * ```
 */
@Component({
    selector: 'fd-input-group',
    templateUrl: './input-group.component.html',
    styleUrls: ['./input-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputGroupComponent),
            multi: true
        },
        contentDensityObserverProviders(),
        registerFormItemControl(InputGroupComponent)
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(focusout)': '_focusOut($event)'
    }
})
export class InputGroupComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, FormItemControl {
    /**
     * The placement of the add-on.
     * Options include *before* and *after*
     */
    @Input()
    placement: InputGroupPlacement = 'after';

    /** If it is mandatory field */
    @Input()
    required = false;

    /** Whether the input group is inline. */
    @Input()
    inline = false;

    /** Placeholder for the input group. */
    @Input()
    placeholder: string;

    /** The text for the add-on. */
    @Input()
    addOnText: string;

    /** Whether AddOn Button should be focusable */
    @Input()
    buttonFocusable = true;

    /** The type of the input, used in Input Group. By default, value is set to 'text' */
    @Input()
    type = 'text';

    /** The icon value for the add-on. */
    @Input()
    glyph: Nullable<string>;

    /** Whether the icon add-on or the text add-on is a button. */
    @Input()
    button: boolean;

    /** Whether the input group is disabled. */
    @Input()
    disabled: boolean;

    /** Whether the input group is readonly. */
    @Input()
    readonly: boolean;

    /**
     *  The state of the form control - applies css classes.
     *  Can be `success`, `error`, `warning`, `information` or blank for default.
     */
    @Input()
    state: Nullable<FormStates>;

    /**
     * Whether the input group is a popover control
     */
    @Input()
    isControl = false;

    /**
     * Whether should show focus outline
     */
    @Input()
    showFocus = true;

    /** @hidden */
    @Input()
    isExpanded = false;

    /** Label applied to button with glyph element. */
    @Input()
    glyphAriaLabel: Nullable<string>;

    /** The tooltip for the input group icon. */
    @Input()
    iconTitle: Nullable<string>;

    /** the associated ids for the input aria-labelledby field */
    @Input()
    ariaLabelledBy: Nullable<string>;

    /** Event emitted when the add-on button is clicked. */
    @Output()
    addOnButtonClicked = new EventEmitter<Event>();

    /**
     * Event emitted when the native clear button is clicked, or when native search is executed.
     * Works only for native search for input[type="search"]
     */
    @Output()
    search = new EventEmitter<Event>();

    /** @hidden */
    @ContentChild(InputGroupInputDirective)
    inputElement: InputGroupInputDirective;

    /** @hidden */
    @ViewChild(InputGroupInputDirective)
    localInputElement: InputGroupInputDirective;

    /** @hidden */
    @ContentChild(InputGroupAddOnDirective)
    addOnElement: InputGroupAddOnDirective;

    /** @hidden */
    @ViewChild(InputGroupAddonButtonDirective, { static: false, read: ElementRef })
    private readonly _localButtonElement: ElementRef;

    /** @hidden */
    _inputTextValue: string;

    /** @hidden */
    _inputId = `fd-input-group-input-id-${addOnInputRandomId++}`;

    /** @hidden */
    _addOnNonButtonId = `fd-input-group-non-button-id-${addOnNonButtonRandomId++}`;

    /** @hidden */
    _addOnButtonId = `fd-input-group-button-id-${addOnButtonRandomId++}`;

    /** @hidden */
    _inputFocused$: Observable<boolean>;

    /**
     * Whether the input group is in the shellbar. Only for internal use by combobox component.
     * @hidden
     */
    inShellbar = false;

    /** An RxJS Subject that will kill the stream upon component’s destruction (for unsubscribing)  */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    /** Value of the text input. */
    set inputText(value) {
        this._inputTextValue = value;

        this.onChange(value);
    }

    get inputText(): string {
        return this._inputTextValue;
    }
    /** @hidden
     *  Calculate the correct ids for input aria-labelledby
     */
    get _inputAriaLabelledBy(): string {
        let ariaLabelledByIds = this.ariaLabelledBy ? this.ariaLabelledBy + ' ' : '';

        if (!this.button) {
            ariaLabelledByIds += this._addOnNonButtonId;
        }

        return ariaLabelledByIds;
    }

    /** @hidden */
    constructor(
        private readonly _elementRef: ElementRef,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private _contentDensityObserver: ContentDensityObserver
    ) {
        this._contentDensityObserver.subscribe();
    }

    /** @hidden */
    onChange: any = () => {};

    /** @hidden */
    onTouched: any = () => {};

    /** @hidden */
    get elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._listenInputFocus();
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }

    /** @hidden */
    writeValue(value: any): void {
        this._inputTextValue = value;

        this._changeDetectorRef.markForCheck();
    }

    /** @hidden */
    registerOnChange(fn): void {
        this.onChange = fn;
    }

    /** @hidden */
    registerOnTouched(fn): void {
        this.onTouched = fn;
    }

    /** @hidden */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;

        this._changeDetectorRef.detectChanges();
    }

    /** @hidden */
    setInShellbar(value: boolean): void {
        this.inShellbar = value;

        this._changeDetectorRef.detectChanges();
    }

    /** @hidden */
    _buttonClicked(event: Event): void {
        this.addOnButtonClicked.emit(event);
    }

    /** @hidden */
    _onSearchEvent(event: Event): void {
        this.search.emit(event);
    }

    /** @hidden */
    _preventFocus(event: MouseEvent): void {
        if (!this.buttonFocusable) {
            event.preventDefault();
        }
    }

    /** @hidden */
    private _listenInputFocus(): void {
        const inputElement =
            this.inputElement?.elementRef?.nativeElement || this.localInputElement?.elementRef?.nativeElement;

        if (!inputElement) {
            return;
        }

        const focusEvents = [
            fromEvent(inputElement, 'focusin').pipe(map(() => true)),
            fromEvent(inputElement, 'focusout').pipe(map(() => false))
        ];

        if (this._localButtonElement) {
            focusEvents.push(
                fromEvent(this._localButtonElement.nativeElement, 'mousedown').pipe(map(() => !this.buttonFocusable))
            );
        }

        this._inputFocused$ = merge(...focusEvents).pipe(
            // debounceTime is needed in order to filter subsequent focus-blur events, that happen simultaneously
            debounceTime(10),
            filter(() => this.showFocus),
            takeUntil(this._onDestroy$)
        );

        this._changeDetectorRef.markForCheck();
    }

    /** @hidden */
    private _focusOut(event: FocusEvent): void {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.onTouched();
        }
    }
}
