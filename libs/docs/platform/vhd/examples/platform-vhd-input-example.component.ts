import { Component, OnInit } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { FormLabelComponent } from '@fundamental-ngx/core/form';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { TokenComponent, TokenizerComponent, TokenizerInputDirective } from '@fundamental-ngx/core/token';
import { ToolbarItemDirective } from '@fundamental-ngx/core/toolbar';
import {
    PlatformValueHelpDialogModule,
    ValueHelpDialogDataSource,
    VhdDataProvider,
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
    selector: 'fdp-platform-vhd-input-example',
    templateUrl: './platform-vhd-input-example.component.html',
    standalone: true,
    imports: [
        FormLabelComponent,
        InputGroupModule,
        ButtonModule,
        ContentDensityDirective,
        PlatformValueHelpDialogModule,
        NgFor,
        TokenComponent,
        TokenizerComponent,
        TokenizerInputDirective,
        ToolbarItemDirective,
        NgIf
    ]
})
export class PlatformVhdInputExampleComponent implements OnInit {
    filters: FilterData[];
    dataSource: ValueHelpDialogDataSource<ExampleTestModel>;

    valuesSingle: ExampleTestModel | null = null;
    valuesMulti: ExampleTestModel[] | null = null;
    valuesOnce: ExampleTestModel | null = null;

    ngOnInit(): void {
        const data = exampleDataSource();
        this.filters = data.filters;
        this.dataSource = new ValueHelpDialogDataSource(new VhdDataProvider(data.dataSource));
    }

    vhd1ValueChange(event: VhdValueChangeEvent<ExampleTestModel>): void {
        this.valuesSingle = event.selected[0];
    }

    vhd2ValueChange(event: VhdValueChangeEvent<ExampleTestModel[]>): void {
        this.valuesMulti = event.selected[0];
    }

    vhd3ValueChange(event: VhdValueChangeEvent<ExampleTestModel>): void {
        this.valuesOnce = event.selected[0];
    }
}
