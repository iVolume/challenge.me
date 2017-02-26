import {Component} from "@angular/core";

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ pageTitle }}</h1>
        <challange-list></challange-list>
        
    `
})
export class AppComponent{

    pageTitle: string = "Список челленджей";
    mainCaption: string ='Как звать тебя?';
    helloColor: string = 'blue';
    randomCaption: string = 'Обо всем';
    diff: string;
    difff: number = parseInt(this.diff);

    newsTodayCaption:string = 'Через посредника';
    newsTodayContent: number = 3;

    onChanged(condition: any[]){
        condition[0] ? condition[1]++ : condition[1] >1 ? condition[1]-- : condition[1] = condition[1];
        console.log(condition[1]);
    }
}