import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BarModule } from '@fundamental-ngx/core/bar';
import { BreadcrumbModule } from '@fundamental-ngx/core/breadcrumb';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { DynamicPageModule } from '@fundamental-ngx/core/dynamic-page';
import { LinkComponent } from '@fundamental-ngx/core/link';
import { MessageToastModule, MessageToastService } from '@fundamental-ngx/core/message-toast';
import {
    DeprecatedToolbarSizeDirective,
    ToolbarComponent,
    ToolbarItemDirective,
    ToolbarSeparatorComponent
} from '@fundamental-ngx/core/toolbar';

@Component({
    selector: 'fd-dynamic-page-responsive-example',
    templateUrl: './dynamic-page-responsive-example.component.html',
    styles: [
        `
            .overlay {
                height: 100%;
                width: 100%;
                position: fixed;
                z-index: 10;
                top: 0;
                left: 0;
                background-color: rgb(255, 255, 255);
                overflow-x: hidden;
            }
            .fd-dynamic-page-section-example {
                min-height: 20vh;
            }
        `
    ],
    standalone: true,
    imports: [
        ButtonModule,
        NgIf,
        DynamicPageModule,
        BreadcrumbModule,
        ContentDensityDirective,
        LinkComponent,
        ToolbarComponent,
        DeprecatedToolbarSizeDirective,
        ToolbarItemDirective,
        ToolbarSeparatorComponent,
        CdkScrollable,
        BarModule,
        MessageToastModule
    ]
})
export class DynamicPageResponsiveExampleComponent {
    visible = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    compact = true;

    constructor(private _messageToastService: MessageToastService) {}

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(): void {
        this.visible = true;
        this._openToast('Dynamic Page has been opened');
    }

    closePage(): void {
        this.visible = false;
    }

    handleAction(action: string): void {
        this.closePage();
        this._openToast(action);
    }

    private _openToast(content: string): void {
        this._messageToastService.open(content, { duration: 3000 });
    }
}
