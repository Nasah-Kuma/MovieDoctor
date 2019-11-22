import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../movie.model';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent extends EventEmitter implements OnInit {

  movies: Movie[];
  searchQuery: any;
  baseImageURL: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  constructor(private movieService: MovieService) {
    super();
  }

  ngOnInit() {
    this.movieService.getPopularMovies()
      .subscribe(data => {
        this.movies = data;
        console.log(data);
      }
      )
}

//handles emitted search response from child-component/search-component
  Search(emittedSearchResponse) {
    
    //Replace the Movies array contents with the data received from the event 
    this.movies = emittedSearchResponse.apiResponse;
    this.searchQuery = emittedSearchResponse.searchQuery;
  }

}

