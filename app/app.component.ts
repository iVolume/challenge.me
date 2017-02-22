import {Component} from "@angular/core";

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ pageTitle }}</h1>
        <challange-list [chCaption]="mainCaption"></challange-list>
    `
})
export class AppComponent{

    pageTitle: string = "Список челленджей";
    mainCaption: string ='Как звать тебя?'
}