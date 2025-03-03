import { Controller, Get, UseGuards, Post, Body, Req } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto, CreateUserDto } from '../dto';
import { Request } from 'express';
import { User } from 'src/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async tempAuth(@Req() req: Request & { user: User }) {
    return req.user;
  }

  @Post('login')
  async login(@Body() candidate: LoginUserDto) {
    const user = await this.userService.login(candidate);

    const payload = {
      name: user.name,
      password: user.password,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() candidate: CreateUserDto) {
    const user = await this.userService.create(candidate);

    const payload = {
      name: user.name,
      password: user.password,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}