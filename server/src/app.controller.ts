import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Course } from './interfaces/course.interface';
import { config } from './config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiInfo() {
    return `Это рутовая страница.
      Чтобы перейти на страницу курсов ->
      <a href="${config.API_PATH.courses}">Hello</a>
    `;
  }

  @Get('/courses')
  getCourses(): Course[] {
    return this.appService.getCourses();
  }

  @Post('/courses')
  addCourse() {
    return this.appService.add({
      id: '1',
      title: 'test title',
      description: 'test description',
    });
  }
}
