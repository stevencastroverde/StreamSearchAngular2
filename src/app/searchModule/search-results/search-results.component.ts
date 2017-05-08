import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    private _searchResults: Object[];
    private showsOrMovies: boolean;
  @Input ()
    set searchResults(results: Object[]) {
    this._searchResults = results;
  };
  get searchResults(): Object[] {
    return this._searchResults;
  };
  @Output () selectResult: EventEmitter<any> = new EventEmitter();
  resultId: number;
  resultTitle: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  this.showResults();
  }
  emitResultsInfo(id: number, title: string) {
    this.selectResult.emit({
      resultId: id,
      resultTitle: title
    });
  }
  // boolean value true = show results | false = movie results
  showResults() {
    if (this.router.url === '/shows') {
      this.showsOrMovies = true;
    } else {
      this.showsOrMovies = false;
    }
  }
}
