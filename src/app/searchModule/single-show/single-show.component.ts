import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';
import {groupBy} from "rxjs/operator/groupBy";


@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  private showInfo: any;
  private seasons: any;
  private backgrounds: any;
  private relatedShows: any;
  private backgroundImage: any;
  private userSubscriptions: any;


  constructor(private currentRoute: ActivatedRoute, private GuideBox: GuideBoxService, ) {}


    ngOnInit(): void {
     this.currentRoute.data
       .subscribe((data: {results: any}) => {
        this.showInfo = data.results[0];
        this.seasons = this.sortEpisodesBySeason(data.results[1].results);
        this.backgrounds = data.results[2].results.backgrounds;
        this.relatedShows = data.results[3].results;
       });
      this.userSubscriptions = this.currentRoute.params['value']['subscriptions'];
      console.log(this.seasons);
    };



  sortEpisodesBySeason(array) {
    let seasonNumber = {};
    for ( let i = 0; i < array.length; i++) {
      let season = array[i].season_number;
      if (!seasonNumber[season]) {
        seasonNumber[season] = [];
      }
       seasonNumber[season].push(array[i]);
    }
    const myArray = [];
    for (let key in seasonNumber) {
      myArray.push({season: key, episodes: seasonNumber[key]});
    }
    return myArray;
  }




}
