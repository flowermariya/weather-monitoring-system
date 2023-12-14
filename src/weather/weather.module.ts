import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LocationHistory,
  LocationHistorySchema,
} from './entities/weather.entity';
import { MinMaxTemp, MinMaxTempSchema } from './entities/min-max-temp.entinty';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LocationHistory.name,
        schema: LocationHistorySchema,
      },
      {
        name: MinMaxTemp.name,
        schema: MinMaxTempSchema,
      },
    ]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
