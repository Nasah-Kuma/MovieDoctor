import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: any;

  // We were supposed to use but this output decorator
  //to create the event object so as to denote that its an output event
  //since there are both output/input events in JS
  @Output() myEvent = new EventEmitter();

  searchResponse: any[];

  searchForm = new FormGroup({
    searchString: new FormControl('')
  })



  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
  }


  // function that does search
  onSearch(searchInput) {
    event.preventDefault();
    this.searchQuery = searchInput;
    // console.log(this.searchQuery)
    this.movieService.searchMovie(this.searchQuery)
      .subscribe(response => {
        this.searchResponse = response;
        console.log(this.searchResponse);

        //Calling the output event object to emit an output event.
        //This output event sends the searchResponse to the Parent Component 
        //Which in this case is the Movie-item-Component
        this.myEvent.emit(this.searchResponse);
      })

  }

}
