import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { AddLocationDto } from './dto/create-weather.dto';
import { Weather } from './entities/weather.entity';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('addLocation')
  addLocation(@Body() addLocationDto: AddLocationDto): Promise<Weather> {
    return this.weatherService.addLocation(addLocationDto);
  }

  @Get('getAllLocations')
  getAllLocations() {
    return this.weatherService.getAllLocations();
  }

  @Get('getLocation')
  getLocation(@Query('locationId') locationId: string): Promise<Weather> {
    return this.weatherService.getLocation(locationId);
  }

  @Delete('deleteLocation')
  deleteLocation(@Query('locationId') locationId: string) {
    return this.weatherService.deleteLocation(locationId);
  }
}
