import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { OverflowListDirective } from './overflow-list.directive';
import { OverflowListItemDirective } from './overflow-list-item.directive';
import { ViewportRuler } from '@angular/cdk/overlay';

const LIST_ITEM_WIDTH = 100;
const LIST_WIDTH = 500;

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'test-component',
    template: `
        <div #dirRoot class="list" fdkOverflowList (overflowChanged)="onOverflowed($event)">
            <div *ngFor="let item of items" fdkOverflowListItem class="list-item">{{ item }}</div>
        </div>
    `,
    styles: [
        `
            .list {
                position: relative;
                display: flex;
                overflow: hidden;
                width: ${LIST_WIDTH}px;
            }
            .list-item {
                display: block;
                box-sizing: border-box;
                min-width: ${LIST_ITEM_WIDTH}px;
                height: 40px;
            }
        `
    ]
})
class TestComponent {
    @Input()
    items: any[];

    @Output()
    selected = new EventEmitter();

    onOverflowed(extraItems: number): void {
        this.selected.emit(extraItems);
    }
}

@Component({
    template: ` <test-component [items]="items" (selected)="onOverflowed($event)"></test-component> `
})
class WrapperComponent {
    items: any[] = Array(100).fill(0);

    currentExtraItems = 0;

    onOverflowed(extraItems: number): void {
        this.currentExtraItems = extraItems;
    }
}

describe('OverflowItemsDirective', () => {
    let component: WrapperComponent;
    let fixture: ComponentFixture<WrapperComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WrapperComponent, TestComponent],
            imports: [OverflowListDirective, OverflowListItemDirective],
            providers: [ViewportRuler]
        }).compileComponents();
    }));

    beforeEach(async () => {
        Object.defineProperty(global.window.HTMLElement.prototype, 'clientWidth', {
            configurable: true,
            value: LIST_WIDTH
        });
        Object.defineProperty(global.window.HTMLElement.prototype, 'offsetWidth', {
            configurable: true,
            value: LIST_WIDTH
        });
        Object.defineProperty(global.window.HTMLElement.prototype, 'offsetLeft', {
            configurable: true,
            value: LIST_WIDTH
        });
        fixture = TestBed.createComponent(WrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenRenderingDone();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should calculated extra items', () => {
        expect(component.currentExtraItems).not.toBe(0);
    });

    it('should recalculate on resize page', fakeAsync(() => {
        const initialStateOfExtraItems = component.currentExtraItems;

        component.items.push(1231);
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        tick(60);

        fixture.whenStable().then(() => {
            const stateOfExtraItemsAfterResize = component.currentExtraItems;
            expect(initialStateOfExtraItems).not.toBe(stateOfExtraItemsAfterResize);
        });
    }));
});
