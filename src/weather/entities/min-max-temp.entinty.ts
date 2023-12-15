import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { BaseSchema } from './base.schema';

@Schema({ timestamps: true })
export class MinMaxTemp extends BaseSchema {
  _id: mongoose.Types.ObjectId;

  @Prop({ nullable: true })
  min_temp: number;

  @Prop({ nullable: true })
  max_temp: number;

  @Prop({ nullable: true })
  location_name: string;

  @Prop({ nullable: true })
  lat: number;

  @Prop({ nullable: true })
  lng: number;
}

export type MinMaxTempDocument = MinMaxTemp & Document;
export const MinMaxTempSchema = SchemaFactory.createForClass(MinMaxTemp);
