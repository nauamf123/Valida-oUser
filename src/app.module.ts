import { Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { usersService } from './user.service';


@Module({
  imports: [
  ],
  controllers: [
    usersController
  ],
  providers: [
    usersService
  ],
})
export class AppModule { }