import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { ChallengeListComponent } from './challenge/challangelist.component'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    declarations: [ AppComponent, ChallengeListComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
