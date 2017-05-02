import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuideBoxService } from './services/guidebox/guide-box.service';
// Service to help fetch free content before view is rendered TODO: Finish this service!
// import {FreeContentResolverService} from "./services/freeContentResolver/free-content-resolver.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MediaSearchComponent } from './media-search/media-search.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';



const routes: Routes = [
  { path: 'shows', component: ShowsComponent },
  { path: 'shows/:showId/:name/:subscriptions', component: SingleShowComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:name', component: SingleMovieComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MediaSearchComponent,
    SingleMovieComponent,
    SingleShowComponent,
    SearchResultsComponent,
    MoviesComponent,
    ShowsComponent
  ],
  providers: [GuideBoxService]
})
export class SearchModule { }
