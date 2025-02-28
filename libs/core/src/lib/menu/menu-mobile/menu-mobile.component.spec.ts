import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FD_DIALOG_FOCUS_TRAP_ERROR } from '@fundamental-ngx/core/dialog';
import { MobileModeConfig } from '@fundamental-ngx/core/mobile-mode';
import { getMobileModeViewElements, MOBILE_CONFIG_TEST_TOKEN, whenStable } from '@fundamental-ngx/core/tests';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuComponent } from '../menu.component';
import { MenuModule } from '../menu.module';
import { MenuMobileComponent } from './menu-mobile.component';
import { MenuMobileModule } from './menu-mobile.module';

const MOBILE_CONFIG: MobileModeConfig = { title: 'Test menu title' };

@Component({
    template: `
        <fd-menu [mobile]="true" [mobileConfig]="mobileConfig">
            <li fd-menu-item [submenu]="submenu">
                <div fd-menu-interactive>
                    <span fd-menu-title>{{ menuItemTitle }}</span>
                </div>
            </li>
        </fd-menu>

        <fd-submenu #submenu>
            <li fd-menu-item>
                <div fd-menu-interactive></div>
            </li>
        </fd-submenu>
    `,
    standalone: true,
    imports: [MenuModule, MenuMobileModule]
})
class TesNestedMenuItemComponent {
    @ViewChild(MenuComponent) menu: MenuComponent;
    @ViewChild('menuItem') menuItem: MenuItemComponent;

    menuItemTitle = 'Test item title';

    constructor(
        public elementRef: ElementRef,
        @Inject(MOBILE_CONFIG_TEST_TOKEN) public mobileConfig: MobileModeConfig
    ) {}
}

describe('MenuMobileComponent', () => {
    let menu: MenuComponent;
    let menuMobile: MenuMobileComponent;
    let fixture: ComponentFixture<TesNestedMenuItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MenuModule, MenuMobileModule, NoopAnimationsModule, TesNestedMenuItemComponent],
            providers: [
                {
                    provide: MOBILE_CONFIG_TEST_TOKEN,
                    useValue: MOBILE_CONFIG
                },
                { provide: FD_DIALOG_FOCUS_TRAP_ERROR, useValue: true }
            ]
        }).compileComponents();
    }));

    async function setup(mobileConfig: MobileModeConfig = MOBILE_CONFIG): Promise<void> {
        TestBed.overrideProvider(MOBILE_CONFIG_TEST_TOKEN, { useValue: mobileConfig });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(TesNestedMenuItemComponent);

        await whenStable(fixture);

        menu = fixture.componentInstance.menu;
        menuMobile = fixture.componentInstance.menu['_mobileModeComponentRef'].instance;

        fixture.detectChanges();
    }

    it('should create', async () => {
        await setup();
        expect(menu).toBeTruthy();
        expect(menuMobile).toBeTruthy();
    });

    it('should open in mobile mode', async () => {
        await setup();

        await whenStable(fixture);

        const openDialogSpy = jest.spyOn(<any>menuMobile, '_openDialog');

        menu.open();

        await whenStable(fixture);

        expect(openDialogSpy).toHaveBeenCalled();
        expect(fixture.nativeElement.querySelector('.fd-dialog--active')).toBeTruthy();
    });

    it('should use custom dialog configuration', async () => {
        const customDialogClass = 'test-dialog-class';

        await setup({ dialogConfig: { dialogPanelClass: customDialogClass } });

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        expect(fixture.nativeElement.querySelector('.' + customDialogClass)).toBeTruthy();
    });

    it('should open menu sub-level', async () => {
        await setup();

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        fixture.nativeElement.querySelector('[fd-menu-interactive]').click();

        await whenStable(fixture);

        expect(menuMobile.isSubmenu).toBe(true);
    });

    it('should use correct menu title', async () => {
        await setup();

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        expect(menuMobile.title).toEqual(MOBILE_CONFIG.title as string);

        fixture.nativeElement.querySelector('[fd-menu-interactive]').click();

        await whenStable(fixture);

        expect(menuMobile.title).toEqual(fixture.componentInstance.menuItemTitle);
    });

    it('should navigate back to parent level', async () => {
        await setup();

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        fixture.nativeElement.querySelector('[fd-menu-interactive]').click();

        await whenStable(fixture);

        expect(menuMobile.isSubmenu).toBe(true);
        fixture.nativeElement.querySelector('#menu-mobile-navigate-back').click();

        await whenStable(fixture);

        expect(menuMobile.isSubmenu).toBe(false);
    });

    it('should properly render with empty MobileConfig', async () => {
        await setup({});

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        const mobileElements = getMobileModeViewElements(fixture);
        expect(mobileElements.dialogFooter).toBeFalsy();
        expect(mobileElements.dialogCloseBtn).toBeFalsy();
        expect(mobileElements.footerButtons.length).toEqual(0);
    });

    it('should properly render title and close button based on MobileConfig', async () => {
        await setup({ title: MOBILE_CONFIG.title, hasCloseButton: true });

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        const mobileElements = getMobileModeViewElements(fixture);
        expect(mobileElements.dialogFooter).toBeFalsy();
        expect(mobileElements.dialogCloseBtn).toBeTruthy();
        expect(mobileElements.footerButtons.length).toEqual(0);
        expect(mobileElements.dialogTitle.textContent).toContain(MOBILE_CONFIG.title);
    });

    it('should properly render approve and dismiss buttons based on MobileConfig', async () => {
        await setup({ cancelButtonText: 'APPROVE', approveButtonText: 'DISMISS' });

        await whenStable(fixture);

        menu.open();

        await whenStable(fixture);

        const mobileElements = getMobileModeViewElements(fixture);
        expect(mobileElements.dialogFooter).toBeTruthy();
        expect(mobileElements.dialogCloseBtn).toBeFalsy();
        expect(mobileElements.footerButtons.length).toEqual(2);
    });
});
