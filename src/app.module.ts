import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { MongooseConfigModule } from './config/mongoose.module';

@Module({
  imports: [WeatherModule, MongooseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
