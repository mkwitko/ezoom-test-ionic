import { CrudService } from './../../../../services/crud/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-crud-home',
  templateUrl: './movie-crud-home.page.html',
  styleUrls: ['./movie-crud-home.page.scss'],
})
export class MovieCrudHomePage{

  constructor(
    public crud: CrudService
  )
  {}
}
