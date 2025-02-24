import { FocusKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Directive, HostBinding, HostListener, Inject, Input, OnDestroy, Optional } from '@angular/core';
import { KeyUtil, RtlService } from '@fundamental-ngx/cdk/utils';
import { OverflowContainer } from '../interfaces/overflow-container.interface';
import { OverflowLayoutFocusableItem } from '../interfaces/overflow-focusable-item.interface';
import { OverflowPopoverContent } from '../interfaces/overflow-popover-content.interface';
import { OverflowItemRef } from '../interfaces/overflow-item-ref.interface';
import { FD_OVERFLOW_CONTAINER } from '../tokens/overflow-container.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Directive to wrap Overlay Layout "More" popover content.
 * Used to apply keyboard navigation through the items.
 */
@Directive({
    selector: '[fdOverflowLayoutPopoverContent]'
})
export class OverflowLayoutPopoverContentDirective implements OverflowPopoverContent, OnDestroy {
    /**
     * Array of hidden items.
     */
    @Input()
    set items(value: OverflowItemRef[]) {
        // Need to set items with a delay so that elementRef of the focusable item would refresh.
        setTimeout(() => {
            this._items = value;
            this._keyboardEventsManager?.destroy();
            this._keyboardEventsManager = new FocusKeyManager(
                this._items
                    .filter((item) => item.overflowItem.focusableItem?.focusable)
                    .map((item) => item.overflowItem.focusableItem)
            )
                .withWrap()
                .withHorizontalOrientation(this._dir);
        });
    }

    /** @hidden */
    @HostBinding('class')
    private readonly _initialClass = 'fd-overflow-layout__popover-container';

    /** @hidden */
    private _keyboardEventsManager: FocusKeyManager<OverflowLayoutFocusableItem>;

    /** @hidden */
    private _items: OverflowItemRef[];

    /** @hidden */
    private _dir: 'ltr' | 'rtl' = 'ltr';

    /** @hidden */
    constructor(
        @Inject(FD_OVERFLOW_CONTAINER) private _overflowContainer: OverflowContainer,
        @Optional() private _rtl: RtlService
    ) {
        this._overflowContainer?.registerPopoverContent(this);

        this._rtl?.rtl.pipe(takeUntilDestroyed()).subscribe((rtl) => {
            this._dir = rtl ? 'rtl' : 'ltr';
            if (this._keyboardEventsManager) {
                this._keyboardEventsManager = this._keyboardEventsManager.withHorizontalOrientation(this._dir);
            }
        });
    }

    /** @hidden */
    @HostListener('keyup', ['$event'])
    keyUpHandler(event: KeyboardEvent): void {
        if (KeyUtil.isKeyCode(event, TAB)) {
            const index = this._items.findIndex((item) => item.overflowItem.elmRef.nativeElement === event.target);
            if (index !== -1) {
                this._keyboardEventsManager.setActiveItem(index);
            }
        }

        if (KeyUtil.isKeyCode(event, [DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW])) {
            event.preventDefault();

            // passing the event to key manager, so we get a change fired
            this._keyboardEventsManager.onKeydown(event);
        }
    }

    /**
     * Focuses on the first tabbable element inside directive's element.
     */
    focusFirstTabbableElement(): void {
        this._keyboardEventsManager.setActiveItem(0);
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._keyboardEventsManager?.destroy();
    }
}
