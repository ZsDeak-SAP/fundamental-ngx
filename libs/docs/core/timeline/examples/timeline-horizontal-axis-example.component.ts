import { CdkScrollable } from '@angular/cdk/overlay';
import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarComponent } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';
import { TimelineAxis, TimelineModule, TimelineSidePosition } from '@fundamental-ngx/core/timeline';
import { TIMELINE_EXAMPLE_DATA } from './timeline-basic-example/timeline-example-data';

@Component({
    selector: 'fd-timeline-horizontal-axis',
    templateUrl: './timeline-template-example.component.html',
    standalone: true,
    imports: [
        CdkScrollable,
        ScrollbarDirective,
        TimelineModule,
        AvatarComponent,
        NgIf,
        ButtonModule,
        ContentDensityDirective,
        DatePipe
    ]
})
export class TimelineHorizontalAxisExampleComponent {
    data = TIMELINE_EXAMPLE_DATA;

    axis: TimelineAxis = 'horizontal';

    layout: TimelineSidePosition = 'top';
}
