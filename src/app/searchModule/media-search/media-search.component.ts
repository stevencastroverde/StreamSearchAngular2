import { Component,Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent  {
  @Output ()

  formModel: FormGroup;
  currentUrl: string;

  constructor(private route: Router, private GuideBoxService: GuideBoxService, private fb: FormBuilder) {
    this.currentUrl = route.url;

    this.formModel = fb.group({
      'search': [''],
      'subscriptionsGroup': fb.group({
        'amazon_prime': [''],
        'hulu_plus': [''],
        'netflix': [''],
        'hbo_now': [''],
        'dramafever_premium': [''],
        'cruncyroll_premium': [''],
        'starz_subscription': [''],
        'showtime_subscription': ['']
      })
    });
  }





  onSubmit() {
   this.emitSubscriptions(this.formModel.value.subscriptionsGroup);

    // if (this.currentUrl === '/shows') {
    //   this.GuideBoxService.searchShows(this.formModel.value.search)
    //     .subscribe(shows => console.log(shows));
    // } else if (this.currentUrl === '/movies') {
    //   this.GuideBoxService.searchMovies(this.formModel.value.search)
    //     .subscribe(movies => console.log(movies));
    // } else {
    //   this.route.navigateByUrl('/');
    // };
  };

  emitSubscriptions(checkedSubscriptions: FormGroup) {
      const keys = Object.keys(checkedSubscriptions);
      const userSubscriptions =  keys.filter(function(key){
        return checkedSubscriptions[key];
    });
      console.log(userSubscriptions);



  }


}
