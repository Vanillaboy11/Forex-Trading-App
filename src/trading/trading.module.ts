/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TradingController } from './trading.controller';
import { TradingService } from './trading.service';
import { TwelveDataModule } from '../twelve-data/twelve-data.module';

@Module({
  imports: [TwelveDataModule],
  controllers: [TradingController],
  providers: [TradingService]
})
export class TradingModule {}
