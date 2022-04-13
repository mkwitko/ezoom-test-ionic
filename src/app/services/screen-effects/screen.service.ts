import { Injectable } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public loading;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController,
    private toastr: ToastrService
  ) { }

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Aguarde'
    });
    await this.loading.present();
  }

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

  async presentModal(component: any, myClass: string) {
    const modal = await this.modalController.create({
      component,
      cssClass: myClass
    });
    return await modal.present();
  }
}
