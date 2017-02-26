import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { ChallengeListComponent } from './challenge/challangelist.component'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ColorDirective} from "./challenge/color.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent, ChallengeListComponent, ColorDirective],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
