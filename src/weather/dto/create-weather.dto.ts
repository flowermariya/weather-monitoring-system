import {
  IsEnum,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddLocationDto {
  @IsOptional()
  @IsString()
  city_name: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
  @IsJSON()
  body: JSON;
}
