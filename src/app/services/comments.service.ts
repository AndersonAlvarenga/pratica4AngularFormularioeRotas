import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/interfaceComment'
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
private link = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http:HttpClient) { }
  async get() {
    let resposta = await this.http.get(this.link).toPromise();
    return resposta;
  }
  async getById(id: string) {
    let resposta = await this.http.get(this.link + id).toPromise();
    return resposta;
  }
  async post(comment: Comment){
    let reposta = await this.http.post(this.link,comment);
  }
}
