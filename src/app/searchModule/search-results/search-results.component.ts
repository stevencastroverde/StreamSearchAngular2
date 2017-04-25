import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    private _freeContent: Object;
  @Input()
   set freeContent(results: Object) {
    this._freeContent = results;
  }
  get freeContent(): Object {
    return this._freeContent;
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
      console.log(data);
      });
  }

}
