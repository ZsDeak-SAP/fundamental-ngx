import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { IconModule } from '@fundamental-ngx/core/icon';
import { MenuModule } from '@fundamental-ngx/core/menu';
import { DynamicComponentService, PipeModule } from '@fundamental-ngx/cdk/utils';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';
import { PlatformMenuModule } from '@fundamental-ngx/platform/menu';

import { SearchFieldComponent, SearchFieldSuggestionDirective, SuggestionMatchesPipe } from './search-field.component';
import { I18nModule } from '@fundamental-ngx/i18n';
import { SelectModule } from '@fundamental-ngx/core/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OverlayModule,
        IconModule,
        MenuModule,
        PipeModule,
        PlatformMenuModule,
        ContentDensityModule,
        I18nModule,
        SelectModule
    ],
    exports: [SearchFieldComponent, SearchFieldSuggestionDirective, SuggestionMatchesPipe, ContentDensityModule],
    declarations: [SearchFieldComponent, SearchFieldSuggestionDirective, SuggestionMatchesPipe],
    providers: [DynamicComponentService]
})
export class PlatformSearchFieldModule {}
