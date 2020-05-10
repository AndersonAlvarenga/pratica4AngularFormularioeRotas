import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/interfaceComment';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment;
  arrayComment: Comment[];
  respostaGet: any;
  @Input() post;

  constructor(private serviceComment: CommentsService) { }

  async ngOnInit() {
    this.respostaGet = await this.serviceComment.get();
    this.arrayComment=this.respostaGet;
  }

}
