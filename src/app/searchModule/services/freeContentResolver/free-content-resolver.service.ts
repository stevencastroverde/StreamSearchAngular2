import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GuideBoxService } from '../guidebox/guide-box.service';

@Injectable()
export class FreeContentResolverService implements Resolve<Object> {
  constructor(private gbs: GuideBoxService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Object>{
    return this.gbs.getFreeShows()
      .then(data => {
        if(data){
          return data;
        } else {
          this.router.navigate(['/']);
          return null;
        }
      });
  }
}
