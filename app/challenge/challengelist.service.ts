import {Component} from "@angular/core";

@Component({})
export class ChallengeService{
    _challenges: any[] = [
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
