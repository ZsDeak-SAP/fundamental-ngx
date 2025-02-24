import { Component } from '@angular/core';
import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import { PlatformThumbnailBasicExampleComponent } from './examples/platform-thumbnail-basic-example.component';
import { PlatformThumbnailHorizontalExampleComponent } from './examples/platform-thumbnail-horizontal-example.component';
import { PlatformThumbnailVideoMediaExampleComponent } from './examples/platform-thumbnail-video-media-example.component';
const basicThumbnailHtml = 'platform-thumbnail-basic-example.component.html';
const basicThumbnailTs = 'platform-thumbnail-basic-example.component.ts';
const horizontalThumbnailHtml = 'platform-thumbnail-horizontal-example.component.html';
const horizontalThumbnailTs = 'platform-thumbnail-horizontal-example.component.ts';
const videoThumbnailHtml = 'platform-thumbnail-video-media-example.component.html';
const videoThumbnailTs = 'platform-thumbnail-video-media-example.component.ts';

@Component({
    selector: 'app-platform-thumbnail',
    templateUrl: './platform-thumbnail.docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        PlatformThumbnailBasicExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        PlatformThumbnailHorizontalExampleComponent,
        PlatformThumbnailVideoMediaExampleComponent
    ]
})
export class PlatformThumbnailDocsComponent {
    basicThumbnail: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(basicThumbnailHtml),
            fileName: 'platform-thumbnail-basic-example'
        },
        {
            language: 'typescript',
            component: 'PlatformThumbnailBasicExampleComponent',
            code: getAssetFromModuleAssets(basicThumbnailTs),
            fileName: 'platform-thumbnail-basic-example'
        }
    ];

    horizontalThumbnail: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(horizontalThumbnailHtml),
            fileName: 'platform-thumbnail-horizontal-example'
        },
        {
            language: 'typescript',
            component: 'PlatformThumbnailHorizontalExampleComponent',
            code: getAssetFromModuleAssets(horizontalThumbnailTs),
            fileName: 'platform-thumbnail-horizontal-example'
        }
    ];

    videoThumbnail: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(videoThumbnailHtml),
            fileName: 'platform-thumbnail-video-media-example'
        },
        {
            language: 'typescript',
            component: 'PlatformThumbnailVideoMediaExampleComponent',
            code: getAssetFromModuleAssets(videoThumbnailTs),
            fileName: 'platform-thumbnail-video-media-example'
        }
    ];
}
