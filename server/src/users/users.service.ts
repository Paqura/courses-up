import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { CreateUserDto } from 'src/dto';

type CreateErrorMessage = string;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User & Document>) {}

  async create(createCatDto: CreateUserDto): Promise<User | CreateErrorMessage> {
    const candidate = await this.findOne(createCatDto.name);

    if (candidate) {
      return 'User already exist';
    }

    const createdCat = new this.userModel(createCatDto);
    const user = await createdCat.save();
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(name: string) {
    return this.userModel.findOne({ name });
  }

  async remove(name: string) {
    return this.userModel.findOneAndDelete({ name });
  }
}
