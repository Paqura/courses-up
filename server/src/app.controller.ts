import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';

interface CreateUserDto {
  name: string;
  password: string;
}

const fakeDb: CreateUserDto[] = [
  { name: 'slava', password: '123' },
];

const connectToDb = (): Promise<CreateUserDto[]> => new Promise(res => {
  res(fakeDb);
});

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  async register(@Body() candidate: CreateUserDto) {
    const db = await connectToDb();

    // check
    if (db.find(user => user.name === candidate.name)) {
      return 'User already exists';
    }

    // save
    return candidate;
  }
}
