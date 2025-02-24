import { Component } from '@angular/core';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { CardModule } from '@fundamental-ngx/core/card';
import { IllustratedMessageModule } from '@fundamental-ngx/core/illustrated-message';

@Component({
    selector: 'fd-illustrated-message-spot-example',
    templateUrl: './illustrated-message-spot-example.component.html',
    standalone: true,
    imports: [CardModule, IllustratedMessageModule, ButtonModule]
})
export class IllustratedMessageSpotExampleComponent {
    spotConfig = {
        spot: { url: 'assets/images/sapIllus-Spot-NoMail.svg', id: 'sapIllus-Spot-NoEmail' }
    };
}
