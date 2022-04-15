import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(
    private toastr: ToastrService
  ) { }

  //Função para chamada de Toasts
  // Caso não seja especificado o tipo de toast o mesmo será de Erro

  //Sucess = Verde
  // Error = Vermelho
  // Warning = Amarelo
  // Info = Azul

  public async presentToast(message: string, myType?: string,  title?: string) {

    let type;
    if(!myType)
    {
      type = 'error';
    } else {
      type = myType;
    }

    if(type === 'sucess'){
      this.toastr.success(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'error'){
      this.toastr.error(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'warning'){
      this.toastr.warning(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'info'){
      this.toastr.info(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    }

  }

}
