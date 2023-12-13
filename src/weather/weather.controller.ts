import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { AddLocationDto } from './dto/create-weather.dto';
import { LocationHistory } from './entities/weather.entity';

@Controller('location')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('add')
  addLocation(
    @Body() addLocationDto: AddLocationDto,
  ): Promise<LocationHistory> {
    return this.weatherService.addLocation(addLocationDto);
  }

  @Get('getAll')
  getAllLocations() {
    return this.weatherService.getAllLocations();
  }

  @Get()
  getLocation(
    @Query('locationId') locationId: string,
  ): Promise<LocationHistory> {
    return this.weatherService.getLocation(locationId);
  }

  @Delete('')
  deleteLocation(@Query('locationId') locationId: string) {
    return this.weatherService.deleteLocation(locationId);
  }

  //Get weather information

  @Get('getCity')
  getCity(@Query('search_text') search_text: string) {
    return this.weatherService.getCity(search_text);
  }

  @Get('getWeatherForecast')
  getWeatherForecast(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getWeatherForecast(lat, lon);
  }
}
