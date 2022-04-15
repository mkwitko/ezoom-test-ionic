import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuBool = true;

  constructor(
    private menu: MenuController
  ) { }

  // Essa função serve para o menu ser fechado
  // Utilizo ela em conjunto com o changePage ao clicar em algum item do menu
  close(){
    this.menu.close();
  }

  // Ativar ou desativar o menu
  // Se o usuário estiver autenticado, chamar ela com bool = true
  // Se o usuário não estiver autenticado, chamar com bool = false
  menuCtrl(bool: boolean){
    this.menu.enable(bool);
  }
}
