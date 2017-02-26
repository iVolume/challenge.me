import {Component, Input} from "@angular/core";

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent{
    title: string = 'Вызов брошен..';
    mainCaption : string;
    caption: string = 'Из app.component мы!';
    test: string;

    maining(caption: string){
        console.log(caption);
        this.mainCaption = caption;
    }

    seeInside(num:string): void {
        this.test = num + ' от главного.';
    }

}