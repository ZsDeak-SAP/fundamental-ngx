import { Component } from '@angular/core';
import { IconModule } from '@fundamental-ngx/core/icon';
import { PlatformLinkModule } from '@fundamental-ngx/platform/link';

@Component({
    selector: 'fdp-platform-link-disabled-emphasized-example',
    templateUrl: './platform-link-disabled-emphasized-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule, IconModule]
})
export class PlatformLinkDisabledEmphasizedExampleComponent {}

@Component({
    selector: 'fdp-platform-link-disabled-example',
    templateUrl: './platform-link-disabled-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule, IconModule]
})
export class PlatformLinkDisabledExampleComponent {}

@Component({
    selector: 'fdp-platform-link-emphasized-example',
    templateUrl: './platform-link-emphasized-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule, IconModule]
})
export class PlatformLinkEmphasizedExampleComponent {}

@Component({
    selector: 'fdp-platform-link-icon-example',
    templateUrl: './platform-link-icon-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule, IconModule]
})
export class PlatformLinkIconExampleComponent {}

@Component({
    selector: 'fdp-platform-link-inverted-example',
    templateUrl: './platform-link-inverted-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule]
})
export class PlatformLinkInvertedExampleComponent {}

@Component({
    selector: 'fdp-platform-link-standard-example',
    templateUrl: './platform-link-standard-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule, IconModule]
})
export class PlatformLinkStandardExampleComponent {}

@Component({
    selector: 'fdp-platform-link-truncated-example',
    templateUrl: './platform-link-truncated-example.component.html',
    standalone: true,
    imports: [PlatformLinkModule]
})
export class PlatformLinkTruncatedExampleComponent {}
