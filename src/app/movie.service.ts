import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Movie} from './movies/movie.model';
import { Observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public apiKey: string = "b64c5f904f8e0838b34edf2977d66231";
  public baseAPIURL: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }
   
  //finds a particular movie
  /* movieSearch() : Observable<any[]>
  {
    return this.http.get<any[]>(this.baseAPIURL + '/find/' + '{external_id}?' + 'api_key=' + this.apiKey + 
    '&language=en-US&external_source=imdb_id');
    
  }*/
  getMovieDetails(){

  }
  //get popular movies from the server
  getPopularMovies()
  {
    return this.http.get<any[]>(this.baseAPIURL +'/movie/popular?' + 'api_key=' + this.apiKey +
    '&language=en-US&page=1');
    
  }

  //search for a given movie
  
}
