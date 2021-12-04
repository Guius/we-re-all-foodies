import { IsNumber, IsString } from 'class-validator';

export class Ingredient {
  @IsString()
  name: string;

  @IsString()
  unit: string;

  @IsNumber()
  amount: string;
}
