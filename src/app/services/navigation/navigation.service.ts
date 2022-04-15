import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private nav: NavController,
    private iab: InAppBrowser
  ) { }

  changePage(url: string){
    this.router.navigateByUrl(url);
  }

  goBack(){
    this.nav.back();
  }

  goHome()
  {
    this.router.navigateByUrl('home');
  }

  away(url: string)
  {
    this.iab.create(url);
  }
}
