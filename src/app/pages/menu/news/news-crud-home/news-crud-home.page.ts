import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-crud-home',
  templateUrl: './news-crud-home.page.html',
  styleUrls: ['./news-crud-home.page.scss'],
})
export class NewsCrudHomePage{

  constructor(
    public crud: CrudService
  )
  {}

}
