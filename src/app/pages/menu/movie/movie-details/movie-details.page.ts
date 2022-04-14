import { MovieFakeContentService } from './../../../../fakeContent/movie/movie-fake-content.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie/movie';
import { SafeUrlService } from 'src/app/services/safe-url/safe-url.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage{

  public loaded: Movie;
  public trustedLink;
  private routeId;

  constructor(
    public movieFakeContent: MovieFakeContentService,
    private activeRoute: ActivatedRoute,
    private safeUrl: SafeUrlService
  )
  {
    this.routeId = this.activeRoute.snapshot.params.id;
    this.load(this.routeId);
  }

  load(routeId: string)
  {
    for(const a of this.movieFakeContent.movieFakeContent)
    {
      if(a.id.toString() === routeId)
      {
        this.loaded = a;
        this.trustedLink = this.safeUrl.sanitize(this.loaded.link);
      }
    }
  }

}
