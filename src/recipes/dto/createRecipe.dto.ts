export class CreateRecipeDto {
  name: string;
  steps: [Step];
  ingredients: [Ingredient];
}

type Step = {
  name: string;
  steps: [string];
};

type Ingredient = {
  name: string;
  unit: string;
  amount: number;
};
