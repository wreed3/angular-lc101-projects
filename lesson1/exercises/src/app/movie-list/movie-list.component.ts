import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Avengers', 'Oceans 8', 'Cars 2', 'Gladiator'];

   constructor() { }

   ngOnInit() {
   }

}
