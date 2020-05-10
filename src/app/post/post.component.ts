import { Component, OnInit } from '@angular/core';
import { Post } from '../models/interfacePost';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../models/interfaceUser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  arrayPost: Post[];
  respostaGet: any;
  respostaGetUser: any;
  userPost: User[];
  postForm: Post = {} as Post;

  constructor(private servicePost: PostService, private user: UserService) { }

  async ngOnInit() {
    this.respostaGet = await this.servicePost.get();
    this.arrayPost = this.respostaGet;
    this.respostaGetUser = await this.user.get();
    this.userPost = this.respostaGetUser;

    console.log(this.userPost);

  }
  onSubmit(form) {
    let resposta = this.servicePost.post(form.value);
  }
  exibirComent(respostaPost) {
    this.arrayPost.forEach(post => {
      if (post.id == respostaPost) {
        post.exibirComentario = true;
      }
    })
  }
}
