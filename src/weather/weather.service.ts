import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AddLocationDto } from './dto/create-weather.dto';
import { InjectModel as InjectMongooseModel } from '@nestjs/mongoose';
import {
  LocationHistory,
  LocationHistoryDocument,
} from './entities/weather.entity';
import { Model } from 'mongoose';
import axios from 'axios';
import { SetMinMaxTemp } from './dto/set-min-max-temp.dto';
import {
  MinMaxTemp,
  MinMaxTempDocument,
} from './entities/min-max-temp.entinty';
const dayjs = require('dayjs');

@Injectable()
export class WeatherService {
  constructor(
    @InjectMongooseModel(LocationHistory.name)
    private weatherModel: Model<LocationHistoryDocument>,
    @InjectMongooseModel(MinMaxTemp.name)
    private minMaxTempModel: Model<MinMaxTempDocument>,
  ) {}

  async addHistory(addLocationDto: AddLocationDto): Promise<LocationHistory> {
    try {
      const location = new this.weatherModel(addLocationDto);
      return await location.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllLocations() {
    try {
      return await this.weatherModel.find().sort({ createdAt: -1 });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getLocation(locationId: string): Promise<LocationHistory> {
    try {
      return await this.weatherModel.findOne({ _id: locationId });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteHistory(locationId: string) {
    try {
      return await this.weatherModel.deleteOne({ _id: locationId });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async saveMinMaxTemp(setMinMaxTemp: SetMinMaxTemp) {
    try {
      const newLocation = new this.minMaxTempModel(setMinMaxTemp);
      newLocation.save();
      console.log('>>newLocation', newLocation);

      return newLocation;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getMinMaxTemp() {
    try {
      return await this.minMaxTempModel.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getCity(search_text: string) {
    try {
      const url = `${process.env.API_URL}/geo/1.0/direct?q=${search_text}&limit=5&appid=${process.env.API_KEY}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getWeatherForecast(lat: string, lon: string, days: string) {
    try {
      const weatherUrl = `${process.env.API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;
      const currentWeather = await axios.get(weatherUrl);

      const foreCastDict = {};

      currentWeather?.data?.list?.map((item) => {
        const dateTime = item?.dt + '000';

        let formattedDate = dayjs(parseInt(dateTime)).format('DD-MM-YYYY');
        if (!foreCastDict[formattedDate]) {
          foreCastDict[formattedDate] = item;
        }
      });

      const forecastArray = Object.keys(foreCastDict).map((key, index) => {
        if (index < parseInt(days)) {
          return {
            key: key,
            ...foreCastDict[key],
          };
        }
      });

      console.log('>>forecastArray', forecastArray);

      return forecastArray.filter((a) => a);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
