import { ComponentFixture, TestBed } from '@angular/core/testing';

import { whenStable } from '@fundamental-ngx/core/tests';
import { MessageBoxConfig, MessageBoxHost } from '../utils/message-box-config.class';
import { MessageBoxBodyComponent } from './message-box-body.component';

describe('MessageBoxBodyComponent', () => {
    let component: MessageBoxBodyComponent;
    let fixture: ComponentFixture<MessageBoxBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageBoxBodyComponent],
            providers: [
                {
                    provide: MessageBoxHost,
                    useValue: { _messageBoxConfig: { ...new MessageBoxConfig(), verticalPadding: false } }
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageBoxBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should apply proper css classes', async () => {
        await whenStable(fixture);

        expect(fixture.nativeElement.classList).toContain('fd-message-box__body--no-vertical-padding');
    });
});
