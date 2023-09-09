import { Controller, Get, Render } from '@nestjs/common';
import { initPayload } from 'payload/initPayload';
import { searchPayload } from 'payload/searchPayload';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  renderSearch() {
    return {
      searchPayload: JSON.stringify(searchPayload),
      initPayload: JSON.stringify(initPayload),
    }; // Pass the payload object to the template
  }
  // getHello(): object {
  //   return this.appService.getHello();
  // }
}
