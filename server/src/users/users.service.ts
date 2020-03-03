import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto';

export type User = CreateUserDto & {
  id: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        name: 'john',
        password: 'changeme',
      },
      {
        id: '2',
        name: 'chris',
        password: 'secret',
      },
      {
        id: '3',
        name: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.name === username);
  }

  async save(user: User): Promise<User[]> {
    this.users.push(user);
    return this.users;
  }
}
