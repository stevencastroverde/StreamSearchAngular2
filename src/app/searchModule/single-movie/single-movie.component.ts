import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  private movieInfo: any;
  private movieImages: any;
  private relatedMovies: any;

  constructor(private route: ActivatedRoute, private GuideBox: GuideBoxService) { }

  ngOnInit() {
    console.log('Single Movie!')
    this.route.data
      .subscribe((data: {results: any}) => {
       this.movieInfo = data.results[0];
       this.movieImages = data.results[1];
       this.relatedMovies = data.results[2];
       console.log(this.movieInfo);
      });
  }

}
