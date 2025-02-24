import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {
    FileSizeExceedEvent,
    FilenameLengthExceedEvent,
    ItemPerPage,
    PlatformUploadCollectionModule,
    TypeMismatchEvent,
    UploadCollectionDataSource
} from '@fundamental-ngx/platform/upload-collection';
import { PlatformUploadCollectionDataProviderExample } from './platform-upload-collection-base-data-provider';

@Component({
    selector: 'fdp-upload-collection-disabled-example',
    templateUrl: './platform-upload-collection-disabled-example.component.html',
    standalone: true,
    imports: [PlatformUploadCollectionModule]
})
export class PlatformUploadCollectionDisabledExampleComponent {
    dataSource: UploadCollectionDataSource;
    itemsPerPage: ItemPerPage[] = [
        {
            label: 5,
            default: false
        },
        {
            label: 10,
            default: true
        },
        {
            label: 15,
            default: false
        },
        {
            label: 20,
            default: false
        }
    ];

    mimeTypes: string[] = ['image/png', 'image/jpeg'];
    fileTypes: string[] = ['jpg', 'png', 'bmp'];

    constructor(private readonly _http: HttpClient) {
        this.dataSource = new UploadCollectionDataSource(new PlatformUploadCollectionDataProviderExample(_http));
    }

    typeMismatch({ source, payload }: TypeMismatchEvent): void {
        console.log('typeMismatch', source, payload);
    }

    filenameLengthExceed({ source, payload }: FilenameLengthExceedEvent): void {
        console.log('filenameLengthExceed', source, payload);
    }

    fileSizeExceed({ source, payload }: FileSizeExceedEvent): void {
        console.log('fileSizeExceed', source, payload);
    }
}
