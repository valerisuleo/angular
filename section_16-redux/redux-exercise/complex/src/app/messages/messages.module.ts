import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging/messaging.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        MessagingComponent
    ],
    declarations: [
        MessagingComponent
    ],
    providers: [],
})
export class MessageModule { }
