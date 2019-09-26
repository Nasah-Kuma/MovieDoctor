import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import { Movie} from '../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

   movies :any[];
   baseImageURL: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  constructor(private movieService: MovieService) {
    
  }

  
  ngOnInit() {
     this.movieService.getPopularMovies()
      .subscribe(data => {  
        this.movies = data.results;
      console.log(this.movies);
      
    }
      )
      
  }
}
