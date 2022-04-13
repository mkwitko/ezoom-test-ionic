import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private nav: NavController
  ) { }

  changePage(url: string){
    this.router.navigateByUrl(url);
  }

  goBack(){
    this.nav.back();
  }
}
