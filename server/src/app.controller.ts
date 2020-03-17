import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private usersService: UsersService) {}

  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  async register(@Body() candidate: CreateUserDto) {
    return this.usersService.create(candidate);
  }
}
