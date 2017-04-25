import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GuideBoxService {
  private _baseURL = 'https://serene-gorge-20513.herokuapp.com';

  constructor(private http: Http) { }
  getFreeMovies(): Observable<any> {
    return this.http.get(`${this._baseURL}/movies/free}`)
      .map(res => res.json());
  };
  getFreeShows(): Observable<any> {
    return this.http.get(`${this._baseURL}/shows/free`)
      .map(res => res.json());
  };
  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this._baseURL}/movies/search/${searchTerm}`)
      .map(res => res.json());
  };
  getSpecificMovie(movieId: number): Observable<any> {
    return this.http.get(`${this._baseURL}/movies/${movieId}`)
      .map(res => res.json());
  };
  searchShows(searchTerm: string): Observable<any> {
    return this.http.get(`${this._baseURL}/shows/search/${searchTerm}`)
      .map(res => res.json());
  };
  getSpecificShow(showId: number, subscriptions: string): Observable<any> {
    return this.http.get(`${this._baseURL}/shows/${showId}/${subscriptions}`)
      .map(res => res.json());
  }


}
