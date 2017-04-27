import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuideBoxService } from './services/guidebox/guide-box.service'
import {FreeContentResolverService} from "./services/freeContentResolver/free-content-resolver.service";

import { MediaSearchComponent } from './media-search/media-search.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';



const routes: Routes = [
  { path: 'shows', component: ShowsComponent},
  { path: 'movies', component: MoviesComponent, resolve: {
  data: FreeContentResolverService
  }
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MediaSearchComponent,
    SingleMovieComponent,
    SingleShowComponent,
    SearchResultsComponent,
    MoviesComponent,
    ShowsComponent
  ],
  providers: [GuideBoxService, FreeContentResolverService]
})
export class SearchModule { }
