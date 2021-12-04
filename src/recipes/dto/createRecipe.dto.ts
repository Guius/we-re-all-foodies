import { IsString, Validate } from 'class-validator';
import { IsTypeIngredient } from '../utils/IsTypeIngredient';
import { IsTypeStep } from '../utils/IsTypeStep';

import { Ingredient } from './ingredient.dto';
import { Step } from './step.dto';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @Validate(IsTypeStep)
  steps: Step[];

  @Validate(IsTypeIngredient)
  ingredients: Ingredient[];
}
