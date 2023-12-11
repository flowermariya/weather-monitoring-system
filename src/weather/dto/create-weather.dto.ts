import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddLocationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
  @IsString()
  minTemperature: string;

  @IsOptional()
  @IsString()
  maxTemperature: string;
}
