import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ComboboxModule, GroupFunction } from '@fundamental-ngx/core/combobox';

export type ComboboxItem = { name: string; type: string };

@Component({
    selector: 'fd-combobox-group-example',
    templateUrl: './combobox-group-example.component.html',
    standalone: true,
    imports: [ComboboxModule, FormsModule]
})
export class ComboboxGroupExampleComponent {
    searchTerm = '';

    dropdownValues: ComboboxItem[] = [
        { name: 'Apple', type: 'Fruits' },
        { name: 'Banana', type: 'Fruits' },
        { name: 'Pineapple', type: 'Fruits' },
        { name: 'Strawberry', type: 'Fruits' },
        { name: 'Broccoli', type: 'Vegetables' },
        { name: 'Carrot', type: 'Vegetables' },
        { name: 'Jalapeño', type: 'Vegetables' },
        { name: 'Spinach', type: 'Vegetables' }
    ];

    displayFunc(obj: ComboboxItem): string {
        return obj?.name ?? '';
    }

    groupFunc: GroupFunction<ComboboxItem> = (items) => ({
        Fruits: items.filter((item) => item.type === 'Fruits'),
        Vegetables: items.filter((item) => item.type === 'Vegetables')
    });
}
