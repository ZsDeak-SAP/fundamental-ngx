import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { FdpFormGroupModule, PlatformInputGroupModule } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-input-group-form-example',
    templateUrl: './platform-input-group-form-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FdpFormGroupModule,
        PlatformInputGroupModule,
        FormsModule,
        ReactiveFormsModule,
        PlatformButtonModule,
        NgIf,
        JsonPipe
    ]
})
export class PlatformInputGroupFormExampleComponent {}
