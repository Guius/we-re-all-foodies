import { IsString } from 'class-validator';

export class Step {
  @IsString()
  name: string;

  @IsString()
  step: string;
}
