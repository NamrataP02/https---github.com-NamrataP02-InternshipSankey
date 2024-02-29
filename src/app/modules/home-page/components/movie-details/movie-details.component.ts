import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmoviesService } from 'src/app/services/fetchmovies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string='';
  movie: any;

  constructor(private route: ActivatedRoute, private fetchmovies: FetchmoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.fetchMovieDetails(this.movieId);
    });
  }

  fetchMovieDetails(id: string): void {
    this.fetchmovies.getMovies().subscribe({
      next: (data: any) => {
        this.movie = data.movies.find((movie: any) => movie.id === id);
      }
    });
  }
}