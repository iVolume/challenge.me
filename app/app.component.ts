import {Component} from "@angular/core";

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ pageTitle }}</h1>
        <h2>{{ justnum }}</h2>
        <challange-list [chCaption]="mainCaption" (onChanged)="onChanged($event)"></challange-list>
        
    `
})
export class AppComponent{

    pageTitle: string = "Список челленджей";
    mainCaption: string ='Как звать тебя?'

    justnum: number = 0;
    onChanged(crease:any){
        crease == false? this.justnum-- : this.justnum++;
    }
}