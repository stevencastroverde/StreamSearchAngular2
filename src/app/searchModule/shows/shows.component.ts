import {Component, Input, OnInit} from '@angular/core';
import { GuideBoxService } from '../services/guidebox/guide-box.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  @Input () searchTerm: string;
  @Input () selectedShowId: number;
  private _searchResults: Object[];
  private _userSubscriptions: string;
  // Setter and Getter for Search Results
    set searchResults(shows: Object[]) {
     this._searchResults = shows;
   }
   get searchResults(): Object[] {
     return this._searchResults;
   }
  @Input ()
    set userSubscriptions(value: string){
      this._userSubscriptions = value;
      if (this._userSubscriptions === null) {
        this._userSubscriptions = 'free';
      }
    }
    get userSubscriptions(): string {
      return this._userSubscriptions;
    }




  constructor(private GuideBoxService: GuideBoxService) { }

  ngOnInit() {
       this.callFreeShows();
  }

  callFreeShows() {
    this.GuideBoxService.callFreeShows()
      .subscribe(
        data => {
          this.searchResults = data.results;
        }
      );
  };
  searchShows(searchTerm: string) {
    this.GuideBoxService.searchShows(searchTerm)
      .subscribe(
        data => {
          this.searchResults = data.results;
          console.log(this.searchResults);
        });
  }
  getSpecficShow(showId: number) {
    this.GuideBoxService.getSpecificShow(showId, this.userSubscriptions)
      .subscribe(data => console.log(data));
  }
  searchEventHandler(event: any) {
    this.searchShows(event.term);
    this.userSubscriptions = event.list;
  };
  selectShowEventHandler(showId: number) {
    this.getSpecficShow(showId);
  };
}
