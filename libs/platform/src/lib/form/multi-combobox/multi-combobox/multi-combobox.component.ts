import { A, DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Host,
    Inject,
    Injector,
    OnInit,
    Optional,
    Self,
    SkipSelf,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
    isDevMode
} from '@angular/core';
import { ControlContainer, FormsModule, NgControl, NgForm } from '@angular/forms';
import { FD_FORM_FIELD, FD_FORM_FIELD_CONTROL } from '@fundamental-ngx/cdk/forms';
import equal from 'fast-deep-equal';

import { DynamicComponentService, KeyUtil, SearchHighlightPipe, warnOnce } from '@fundamental-ngx/cdk/utils';
import { DialogConfig } from '@fundamental-ngx/core/dialog';
import {
    DATA_PROVIDERS,
    DataProvider,
    MultiComboBoxDataSource,
    OptionItem,
    PlatformFormField,
    PlatformFormFieldControl,
    SelectableOptionItem
} from '@fundamental-ngx/platform/shared';

import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { CheckboxComponent } from '@fundamental-ngx/core/checkbox';
import {
    ContentDensityModule,
    ContentDensityObserver,
    contentDensityObserverProviders
} from '@fundamental-ngx/core/content-density';
import { FormControlComponent, FormInputMessageGroupComponent, FormMessageComponent } from '@fundamental-ngx/core/form';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { ListModule, ListSecondaryDirective } from '@fundamental-ngx/core/list';
import { PopoverBodyComponent, PopoverComponent, PopoverControlComponent } from '@fundamental-ngx/core/popover';
import { TokenComponent, TokenizerComponent, TokenizerInputDirective } from '@fundamental-ngx/core/token';
import { FdTranslatePipe } from '@fundamental-ngx/i18n';
import { AutoCompleteDirective, AutoCompleteEvent } from '../../auto-complete/auto-complete.directive';
import { BaseMultiCombobox, MAP_LIMIT } from '../commons/base-multi-combobox';
import { PlatformMultiComboboxMobileModule } from '../multi-combobox-mobile/multi-combobox-mobile.module';
import { MultiComboboxMobileComponent } from '../multi-combobox-mobile/multi-combobox/multi-combobox-mobile.component';
import { MultiComboboxConfig } from '../multi-combobox.config';
import { MULTICOMBOBOX_COMPONENT } from '../multi-combobox.interface';

let deprecationWarningShown = false;

/**
 * This component can work with both string primitives as well as with complex objects. In order
 * to use objects user must provide an unique ID to lookupkey, which will be used in comparing
 * each items of array. It is important to provide lookupkey value as there might be multiple
 * items with same name but different properties which is to be differently identified otherwise
 * it will be treated as same objects.
 */

@Component({
    selector: 'fdp-multi-combobox',
    templateUrl: './multi-combobox.component.html',
    styleUrls: ['./multi-combobox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: FD_FORM_FIELD_CONTROL,
            useExisting: MultiComboboxComponent,
            multi: true
        },
        contentDensityObserverProviders()
    ],
    standalone: true,
    imports: [
        NgIf,
        NgTemplateOutlet,
        PopoverComponent,
        PopoverControlComponent,
        PopoverBodyComponent,
        FormInputMessageGroupComponent,
        InputGroupModule,
        TokenComponent,
        TokenizerComponent,
        TokenizerInputDirective,
        NgFor,
        FormControlComponent,
        FormsModule,
        AutoCompleteDirective,
        FormMessageComponent,
        ListModule,
        CheckboxComponent,
        NgClass,
        ListSecondaryDirective,
        SearchHighlightPipe,
        FdTranslatePipe,
        ContentDensityModule
    ]
})
export class MultiComboboxComponent extends BaseMultiCombobox implements OnInit, AfterViewInit {
    /** @hidden */
    @ViewChild('mobileControlTemplate')
    mobileControlTemplate: TemplateRef<any>;

    /** @hidden */
    @ViewChild('listTemplate')
    listTemplate: TemplateRef<any>;

    /** @hidden */
    @ViewChild(TokenizerComponent)
    _tokenizer: TokenizerComponent;

    /**
     * @hidden
     * List of selected suggestions
     */
    _selectedSuggestions: SelectableOptionItem[] = [];

    /** @hidden */
    constructor(
        cd: ChangeDetectorRef,
        readonly elementRef: ElementRef,
        @Optional() @Self() readonly ngControl: NgControl,
        @Optional() @SkipSelf() controlContainer: ControlContainer,
        @Optional() @SkipSelf() readonly ngForm: NgForm,
        @Optional() readonly dialogConfig: DialogConfig,
        readonly _dynamicComponentService: DynamicComponentService,
        @Optional() @Inject(DATA_PROVIDERS) private _providers: Map<string, DataProvider<any>>,
        readonly _multiComboboxConfig: MultiComboboxConfig,
        private readonly _viewContainerRef: ViewContainerRef,
        private readonly _injector: Injector,
        @Optional() @SkipSelf() @Host() @Inject(FD_FORM_FIELD) formField: PlatformFormField,
        @Optional() @SkipSelf() @Host() @Inject(FD_FORM_FIELD_CONTROL) formControl: PlatformFormFieldControl,
        @Inject(MAP_LIMIT) _mapLimit: number,
        readonly contentDensityObserver: ContentDensityObserver
    ) {
        super(
            cd,
            elementRef,
            ngControl,
            controlContainer,
            ngForm,
            dialogConfig,
            _multiComboboxConfig,
            formField,
            formControl,
            _mapLimit
        );

        if (!deprecationWarningShown && isDevMode()) {
            warnOnce(
                `[DEPRECATION] Platform Multi Combobox component is deprecated since v0.39.0. Please migrate to Core's version.`
            );
            deprecationWarningShown = true;
        }
    }

    /** @hidden */
    ngOnInit(): void {
        super.ngOnInit();

        const providers = this._providers?.size === 0 ? this._multiComboboxConfig.providers : this._providers;
        // if we have both prefer dataSource
        if (!this.dataSource && this.entityClass && providers?.has(this.entityClass)) {
            this.dataSource = new MultiComboBoxDataSource(providers.get(this.entityClass)!);
        }
    }

    /** @hidden */
    ngAfterViewInit(): void {
        super.ngAfterViewInit();

        if (this.mobile) {
            this._setUpMobileMode();
        }

        this._setSelectedSuggestions();

        this._tokenizer._showOverflowPopover = false;
    }

    /** @hidden */
    toggleSelection(item: SelectableOptionItem): void {
        const idx = this._getTokenIndexByIdlOrValue(item);

        if (idx === -1) {
            this._selectedSuggestions.push(item);
        } else {
            this._selectedSuggestions.splice(idx, 1);
        }

        item.selected = !item.selected;

        this._propagateChange();

        if (!this._selectedSuggestions.length) {
            this._focusToSearchField();
        }

        this._cd.detectChanges();
    }

    /** @hidden */
    onOptionCheckboxClicked(event: MouseEvent, index: number): void {
        event.stopPropagation();
        this._onListElementClicked(event, index);
    }

    /** @hidden */
    onCompleteTerm(event: AutoCompleteEvent): void {
        if (event.forceClose) {
            this.toggleSelectionByInputText(event.term);
            this.close();
        }
    }

    /** @hidden */
    toggleSelectionByInputText(text = this.inputText): void {
        const item = this._getSelectItemByInputValue(text);
        if (item) {
            this.toggleSelection(item);
            this.inputText = '';
        }
    }

    /**
     * @hidden
     * Method that selects all possible options.
     * *select* attribute – if *true* select all, if *false* unselect all
     * */
    handleSelectAllItems(select: boolean): void {
        this._flatSuggestions.forEach((item) => (item.selected = select));
        this._selectedSuggestions = select ? [...this._flatSuggestions] : [];
        this._rangeSelector.reset();

        this._propagateChange();
    }

    /** @hidden */
    navigateByTokens(event: KeyboardEvent): void {
        if (KeyUtil.isKeyCode(event, [DOWN_ARROW, UP_ARROW]) && this.isOpen) {
            this.listComponent.items?.first.focus();
        }
    }

    /** @hidden */
    removeToken(token: SelectableOptionItem, event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this.toggleSelection(token);
        this._rangeSelector.reset();
    }

    /** @hidden */
    moreClicked(): void {
        this._suggestions = this.isGroup
            ? this._convertObjectsToGroupOptionItems(this._selectedSuggestions.map(({ value }) => value))
            : this._suggestions.filter((value) =>
                  this._selectedSuggestions.some((item) => equal(item.value, value.value))
              );

        this.showList(true);
        this.selectedShown$.next(true);
        this._cd.markForCheck();
    }

    /** @hidden */
    onBlur(event: FocusEvent): void {
        const target = event.relatedTarget as HTMLElement;
        if (target) {
            const isList = !!target.closest('.fdp-multi-combobox__list-container');
            if (isList) {
                return;
            }
            this.showList(false);
            this.inputText = '';
        }
    }

    /**
     * @hidden
     * Method to set input text as item label.
     */
    setInputTextFromOptionItem(item: OptionItem): void {
        this.inputText = item.label;

        if (this.mobile) {
            return;
        }

        this.showList(false);
    }

    /** @hidden */
    onItemKeyDownHandler(event: KeyboardEvent, index: number): void {
        if (KeyUtil.isKeyCode(event, ESCAPE)) {
            this._focusToSearchField();
            this.close();
        } else if (event.shiftKey && KeyUtil.isKeyCode(event, TAB)) {
            event.preventDefault();
            this.listComponent?.setItemActive(index - 1);
        } else if (KeyUtil.isKeyCode(event, TAB)) {
            event.preventDefault();
            this.listComponent?.setItemActive(index + 1);
        } else if ((event.ctrlKey || event.metaKey) && event.shiftKey && KeyUtil.isKeyCode(event, A)) {
            event.preventDefault();
            this.handleSelectAllItems(false);
        } else if ((event.ctrlKey || event.metaKey) && KeyUtil.isKeyCode(event, A)) {
            event.preventDefault();
            this.handleSelectAllItems(true);
        } else if (KeyUtil.isKeyCode(event, ENTER)) {
            if (!this.mobile) {
                this.close();
            }
            this._rangeSelector.reset();
        } else if (KeyUtil.isKeyCode(event, SPACE)) {
            this._rangeSelector.reset();
        }
    }

    /** @hidden */
    onOptionClicked(event: MouseEvent, index: number): void {
        this._onListElementClicked(event, index);
        this.close();
    }

    /** @hidden */
    _addOnClicked(event: Event): void {
        this.addOnButtonClicked.emit(event);
        if (!this.mobile) {
            this.onPrimaryButtonClick(this.isOpen);
        }
    }

    /**
     * @hidden
     * applying range selection. Note, that this function will be invoked after combobox item's value has been changed
     */
    private _onListElementClicked(event: MouseEvent, index: number): void {
        // value has been changed at this point, so it can be safely used
        const selectionState = this._suggestions[index].selected;
        this._rangeSelector.onRangeElementToggled(index, event);
        const toRemoveSet = new Set();
        this._rangeSelector.applyValueToEachInRange((idx) => {
            const current = this._suggestions[idx];
            if (current.selected !== selectionState) {
                if (current.selected) {
                    // removing from "_selectedSuggestions" list
                    toRemoveSet.add(current.value);
                } else {
                    // adding current item to "_selectedSuggestions"
                    this._selectedSuggestions.push(current);
                }
                current.selected = selectionState;
            }
        });
        this._selectedSuggestions = this._selectedSuggestions.filter((s) => !toRemoveSet.has(s.value));
        // selected items should be displayed in the same order as options
        const valueIndexes = new Map<any, number>(this._suggestions.map((s, i) => [s.value, i]));
        this._selectedSuggestions.sort((a, b) => valueIndexes.get(a.value)! - valueIndexes.get(b.value)!);
        this._propagateChange();

        this._tokenizer.onResize();

        this._tokenizer.tokenizerInnerEl.nativeElement.scrollLeft =
            this._tokenizer.tokenizerInnerEl.nativeElement.scrollWidth;
    }

    /** @hidden Handle dialog dismissing, closes popover and sets backup data. */
    dialogDismiss(backup: SelectableOptionItem[]): void {
        this._selectedSuggestions = [...backup];
        this.inputText = '';
        this.showList(false);
        this.selectedShown$.next(false);
    }

    /** @hidden Handle dialog approval, closes popover and propagates data changes. */
    dialogApprove(): void {
        this.inputText = '';
        this.showList(false);
        this._propagateChange(true);
    }

    /** @hidden */
    private _getTokenIndexByIdlOrValue(item: SelectableOptionItem): number {
        return this._selectedSuggestions.findIndex((token) => token.id === item.id || equal(token.value, item.value));
    }

    /** @hidden */
    private _mapAndUpdateModel(): void {
        const selectedItems = this._selectedSuggestions.map(({ value }) => value);

        // setting value, it will call setValue()
        this.value = selectedItems;

        this._emitChangeEvent();
    }

    /** @hidden */
    private _propagateChange(emitInMobile?: boolean): void {
        if (!this.mobile || emitInMobile) {
            this.onChange(this._selectedSuggestions);
            this._mapAndUpdateModel();
        }
    }

    /** @hidden */
    private async _setUpMobileMode(): Promise<void> {
        const injector = Injector.create({
            providers: [{ provide: MULTICOMBOBOX_COMPONENT, useValue: this }],
            parent: this._injector
        });

        await this._dynamicComponentService.createDynamicModule(
            { listTemplate: this.listTemplate, controlTemplate: this.mobileControlTemplate },
            PlatformMultiComboboxMobileModule,
            MultiComboboxMobileComponent,
            this._viewContainerRef,
            injector
        );
    }
}
