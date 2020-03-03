
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';

interface User {
  name: string;
  password: string;
}

const fakeDb: User[] = [
  { name: 'slava', password: '123' },
];

const connectToDb = (): Promise<User[]> => new Promise(res => {
  res(fakeDb);
});

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.body;
  }

  @Post('auth/register')
  async register(@Request() req) {
    const db = await connectToDb();

    // check
    if (db.find(user => user.name === req.body.name)) {
      return 'User already exists';
    }

    // save
    return req.body;
  }
}
