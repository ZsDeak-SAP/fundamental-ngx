import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { PopoverService } from '@fundamental-ngx/core/popover';
import { CSS_CLASS_NAME, getTypeClassName } from './constants';
import { FormStates } from '@fundamental-ngx/cdk/forms';

@Injectable()
export class PopoverFormMessageService implements OnDestroy {
    /** @hidden */
    private _type: FormStates;

    /** @hidden */
    private _message: string;

    /** @hidden */
    private _hidden = false;

    /** @hidden */
    constructor(private _popoverService: PopoverService) {}

    /** @hidden */
    set messageType(type: FormStates) {
        this._type = type;
        this._updatePopover();
    }

    /** @hidden */
    set message(message: string) {
        this._message = message;
        this._updatePopover();
    }

    /** @hidden */
    set triggers(triggers: string[]) {
        this._popoverService.triggers = triggers;
        this._popoverService._refreshTriggerListeners();
    }

    /** Initialise popover service with trigger element */
    init(triggerElement: ElementRef): void {
        this._popoverService.initialise(triggerElement);
    }

    /** Forces hidden state onto popover, without any collision with triggering events */
    hide(): void {
        this._hidden = true;
        this._updatePopover();
    }

    /** Removes hidden state onto popover, without any collision with triggering events */
    show(): void {
        this._hidden = false;
        this._updatePopover();
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._popoverService.onDestroy();
    }

    /** @hidden */
    private _getAdditionalClass(): string[] {
        return [
            CSS_CLASS_NAME.message,
            getTypeClassName(this._type),
            this._shouldBeHidden() ? 'fd-popover__body--hidden' : ''
        ].filter((v): v is string => !!v);
    }

    /** @hidden */
    private _updatePopover(): void {
        this._popoverService.additionalBodyClass = this._getAdditionalClass().join(' ');
        this._popoverService.updateContent(this._message, null);
    }

    /** @hidden */
    private _shouldBeHidden(): boolean {
        return this._hidden || !this._message;
    }
}
