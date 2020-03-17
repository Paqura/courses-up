import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { CreateUserDto, LoginUserDto } from 'src/dto';
import * as bcrypt from 'bcrypt';

type CreateErrorMessage = string;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User & Document>) {}

  async login(userDto: LoginUserDto) {
    const candidate = await this.findOneByName(userDto.name);

    if (!candidate) {
      throw new HttpException('This user doesnt exists', HttpStatus.BAD_REQUEST);
    }

    const hasCorrectPassword = await bcrypt.compare(userDto.password, candidate.password);

    if (!hasCorrectPassword) {
      throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
    }

    return candidate;
  }

  async create(createCatDto: CreateUserDto): Promise<User | CreateErrorMessage> {
    const candidate = await this.findOneByName(createCatDto.name);

    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdCat = new this.userModel(createCatDto);
    const user = await createdCat.save();
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneByName(name: string) {
    return this.userModel.findOne({ name });
  }

  async remove(name: string) {
    return this.userModel.findOneAndDelete({ name });
  }
}
