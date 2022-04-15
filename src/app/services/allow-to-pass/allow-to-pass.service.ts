import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllowToPassService {

  constructor() { }

  // Essa função faz uma verificação em todos os objetos passados
  // Caso não haja uma condição passada
  // Ela verifica se todos objetos existem
  // Caso haja uma condição passada por parametro
  // Verifica se todos objetos condizem com a mesma
  // Retorna true ou false dependendo do resultado da mesma
  // Recomendação de utilização
  // Condicionais IF
  guardian(objects: any[], condition?: any)
  {
    for(const a of objects){
      if(condition)
      {
        if(a !== condition){
          return false;
        }
      }
      else
      {
        if(!a){
          return false;
        }
      }
  }
  return true;
  }
}
