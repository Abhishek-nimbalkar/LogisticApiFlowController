import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { LogisticsService } from './logistics.service';

@Controller()
export class LogisticsController {
  constructor(private readonly logisticsService: LogisticsService) {}

  @Post('/search')
  search() {
    // console.log('someThing');
    return this.logisticsService.search();
  }
  @Post('/on_search')
  on_search(@Req() req: Request) {
    return this.logisticsService.on_search(req);
  }
  @Post('/init')
  init() {
    return this.logisticsService.init();
  }
  @Post('/on_init')
  on_init(@Req() req: Request) {
    return this.logisticsService.on_init(req);
  }
  @Post('/confirm')
  confirm() {
    return this.logisticsService.confirm();
  }
  @Post('/on_confirm')
  on_confirm() {
    return this.logisticsService.on_confirm;
  }
}