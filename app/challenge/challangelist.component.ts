import {Component} from "@angular/core";
import { IChallenge } from "./challengelist";

@Component({
    selector: 'challenge-list',
    templateUrl: './app/challenge/challengelist.component.html',
    styleUrls: ['./app/challenge/challengelist.component.css']
})
export class ChallengeListComponent{
    challenges: IChallenge[] = [
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

}
