import { CdkScrollable } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { BarModule } from '@fundamental-ngx/core/bar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { DialogModule, DialogService } from '@fundamental-ngx/core/dialog';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';
import { TitleComponent } from '@fundamental-ngx/core/title';

@Component({
    selector: 'fd-auto-label-dialog-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './auto-label-dialog-example.component.html',
    standalone: true,
    imports: [DialogModule, TitleComponent, CdkScrollable, ScrollbarDirective, BarModule, ButtonModule]
})
export class AutoLabelDialogExampleComponent {
    confirmationReason: string;

    constructor(private _dialogService: DialogService, private _cdr: ChangeDetectorRef) {}

    openDialog(dialog: TemplateRef<any>): void {
        const dialogRef = this._dialogService.open(dialog, {
            responsivePadding: true
        });

        dialogRef.afterClosed.subscribe(
            (result) => {
                this.confirmationReason = 'Dialog closed with result: ' + result;
                this._cdr.detectChanges();
            },
            (error) => {
                this.confirmationReason = 'Dialog dismissed with result: ' + error;
                this._cdr.detectChanges();
            }
        );
    }
}
