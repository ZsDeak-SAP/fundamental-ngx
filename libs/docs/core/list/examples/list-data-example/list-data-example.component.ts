import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { ListModule, ListSecondaryDirective } from '@fundamental-ngx/core/list';
import { ToolbarComponent, ToolbarLabelDirective, ToolbarSpacerDirective } from '@fundamental-ngx/core/toolbar';
import { SortByPipe } from '@fundamental-ngx/docs/shared';

@Component({
    selector: 'fd-list-data-example',
    templateUrl: './list-data-example.component.html',
    styleUrls: ['./list-data-example.component.scss'],
    standalone: true,
    imports: [
        ToolbarComponent,
        ToolbarLabelDirective,
        ToolbarSpacerDirective,
        InputGroupModule,
        FormsModule,
        ButtonModule,
        ListModule,
        NgFor,
        NgClass,
        ListSecondaryDirective,
        NgIf,
        SortByPipe
    ]
})
export class ListDataExampleComponent implements OnInit {
    items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry'];

    ascendingSort = true;

    displayedItems: string[] = [];

    searchTerm = '';

    constructor(private liveAnnouncer: LiveAnnouncer) {}

    ngOnInit(): void {
        this.handleSearchTermChange('');
    }

    removeItem(index: number): void {
        const allValuesIndex = this.items.indexOf(this.displayedItems[index]);
        this.items.splice(allValuesIndex, 1);
        this.displayedItems.splice(index, 1);
    }

    handleSearchTermChange(searchTerm: string): void {
        this.searchTerm = searchTerm;
        this.displayedItems = this.items.filter((item) =>
            item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    }

    changeSort(ascending: boolean): void {
        this.ascendingSort = ascending;
        this.liveAnnouncer.clear();
        this.liveAnnouncer.announce(ascending ? 'ascending' : 'descending', 'assertive');
    }
}
