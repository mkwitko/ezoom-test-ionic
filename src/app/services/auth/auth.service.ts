import { FirebaseErrorTranslationService } from './../translate/firebase-error-translation.service';
import { UserInterface } from './../../interfaces/auth/user-interface';
import { NavigationService } from './../navigation/navigation.service';
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import {
  indexedDBLocalPersistence,
  initializeAuth,
  Auth,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail } from 'firebase/auth';
import { environment } from 'src/environments/environment';

import { ScreenService } from './../screen-effects/screen.service';
import { MenuControlService } from './../screen-effects/menu-control.service';
import { AllowToPassService } from './../allow-to-pass/allow-to-pass.service';
import { from } from 'rxjs';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: UserInterface;
  public id: number;
  private readonly auth: Auth;

  constructor(
    private allow: AllowToPassService,
    private menuCtrl: MenuControlService,
    private screenService: ScreenService,
    private navigationService: NavigationService,
    private firebaseError: FirebaseErrorTranslationService,
    private crud: CrudService
  )
  {
    const firebaseApp = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.auth = getAuth(firebaseApp);
  }

  getAuth(){
    return this.auth;
  }

  delete(){
    return from(this.auth.currentUser.delete());
  }

  async getId(){
    return await this.auth.currentUser.uid;
  }

  async login(user: UserInterface){
    if(this.allow.guardian([
      user.userEmail, user.userPassword]))
    {
      signInWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim())
      .then(() =>{
        this.menuCtrl.callMenuCtrl(true);
        this.screenService.presentToast('Bem Vindo!', 'sucess');
      })
      .catch((error) => {
        this.screenService.presentToast(
          this.firebaseError.verifyErrors(error.code)
        );
      });;
    } else {
      this.screenService.presentToast('Algo deu errado. Tente novamente.');
    }
  }

  async loginAnonAsUser(){
    signInAnonymously(this.auth)
    .then(() =>{
      this.menuCtrl.callMenuCtrl(true);
      this.screenService.presentToast('Bem Vindo!', 'sucess');
    })
    .catch((error) => {
      this.screenService.presentToast(
        this.firebaseError.verifyErrors(error.code)
      );
    });;
  }

  async loginAnonAsAdmin(){
    signInAnonymously(this.auth)
    .then(() =>{
      this.menuCtrl.callMenuCtrl(true);
      this.screenService.presentToast('Bem Vindo!', 'sucess');
    })
    .catch((error) => {
      this.screenService.presentToast(
        this.firebaseError.verifyErrors(error.code)
      );
    });;
  }

  async logout(){
    this.menuCtrl.callMenuCtrl(false);
    this.auth.signOut()
    .then(() => {
      this.screenService.presentToast('Até breve!', 'warning');
    })
    .catch((error) => {
      this.screenService.presentToast(
        this.firebaseError.verifyErrors(error.code)
      );
    });
  }

  register(user: UserInterface, confirmPassword: string){
    if(this.allow.guardian(
      [user.userEmail, user.userPassword]
    ))
    {
      if(user.userPassword === confirmPassword)
      {
        return from(createUserWithEmailAndPassword(
          this.auth, user.userEmail.trim(), user.userPassword.trim())
          .then(() => {
            user.userPassword = null;
            this.crud.create(environment.controllers[0], user).then(() => {
              this.screenService.presentToast('Conta criada com sucesso!', 'sucess');
            }).catch(() => {
              this.screenService.presentToast('Ocorreu um erro na criação da conta');
              this.delete();
            });
          }).catch((error) => {
            this.screenService.presentToast(
              this.firebaseError.verifyErrors(error.code)
            );
          }));
      } else {
        this.screenService.presentToast('As senhas não são iguais!');
      }
    } else {
      this.screenService.presentToast('Preencha todos os campos');
    }
  }

  async resetPassword(email: string){
    if(this.allow.guardian(
      [email]
    ))
    {
      sendPasswordResetEmail(this.auth, email.trim())
      .then(() => {
        this.screenService.presentToast('Verifique seu e-mail!', 'sucess');
        this.navigationService.goBack();
      })
      .catch((error) => {
        this.screenService.presentToast(
          this.firebaseError.verifyErrors(error.code)
        );
    });
    } else {
      this.screenService.presentToast('Algo deu errado. Tente novamente.');
    }
  }

  async getUser(){
    return await this.auth.currentUser;
  }


}
