import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';
import { PayloadDto } from 'src/dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signPayload(payload: PayloadDto): Promise<string> {
    return sign(payload, 'secretKey', { expiresIn: '12h' });
  }

  async validateUser(payload: PayloadDto) {
    return await this.userService.findByPayload(payload);
  }
}
