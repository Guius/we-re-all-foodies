import { Ingredient } from './ingredient.dto';
import { Step } from './step.dto';

export class CreateRecipeDto {
  name: string;
  steps: [Step];
  ingredients: [Ingredient];
}
