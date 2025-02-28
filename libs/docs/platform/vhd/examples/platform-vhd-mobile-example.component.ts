import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import {
    PlatformValueHelpDialogModule,
    ValueHelpDialogDataSource,
    VhdDataProvider,
    VhdValue,
    VhdValueChangeEvent
} from '@fundamental-ngx/platform/value-help-dialog';

interface ExampleTestModel {
    id: number;
    name: string;
    code: string;
    city: string;
    zipcode: string;
    address: string;
    nickname: string;
}

interface FilterData {
    key: string;
    name: string;
    label: string;
    advanced: boolean;
}

const exampleDataSource = (): { dataSource: ExampleTestModel[]; filters: FilterData[] } => {
    const dataSource = Array(137)
        .fill(null)
        .map((_value, index) => ({
            id: index + 1,
            name: `Name ${index + 1}`,
            code: `${Math.floor(Math.random() * 99999)}`,
            city: `City ${Math.floor(Math.random() * index)}`,
            zipcode: `zipcode ${Math.floor(Math.random() * index)}`,
            address: `Address ${Math.floor(Math.random() * index)}`,
            nickname: `Nickname ${Math.floor(Math.random() * index)}`
        }));
    return {
        dataSource,
        filters: Object.keys(dataSource[0]).map((value, index) => ({
            key: value,
            name: `${value}`,
            label: `Product ${value}`,
            advanced: index > 0
        }))
    };
};

@Component({
    selector: 'fdp-platform-vhd-mobile-example',
    templateUrl: './platform-vhd-mobile-example.component.html',
    standalone: true,
    imports: [InputGroupModule, ButtonModule, PlatformValueHelpDialogModule, NgFor]
})
export class PlatformVhdMobileExampleComponent implements OnInit {
    filters: FilterData[];
    dataSource: ValueHelpDialogDataSource<ExampleTestModel>;
    selectedValue: Nullable<ExampleTestModel>;
    currentValue: Partial<VhdValue> = {};

    ngOnInit(): void {
        const data = exampleDataSource();
        this.filters = data.filters;
        this.dataSource = new ValueHelpDialogDataSource(new VhdDataProvider(data.dataSource));
    }

    valueChange($event: VhdValueChangeEvent<ExampleTestModel>): void {
        this.currentValue = $event;
        this.selectedValue = $event.selected[0];
    }
}
