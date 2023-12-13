import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LocationHistory,
  LocationHistorySchema,
} from './entities/weather.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LocationHistory.name,
        schema: LocationHistorySchema,
      },
    ]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
