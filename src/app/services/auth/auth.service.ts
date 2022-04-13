import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }


}
