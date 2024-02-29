import { Component, OnInit} from '@angular/core';
import { FetchmoviesService } from 'src/app/services/fetchmovies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movieid: any[]=[];
  movieTitles: string[] = [];
  moviereleaseyear:string[]=[];
    constructor(private fetchmovies: FetchmoviesService , private router:Router) {}
    ngOnInit(): void {
      this.fetchmovies.getMovies().subscribe({
        next:(data:any) =>{
         this.movieTitles =data.movies.map((movie: any)=>movie.title);
         console.log('Movie List : ',this.movieTitles);
         this.movieid =data.movies.map((movie: any)=>movie.id);
         console.log('Movie List : ',this.movieid);
      }
      })
    }
    logout(): void {
      // Remove user from local storage on logout
      localStorage.removeItem('loginUsers');
      this.router.navigate(['register']);
    }
     
  }
