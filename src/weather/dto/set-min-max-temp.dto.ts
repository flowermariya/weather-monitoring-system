import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SetMinMaxTemp {
  @IsNotEmpty()
  @IsString()
  min_temp: string;

  @IsNotEmpty()
  @IsString()
  max_temp: string;

  @IsNotEmpty()
  @IsString()
  location_id: string;

  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsNotEmpty()
  @IsString()
  lon: string;

  @IsNotEmpty()
  @IsString()
  location_name: string;
}
