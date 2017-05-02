import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  private showName: string;
  private showId: number;
  private subscriptions: string;
  private showInfo: any;


  constructor(private currentRoute: ActivatedRoute, private GuideBox: GuideBoxService) { }

    ngOnInit() {
    this.currentRoute.params.subscribe((params) => {
      this.showName = params['name'];
      this.showId = params['showId'];
      this.subscriptions = params['subscriptions'];
    });
      // Get episodes, images, show information
    this.GuideBox.getSpecificShow(this.showId, this.subscriptions)
      .subscribe(showInfo => {
        console.log(showInfo);
        this.showInfo = showInfo;
      });

  }

}
