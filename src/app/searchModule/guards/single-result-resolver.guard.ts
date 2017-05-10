import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Injectable()
export class SingleResultResolverGuard implements  Resolve<any> {

  constructor(private GuideBoxService: GuideBoxService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.GuideBoxService.getSpecificShow(route.params['showId'], route.params['subscriptions']);
    }
}
