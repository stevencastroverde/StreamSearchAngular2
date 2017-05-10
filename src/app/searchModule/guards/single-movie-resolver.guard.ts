import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Injectable()
export class SingleMovieResolverGuard implements  Resolve<any> {

  constructor(private GuideBoxService: GuideBoxService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.GuideBoxService.getSpecificMovie(route.params['movieId']);
  }
}
