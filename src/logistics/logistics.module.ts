import { Module } from '@nestjs/common';
import { LogisticsService } from './service/logistics.service';
import { LogisticsController } from './controller/logistics.controller';

@Module({
  controllers: [LogisticsController],
  providers: [LogisticsService],
})
export class LogisticsModule {}
