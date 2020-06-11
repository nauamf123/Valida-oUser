import { usersEntity } from "./users.enty";
import { Injectable } from '@nestjs/common';





@Injectable()

export class usersService {
    
users: Array<usersEntity> = [];

constructor() {
     
       let usersL = new usersEntity();
       usersL.id = 1;
       usersL.nome = 'Edward Kenway';
       usersL.idade = 22;
       usersL.email = 'edward.Ken@hotmail.com';
       usersL.endereco =  'Inglaterra Londres';
       usersL.cpf =  '578.689.112-80';
       usersL.emprego = 'Navegador';
       usersL.petfavorito = 'Gavião';
       usersL.telefone = 999097997;
       usersL.datanascimento = '10 de março de 2000'
       usersL.status = 'Casado';
       this.users.push(usersL);
}

async findAll(){
    return this.users;
}

async save(users: usersEntity) {
    this.users.push(users);

}
}