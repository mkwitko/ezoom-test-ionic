import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsubService {

  constructor() {}

  // Essa função é feita para utilizar em conjunto com chamadas de Subscribe.
  // Quando chamamos um subscribe, ocorre uma inscrição para o recebimento de alguma informação
  // O Unsubscribe encerra essa inscrição, sendo esta a melhor prática.
  unsub(sub: any[]) {
    setTimeout(() => {
      for(const a of sub) {
        a.unsubscribe();
      }
    }, 2500);
  }

}
