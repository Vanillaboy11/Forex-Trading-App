/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TwelveDataModule } from './twelve-data/twelve-data.module';
import { TradingModule } from './trading/trading.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [UsersModule, AuthModule, TwelveDataModule, TradingModule, PortfolioModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
