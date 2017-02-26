import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'news',
    templateUrl: './app/news/news.component.html'
})
export class NewsComponent{
    caption : string = 'Hello!';

    @Output() capting = new EventEmitter<string>();
    captingGo(caption: string):void{
        this.capting.emit(caption)
    }
}
