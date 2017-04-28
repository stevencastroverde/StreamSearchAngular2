import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent  {
  @Output () userSearchandSources: EventEmitter<any> = new EventEmitter();
    list: string;
    term: string;


  formModel: FormGroup;
  constructor( private GuideBoxService: GuideBoxService, private fb: FormBuilder) {
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
    this.emitSearchInfo(this.formModel.value.subscriptionsGroup, this.formModel.value.search);
  };

  emitSearchInfo(checkedSubscriptions: FormGroup, searchTerm: string) {
      const keys = Object.keys(checkedSubscriptions);
      const filteredSubscriptions =  keys.filter(function(key){
        return checkedSubscriptions[key];
    });
      this.userSearchandSources.emit({
        list: filteredSubscriptions.join(','),
        term: searchTerm});
  };
}
