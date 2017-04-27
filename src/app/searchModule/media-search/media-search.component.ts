import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent implements OnInit {
  formModel: FormGroup;
  currentUrl: string;

  constructor(private route: Router, private GuideBoxService: GuideBoxService) {
    this.currentUrl = route.url;

    this.formModel = new FormGroup({
      'search': new FormControl()
    });
  }





  onSubmit() {
    if (this.currentUrl === '/shows') {
      this.GuideBoxService.searchShows(this.formModel.value.search)
        .subscribe(shows => console.log(shows));
    } else if (this.currentUrl === '/movies') {
      this.GuideBoxService.searchMovies(this.formModel.value.search)
        .subscribe(movies => console.log(movies));
    } else {
      this.route.navigateByUrl('/');
    };
  };


  ngOnInit() {
  }

}
