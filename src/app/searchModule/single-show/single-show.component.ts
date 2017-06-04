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
        this.episodes = this.sortEpisodesBySeason(data.results[1].results);
        this.backgrounds = data.results[2].results.backgrounds;
        this.relatedShows = data.results[3].results;
       });
      this.userSubscriptions = this.currentRoute.params['value']['subscriptions'];
      console.log(this.episodes);
    };



  sortEpisodesBySeason(array) {
    let episodesBySeason = {};
    for ( let i = 0; i < array.length; i++) {
      let results = array[i];
      if (!episodesBySeason[results.season_number]) {
        episodesBySeason[results.season_number] = {};
      }
      let season = episodesBySeason[array[i].season_number];
      season[results.episode_number] = results;
    }
    const myArray = [];
    for(let seasonNumber in episodesBySeason) {
      myArray.push({season: seasonNumber, episodes: episodesBySeason[seasonNumber]});
    }
    return myArray;
  }




}
