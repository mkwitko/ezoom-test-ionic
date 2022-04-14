import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

  readAll(controller: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + controller)
      .subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => { reject(err); }
      });
    });
  }

  read(controller: string, id: string)
  {
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + controller + '/show/' + id, '')
      .subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => { reject(err); }
      });
    });
  }

  create(controller: string, body: any)
  {
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + controller + '/create/', body)
      .subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => { reject(err); }
      });
    });
  }

  update(controller: string, id: string, body: any)
  {
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + controller + '/update/' + id, body)
      .subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => { reject(err); }
      });
    });
  }

  delete(controller: string, id: string)
  {
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + controller + '/delete/' + id, '')
      .subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => { reject(err); }
      });
    });
  }
}
