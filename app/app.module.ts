import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
