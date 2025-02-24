import { Component, Input, OnInit } from '@angular/core';
import { PlatformIconTabBarModule, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';
import { cloneDeep } from 'lodash-es';
import { iconTypeConfig, longIconTypeConfig } from '../config-for-examples/icon-type-config';

@Component({
    selector: 'fd-icon-tab-bar-icon-type-example',
    templateUrl: './platform-icon-tab-bar-icon-type-example.component.html',
    standalone: true,
    imports: [PlatformIconTabBarModule]
})
export class PlatformIconTabBarIconTypeExampleComponent implements OnInit {
    @Input()
    withOverflowExample = false;

    items: TabConfig[];

    ngOnInit(): void {
        this.items = this.withOverflowExample ? cloneDeep(longIconTypeConfig) : cloneDeep(iconTypeConfig);
    }
}
