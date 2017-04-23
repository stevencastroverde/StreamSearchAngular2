import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MediaSearchComponent } from './media-search/media-search.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

//Router
const appRoutes: Routes = [
  { path:'' , component: LandingPageComponent },
  { path: '', component: }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MediaSearchComponent,
    SingleMovieComponent,
    SingleShowComponent,
    SearchResultsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
