import { Component, ViewChild } from '@angular/core';

import { BarModule } from '@fundamental-ngx/core/bar';
import { SplitterComponent, SplitterModule, SplitterSplitPaneComponent } from '@fundamental-ngx/core/splitter';

@Component({
    selector: 'fd-slider-api-example',
    templateUrl: './splitter-api-example.component.html',
    standalone: true,
    imports: [BarModule, SplitterModule]
})
export class SplitterApiExampleComponent {
    @ViewChild(SplitterComponent)
    splitter: SplitterComponent;

    @ViewChild('paneTwo')
    paneTwo: SplitterSplitPaneComponent;

    hidePaneTwo(): void {
        this.splitter.hidePaneFromCanvas(this.paneTwo.id);

        // Also can be used

        this.paneTwo.hideFromCanvas();
    }

    showPaneTwo(): void {
        this.paneTwo.showOnCanvas();

        // Also can be used

        this.splitter.showPaneOnCanvas(this.paneTwo.id);
    }
}
