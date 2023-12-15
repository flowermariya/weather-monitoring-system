import { IsNotEmpty, IsString } from 'class-validator';

export class SetMinMaxTemp {
  @IsString()
  min_temp: number;

  @IsString()
  max_temp: number;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  lng: number;

  @IsNotEmpty()
  @IsString()
  location_name: string;
}
