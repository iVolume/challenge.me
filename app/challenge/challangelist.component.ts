import {Component, OnInit, Input} from "@angular/core";
import {count} from "rxjs/operator/count";

@Component({
    selector: 'challange-list',
    templateUrl: './app/challenge/challengelist.component.html',
    styleUrls: ['./app/challenge/challengelist.component.css']
})
export class ChallengeListComponent implements OnInit{
    challenges: any[] = [
        {
            "imageUrl": "app/assets/images/1.jpg",
            "caption": "Teeth challenge",
            "startDate": "13/02/2017",
            "finishDate": "20/02/2017",
            "failCount": 0,
            "difficultLevel": 1
        },
        {
            "imageUrl": "app/assets/images/2.jpg",
            "caption": "Angular2 up challenge",
            "startDate": "20/02/2017",
            "finishDate": "27/02/2017",
            "failCount": 0,
            "difficultLevel": 2
        }
    ];

    name: string = 'iVolume';

    count: number = 0;

    @Input() chCaption: string;

    ngOnInit(): void{
        console.log('Запустилось!')
    }

    onChange(): void{
        console.log(this.name);
    }

    getInfo(): void{
        event.preventDefault();
        console.log(this.closest(event.target, '.ch-item').querySelector('figcaption').innerText);
    }

    closest(target: any, selector: any) {
        while (target) {
            if (target.matches && target.matches(selector)) return target;
            target = target.parentNode;
        }
        return null;
    }



}
