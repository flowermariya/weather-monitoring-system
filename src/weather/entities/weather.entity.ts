import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { BaseSchema } from './base.schema';

@Schema({ timestamps: true })
export class LocationHistory extends BaseSchema {
  _id: mongoose.Types.ObjectId;

  @Prop({ nullable: true })
  city_name: string;

  @Prop({ nullable: true })
  longitude: string;

  @Prop({ nullable: true })
  latitude: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  body: any;
}

export type LocationHistoryDocument = LocationHistory & Document;
export const LocationHistorySchema =
  SchemaFactory.createForClass(LocationHistory);
