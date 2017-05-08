import { Component, OnInit, Input } from '@angular/core';
import { GuideBoxService } from '../services/guidebox/guide-box.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input () searchTerm: string;
  @Input () selectedMovieId: number;
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

  }

  getFreeMovies() {
    this.GuideBoxService.getFreeMovies()
      .subscribe(data => console.log(data));
  }
  searchShows(searchTerm: string) {
    this.GuideBoxService.searchMovies(searchTerm)
      .subscribe(
        data => {
          this.searchResults = data.results;
          console.log(this.searchResults);
        });
  }
  searchEventHandler(event: any) {
    this.searchShows(event.term);
    this.userSubscriptions = event.list;
  };
  selectMovieEventHandler(event: any) {
    // this.router.navigate([`/movies/${event.resultId}/${this.userSubscriptions}`]);
    console.log(event, this.userSubscriptions);
  };
}
