import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    Optional,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import {
    MOBILE_MODE_CONFIG,
    MobileModeBase,
    MobileModeConfigToken,
    MobileModeControl
} from '@fundamental-ngx/core/mobile-mode';
import { DialogModule, DialogService } from '@fundamental-ngx/core/dialog';
import { Nullable, TemplateDirective } from '@fundamental-ngx/cdk/utils';
import { MULTIINPUT_COMPONENT, PlatformMultiInputInterface } from '../multi-input.interface';
import { CdkScrollable } from '@angular/cdk/overlay';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { BarModule } from '@fundamental-ngx/core/bar';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';

@Component({
    selector: 'fdp-multi-input-mobile',
    templateUrl: './multi-input-mobile.component.html',
    styleUrls: ['./multi-input-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [DialogModule, NgIf, TemplateDirective, BarModule, NgTemplateOutlet, CdkScrollable, ScrollbarDirective]
})
export class PlatformMultiInputMobileComponent
    extends MobileModeBase<PlatformMultiInputInterface>
    implements OnInit, OnDestroy
{
    /** @hidden */
    @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

    /** @hidden
     * For internal usage
     * Control element, which will be rendered inside dialog.
     * List element, which will be rendered inside dialog.
     */
    childContent: Nullable<{
        listTemplate: TemplateRef<any>;
        controlTemplate: TemplateRef<any>;
    }> = null;

    /** @hidden */
    private _selectedBackup: any[];

    /** @hidden */
    constructor(
        elementRef: ElementRef,
        dialogService: DialogService,
        @Inject(MULTIINPUT_COMPONENT) multiInputComponent: PlatformMultiInputInterface,
        @Optional() @Inject(MOBILE_MODE_CONFIG) mobileModes: MobileModeConfigToken[]
    ) {
        super(elementRef, dialogService, multiInputComponent, MobileModeControl.MULTI_INPUT, mobileModes);
    }

    /** @hidden */
    ngOnInit(): void {
        this._listenOnMultiInputOpenChange();
    }

    /** @hidden */
    ngOnDestroy(): void {
        super.onDestroy();
    }

    /** @hidden */
    _handleApprove(): void {
        this.dialogRef.close();
        this._component._dialogApprove();
    }

    /** @hidden */
    _handleDismiss(): void {
        this.dialogRef.dismiss();
        this._component._dialogDismiss(this._selectedBackup);
    }

    /** @hidden */
    private _listenOnMultiInputOpenChange(): void {
        this._component.openChange
            .pipe(distinctUntilChanged(), takeUntil(this._onDestroy$))
            .subscribe((isOpen) => this._toggleDialog(isOpen));
    }

    /** @hidden */
    private _toggleDialog(open: boolean): void {
        if (!open) {
            this._handleApprove();
            return;
        }

        this._selectedBackup = [...this._component._selected];
        if (!this._dialogService.hasOpenDialogs()) {
            this._open();
        }
    }

    /** @hidden */
    private _open(): void {
        this.dialogRef = this._dialogService.open(this.dialogTemplate, {
            mobile: true,
            disablePaddings: true,
            ...this.dialogConfig,
            backdropClickCloseable: false,
            escKeyCloseable: false,
            container: this._elementRef.nativeElement
        });
    }
}
