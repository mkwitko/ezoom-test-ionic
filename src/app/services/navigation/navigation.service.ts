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

  // Função utilizada para navegar entre páginas dentro do App
  changePage(url: string){
    this.router.navigateByUrl(url);
  }

  // Função utilizada para navegar para uma página Fora do App
  away(url: string)
  {
    this.iab.create(url);
  }

  // Função utilizada para navegar para a pagina anterior
  goBack(){
    this.nav.back();
  }

  // Função utilizada para navegar para a Home
  goHome()
  {
    this.router.navigateByUrl('home');
  }
}
