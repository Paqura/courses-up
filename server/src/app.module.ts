import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DB_ENDPOINT } from './config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(DB_ENDPOINT),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
