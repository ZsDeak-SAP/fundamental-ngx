import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    FdpFormGroupModule,
    FileUploaderInvalidChangeEvent,
    FileUploaderSelectionChangeEvent,
    PlatformFileUploaderModule
} from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-platform-file-uploader-min-file-size-example',
    templateUrl: './platform-file-uploader-min-file-size-example.component.html',
    styleUrls: ['./platform-file-uploader-min-file-size-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FdpFormGroupModule, PlatformFileUploaderModule, FormsModule, NgFor]
})
export class PlatformFileUploaderMinFileSizeExampleComponent {
    files: File[];
    invalidFiles: File[];

    handleFileSelection(files: FileUploaderSelectionChangeEvent): void {
        this.files = files.payload;
        if (this.files.length > 0) {
            alert('file uploaded' + this.files.length);
        }
    }

    handleInvalidFileSelection(files: FileUploaderInvalidChangeEvent): void {
        this.invalidFiles = files.payload;
        if (this.invalidFiles.length > 0) {
            alert('file invalid uploaded' + this.invalidFiles.length);
        }
    }
}
