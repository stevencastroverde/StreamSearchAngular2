import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';


@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  private showInfo: any;
  private episodes: any;
  private backgrounds: any;
  private relatedShows: any;
  private backgroundImage: any;
  private userSubscriptions: any;


  constructor(private currentRoute: ActivatedRoute, private GuideBox: GuideBoxService, ) {}


    ngOnInit(): void {
     this.currentRoute.data
       .subscribe((data: {results: any}) => {
        this.showInfo = data.results[0];
        this.episodes = data.results[1].results;
        this.backgrounds = data.results[2].results.backgrounds;
        this.relatedShows = data.results[3].results;
        console.log(this.currentRoute.params);
       });
      this.userSubscriptions = this.currentRoute.params['value']['subscriptions'];
    };









}
