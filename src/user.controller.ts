import { usersService } from "./user.service";
import { Controller, Get, Body, Post } from "@nestjs/common";
import { usersDTO } from "./user.dto";
import { usersEntity } from "./users.enty";
import { plainToClass } from "class-transformer";


@Controller('users')
export class usersController {

    constructor(private readonly service: usersService) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() usersDto: usersDTO) {
        const user = plainToClass(usersEntity, usersDTO);
        return this.service.save(user);
       
    }

}