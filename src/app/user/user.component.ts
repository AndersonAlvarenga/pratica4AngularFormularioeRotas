import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/interfaceUser';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  anyUser: any;
  arrayUser: User[];
  user: User;
  async ngOnInit() {
    this.anyUser = await this.userService.get();//chama função get e retorna uma lista de usuarios
    this.arrayUser = this.anyUser;//salva a lista de usuários em um array de Usuarios

   /* let resposta = await this.userService.getById("1");//chama a função getById e retorno o usuario referente ao id digitado

    this.user = this.arrayUser[9];
    this.user.id=11;
    let resposta2 = await this.userService.post(this.user);//chama metodo post
    console.log(resposta2);*/

  }


}
