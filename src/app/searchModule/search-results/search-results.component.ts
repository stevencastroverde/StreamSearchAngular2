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
  @Output () selectShow: EventEmitter<any> = new EventEmitter();
  showId: number;
  showTitle: string;
  constructor() { }

  ngOnInit() {

  }
  emitShowInfo(id: number, title: string) {
    this.selectShow.emit({
      showId: id,
      showTitle: title
    });
  }
}
