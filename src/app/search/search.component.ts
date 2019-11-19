import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery :unknown;
  movieResponse: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovie(){
    console.log(this.searchQuery);

    //gets resources which give all popular and recent movies

    this.movieService.getPopularMovies()
    .subscribe(data=>{
      this.movieResponse = data;
    })

  }

}
