import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AddLocationDto } from './dto/create-weather.dto';
import { InjectModel as InjectMongooseModel } from '@nestjs/mongoose';
import { Weather, WeatherDocument } from './entities/weather.entity';
import { Model } from 'mongoose';

@Injectable()
export class WeatherService {
  constructor(
    @InjectMongooseModel(Weather.name)
    private weatherModel: Model<WeatherDocument>,
  ) {}

  async addLocation(addLocationDto: AddLocationDto): Promise<Weather> {
    try {
      const location = new this.weatherModel(addLocationDto);
      return await location.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllLocations() {
    try {
      return await this.weatherModel.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getLocation(locationId: string): Promise<Weather> {
    try {
      return await this.weatherModel.findOne({ _id: locationId });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteLocation(locationId: string) {
    try {
      return await this.weatherModel.deleteOne({ _id: locationId });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // async getCurrentWeather(city_name: string) {
  //   try {
  //     console.log('>>>City name', city_name);

  //     const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${process.env.API_KEY}`;
  //     const response = await axios.get(url);

  //     // get weather data
  //     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${response?.data[0]?.lat}&lon=${response?.data[0]?.lon}&appid=${process.env.API_KEY}`;
  //     const currentWeather = await axios.get(weatherUrl);
  //     console.log('>>currentWeather', currentWeather);

  //     return currentWeather?.data;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}
