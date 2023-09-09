import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogisticsModule } from './logistics/logistics.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [LogisticsModule],
})
export class AppModule {}
