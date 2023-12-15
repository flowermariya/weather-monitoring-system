import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { AddLocationDto } from './dto/create-weather.dto';
import { LocationHistory } from './entities/weather.entity';
import { SetMinMaxTemp } from './dto/set-min-max-temp.dto';

@Controller('location')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('addLocation')
  addHistory(@Body() addLocationDto: AddLocationDto): Promise<LocationHistory> {
    return this.weatherService.addHistory(addLocationDto);
  }

  @Get('getAll')
  getAllLocations() {
    return this.weatherService.getAllLocations();
  }

  @Get('getLocation')
  getLocation(
    @Query('locationId') locationId: string,
  ): Promise<LocationHistory> {
    return this.weatherService.getLocation(locationId);
  }

  @Delete('deleteHistory')
  deleteHistory(@Query('locationId') locationId: string) {
    return this.weatherService.deleteHistory(locationId);
  }

  // API to save min and max temperature of a city

  @Post('saveMinMaxTemp')
  saveMinMaxTemp(@Body() setMinMaxTemp: SetMinMaxTemp) {
    return this.weatherService.saveMinMaxTemp(setMinMaxTemp);
  }

  @Get('getMinMaxTemp')
  getMinMaxTemp() {
    return this.weatherService.getMinMaxTemp();
  }

  //Get weather information using Weather API

  @Get('getCity')
  getCity(@Query('search_text') search_text: string) {
    return this.weatherService.getCity(search_text);
  }

  @Get('getWeatherForecast')
  getWeatherForecast(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getWeatherForecast(lat, lon);
  }
}
