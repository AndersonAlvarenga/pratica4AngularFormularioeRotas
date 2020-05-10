import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/interfaceUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) { }

  async get() {
    let resposta = await this.http.get(this.link).toPromise();
    return resposta;
  }
  async getById(id: string) {
    let resposta = await this.http.get(this.link + id).toPromise();
    return resposta;
  }
  async post(user: User){
    let reposta = await this.http.post(this.link,user);
  }

}
