import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    private _freeContent: Object[];
    private _searchResults: Object[];
  @Input()
   set freeContent(results: Object[]) {
    this._freeContent = results;
  }
  get freeContent(): Object[] {
    return this._freeContent;
  }
  @Input ()
    set searchResults(results: Object[]) {
    this._searchResults = results;
  }
  get searchResults(): Object[] {
    return this._searchResults;
  }
  constructor() { }

  ngOnInit() {

  }

}
