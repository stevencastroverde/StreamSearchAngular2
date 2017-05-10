import {Component, Input, OnInit} from '@angular/core';
import { GuideBoxService } from '../services/guidebox/guide-box.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  private freeResources: boolean;
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




  constructor(private GuideBoxService: GuideBoxService, private router: Router) { }

  ngOnInit() {
       this.callFreeShows();
  }

  callFreeShows() {
      this.freeResources = false;
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
          this.freeResources = true;
        });
  }
  searchEventHandler(event: any) {
    this.searchShows(event.term);
    this.userSubscriptions = event.list;
  };
  selectShowEventHandler(event: any) {
    this.router.navigate([`/shows/${event.resultId}/${this.userSubscriptions}`]);
  };
}
