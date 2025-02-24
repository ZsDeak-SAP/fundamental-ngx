import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { NgIf } from '@angular/common';
import { BarModule } from '@fundamental-ngx/core/bar';
import { BreadcrumbModule } from '@fundamental-ngx/core/breadcrumb';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { LinkComponent } from '@fundamental-ngx/core/link';
import { ToolbarComponent, ToolbarItemDirective, ToolbarSeparatorComponent } from '@fundamental-ngx/core/toolbar';
import {
    DynamicPageBackgroundType,
    DynamicPageComponent,
    DynamicPageTabChangeEvent,
    PlatformDynamicPageModule
} from '@fundamental-ngx/platform/dynamic-page';
import { PlatformDynamicPagePageOverflowService } from './platform-dynamic-page-page-overflow.service';

@Component({
    selector: 'fdp-platform-dynamic-page-tabbed-example',
    templateUrl: './platform-dynamic-page-tabbed-example.component.html',
    styleUrls: ['./platform-dynamic-page-tabbed-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        ButtonModule,
        NgIf,
        PlatformDynamicPageModule,
        BreadcrumbModule,
        LinkComponent,
        ToolbarComponent,
        ToolbarItemDirective,
        ContentDensityDirective,
        ToolbarSeparatorComponent,
        BarModule
    ]
})
export class PlatformDynamicPageTabbedExampleComponent implements OnDestroy {
    @ViewChild('overlay')
    overlay: ElementRef<HTMLElement>;

    @ViewChild(DynamicPageComponent)
    dynamicPageComponent: DynamicPageComponent;

    fullscreen = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    background: DynamicPageBackgroundType = 'list';

    stackedTabs = false;

    constructor(private _overflowHandlingService: PlatformDynamicPagePageOverflowService) {}

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(stacked: boolean): void {
        this.stackedTabs = stacked;
        this.overlay.nativeElement.style.width = '100%';
        this.fullscreen = true;
        this._overflowHandlingService.isExampleOpened.next(true);
    }
    closePage(event: Event): void {
        event.stopPropagation();
        this.resetPageActions();
    }

    resetPageActions(): void {
        this.fullscreen = false;
        this.overlay.nativeElement.style.width = '0%';
        this._overflowHandlingService.isExampleOpened.next(false);
    }

    onTabChanged(event: DynamicPageTabChangeEvent): void {
        console.log('tab changed to ' + event.payload.id);
    }

    switchTab(id: string): void {
        this.dynamicPageComponent.setSelectedTab(id);
    }

    ngOnDestroy(): void {
        this.resetPageActions();
    }
}
