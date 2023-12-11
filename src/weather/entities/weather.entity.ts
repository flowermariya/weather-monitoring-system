import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { BaseSchema } from './base.schema';

@Schema({ timestamps: true })
export class Weather extends BaseSchema {
  _id: mongoose.Types.ObjectId;

  @Prop({ nullable: true })
  name: string;

  @Prop({ nullable: true })
  longitude: string;

  @Prop({ nullable: true })
  latitude: string;

  @Prop({ nullable: true })
  minTemperature: string;

  @Prop({ nullable: true })
  maxTemperature: string;
}

export type WeatherDocument = Weather & Document;
export const WeatherSchema = SchemaFactory.createForClass(Weather);
