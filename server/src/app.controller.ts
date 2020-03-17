import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private usersService: UsersService) {}

  @Post('auth/login')
  async login(@Body() candidate: LoginUserDto) {
    return this.usersService.login(candidate);
  }

  @Post('auth/register')
  async register(@Body() candidate: CreateUserDto) {
    return this.usersService.create(candidate);
  }
}
