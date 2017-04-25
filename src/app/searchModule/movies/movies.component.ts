import { Component, OnInit } from '@angular/core';
import { GuideBoxService } from '../services/guidebox/guide-box.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private GuideBoxService: GuideBoxService) { }

  ngOnInit() {
    this.getFreeMovies();
  }

  getFreeMovies() {
    this.GuideBoxService.getFreeMovies()
      .subscribe(data => console.log(data));
  }
}
