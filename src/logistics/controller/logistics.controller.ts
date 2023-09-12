import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { LogisticsService } from '../service/logistics.service';

@Controller()
export class LogisticsController {
  constructor(private readonly logisticsService: LogisticsService) {}

  @Post('/search')
  search(@Req() req: Request) {
    // console.log('someThing');
    return this.logisticsService.search(req);
  }
  @Post('/on_search')
  on_search(@Req() req: Request) {
    return this.logisticsService.on_search(req);
  }
  @Post('/init')
  init(@Req() req: Request) {
    return this.logisticsService.init(req);
  }
  @Post('/on_init')
  on_init(@Req() req: Request) {
    return this.logisticsService.on_init(req);
  }
  @Post('/confirm')
  confirm(@Req() req: Request) {
    return this.logisticsService.confirm(req);
  }
  @Post('/on_confirm')
  on_confirm(@Req() req: Request) {
    return this.logisticsService.on_confirm(req);
  }
  @Post('/update')
  update(@Req() req: Request) {
    return this.logisticsService.update(req);
  }
  @Post('/on_update')
  on_update(@Req() req: Request) {
    return this.logisticsService.on_update(req);
  }
  @Post('/status')
  status(@Req() req: Request) {
    return this.logisticsService.status(req);
  }
  @Post('/on_status')
  on_status(@Req() req: Request) {
    return this.logisticsService.on_status(req);
  }
}
