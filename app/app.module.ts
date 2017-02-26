import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { ChallengeListComponent } from './challenge/challangelist.component'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NewsComponent} from "./news/news.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent, ChallengeListComponent, NewsComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
