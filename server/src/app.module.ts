import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DB_ENDPOINT } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(DB_ENDPOINT, { useNewUrlParser: true, useUnifiedTopology: true }),
    AuthModule,
  ],
})
export class AppModule {}
