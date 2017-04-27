import {Component, Input, OnInit} from '@angular/core';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
 @Input () userSubscriptions: string;

  public freeShows: Object;

  constructor(private GuideBoxService: GuideBoxService) { }

  ngOnInit() {
      this.getFreeShows();
  }

  getFreeShows() {
    this.GuideBoxService.getFreeShows()
      .subscribe(
        data => {
          this.freeShows = data.results;
          console.log(this.freeShows);
        }
      );
  }
}
