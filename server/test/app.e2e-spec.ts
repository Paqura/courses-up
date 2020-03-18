import * as request from 'supertest';
import { CreateUserDto, LoginUserDto } from 'src/dto';
import { HttpStatus } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DB_ENDPOINT } from '../src/config';

beforeAll(async () => {
  await mongoose.connect(DB_ENDPOINT);
  await mongoose.connection.db.dropDatabase();
});

afterAll(done => {
  mongoose.disconnect(done);
});

const app = 'http://localhost:8001';

describe('AUTH', () => {

  it('should return 401 status', () => {
    return request(app)
      .get('/auth')
      .expect(HttpStatus.UNAUTHORIZED);
  });
});

describe('AUTH', () => {
  it('should register', () => {
    const user: CreateUserDto = {
      name: 'test1',
      password: '1234',
    };

    return request(app)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(({ body }) => {
        expect(body.user.name).toEqual('test1');
        expect(body.token).toBeDefined();
      })
      .expect(HttpStatus.CREATED);
  });

  it('should reject duplicate registration', () => {
    const user: CreateUserDto = {
      name: 'test1',
      password: '1234',
    };

    return request(app)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('should login', () => {
    const user: LoginUserDto = {
      name: 'test1',
      password: '1234',
    };

    return request(app)
      .post('/auth/login')
      .send(user)
      .expect(HttpStatus.CREATED);
  });
});