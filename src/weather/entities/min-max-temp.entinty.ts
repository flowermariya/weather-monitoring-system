import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { BaseSchema } from './base.schema';

@Schema({ timestamps: true })
export class MinMaxTemp extends BaseSchema {
  _id: mongoose.Types.ObjectId;

  @Prop({ nullable: true })
  min_temp: string;

  @Prop({ nullable: true })
  max_temp: string;

  @Prop({ nullable: true })
  location_id: string;

  @Prop({ nullable: true })
  location_name: string;

  @Prop({ nullable: true })
  lat: string;

  @Prop({ nullable: true })
  lon: string;
}

export type MinMaxTempDocument = MinMaxTemp & Document;
export const MinMaxTempSchema = SchemaFactory.createForClass(MinMaxTemp);
