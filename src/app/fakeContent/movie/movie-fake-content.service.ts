/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieFakeContentService {

  movieFakeContent = new Array<Movie>() ;

  constructor()
  {
    this.movieFakeContent = [
      {
        id: 0,
        createdAt: new Date(),
        title: 'Doctor Strange',
        subtitle: 'On the surface, Doctor Strange pushes the Marvel Cinematic Universe in a bold new direction',
        description: 'The visuals are electrifying and CGI is used very well to build a world far different than anything else weve seen in superhero adaptations recently. But for all of its wondrous world-building and trippy effects, Doctor Strange isnt the evolutionary step forward for Marvel that it needs to be storytelling-wise.',
        link: 'https://www.youtube.com/embed/8uIe0qY9qG8',
        image: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/doctor-strange-2016/Doctor-Strange-2016.jpg'
      },
      {
        id: 1,
        createdAt: new Date(),
        title: 'Doctor Strange',
        subtitle: 'On the surface, Doctor Strange pushes the Marvel Cinematic Universe in a bold new direction',
        description: 'The visuals are electrifying and CGI is used very well to build a world far different than anything else weve seen in superhero adaptations recently. But for all of its wondrous world-building and trippy effects, Doctor Strange isnt the evolutionary step forward for Marvel that it needs to be storytelling-wise.',
        link: 'https://www.youtube.com/embed/8uIe0qY9qG8',
        image: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/doctor-strange-2016/Doctor-Strange-2016.jpg'
      },
      {
        id: 2,
        createdAt: new Date(),
        title: 'Doctor Strange',
        subtitle: 'On the surface, Doctor Strange pushes the Marvel Cinematic Universe in a bold new direction',
        description: 'The visuals are electrifying and CGI is used very well to build a world far different than anything else weve seen in superhero adaptations recently. But for all of its wondrous world-building and trippy effects, Doctor Strange isnt the evolutionary step forward for Marvel that it needs to be storytelling-wise.',
        link: 'https://www.youtube.com/embed/8uIe0qY9qG8',
        image: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/doctor-strange-2016/Doctor-Strange-2016.jpg'
      },
    ];
  }
}
