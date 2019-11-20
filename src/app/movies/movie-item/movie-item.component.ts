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
  myEvent: any;
  receivedSearchResults = [];
  baseImageURL: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  // @Input() public searchParentData;
  // movies :Movie[] = this.searchParentData;

  constructor(private movieService: MovieService) {
    super();
  }



  ngOnInit() {
    this.movieService.getPopularMovies()
      .subscribe(data => {
        this.movies = data;
        console.log(data);
        // console.log(this.searchParentData);

      }
      )

  }


  // emitted search response
  Search(data) {

    //Replace the Movies array contents withe the data received from the event 
    this.movies = data;
  }


}

