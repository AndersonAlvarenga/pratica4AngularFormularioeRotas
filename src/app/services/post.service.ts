import { Injectable } from '@angular/core';
import { Post } from '../models/interfacePost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private link = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  async get() {
    let resposta = await this.http.get(this.link).toPromise();
    return resposta;
  }
  async getById(id: string) {
    let resposta = await this.http.get(this.link + id).toPromise();
    return resposta;
  }
 
  async post(post: Post){
    
    let resposta =await this.http.post(this.link,post).toPromise();
    
  }
}
