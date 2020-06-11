import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";




export class usersDTO {
    @IsInt({ message: 'Não é um inteiro válido'})
    id: number;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    nome: String;

    @IsInt({message: 'Não é um inteiro válido'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(3, {message: 'Máximo 3 caracteres.'})
    idade: number;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(80, {message: 'Máximo 80 caracteres.'})
    email: String;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(100, {message: 'Máximo 100 caracteres.'})
    endereco: String;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(11 , {message: 'Máximo 11 caracteres.'})
    cpf: String;
     
    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(70 , {message: 'Máximo 70 caracteres.'})
    emprego: String;  
    
    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(70 , {message: 'Máximo 40 caracteres.'})
    petfavorito: String;

    @IsInt({ message: 'Inteiro inválido'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(20 , {message: 'Máximo 20 caracteres.'})
    telefone: number;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(17 , {message: 'Máximo 17 caracteres.'})
    datanascimento: String;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(12 , {message: 'Máximo 12 caracteres.'})
    status: String;

    



    


}