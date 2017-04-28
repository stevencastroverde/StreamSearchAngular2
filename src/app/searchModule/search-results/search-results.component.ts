import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    private _searchResults: Object[];
  @Input ()
    set searchResults(results: Object[]) {
    this._searchResults = results;
  };
  get searchResults(): Object[] {
    return this._searchResults;
  };
  @Output () selectShow: EventEmitter<number> = new EventEmitter();
  showId: number;
  constructor() { }

  ngOnInit() {

  }
  emitShowId(id: number) {
    this.selectShow.emit(id);
  }
}
