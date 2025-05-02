/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TwelveDataModule } from './twelve-data/twelve-data.module';
import { TradingModule } from './trading/trading.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { EventsModule } from './events/events.module';
import { User } from '../src/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Iguana14',
      database: 'trading_app_db',
      entities: [
          User,
      ],
      synchronize: true
    }),
    UsersModule, 
    AuthModule, 
    TwelveDataModule, 
    TradingModule, 
    PortfolioModule, 
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
