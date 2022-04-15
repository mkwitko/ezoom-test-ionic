import { CrudService } from 'src/app/services/crud/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage{

  constructor(
    public crud: CrudService
  ) { }

}
