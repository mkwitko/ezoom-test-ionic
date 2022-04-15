import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-game-crud-home',
  templateUrl: './game-crud-home.page.html',
  styleUrls: ['./game-crud-home.page.scss'],
})
export class GameCrudHomePage{

  constructor(
    public crud: CrudService
  )
  {}

}
