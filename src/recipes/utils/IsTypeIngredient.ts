import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class IsTypeIngredient implements ValidatorConstraintInterface {
  constructor(private errorMessage: string) {}
  validate(ingredients) {
    //   TODO: build relationship between a recipe table and an ingredient table
    // 1. If no ingredients have been provided, throw an error
    let error: boolean;
    // check if ingredients is an array
    if (Array.isArray(ingredients)) {
      ingredients.forEach((el) => {
        // check if each index of the array contains a name property
        if (el.name) {
          // check if that name property is not empty
          if (el.name.length === 0) {
            this.errorMessage = 'You have not provided an ingredient name ';
            error = true;
          }
        } else {
          this.errorMessage = 'You have not provided an ingredient name ';
          error = true;
        }

        // check if each index of the array contains a unit property
        if (el.unit) {
          // check if that unit property is not empty
          if (el.unit.length === 0) {
            if (!this.errorMessage) {
              this.errorMessage = 'You have not provided an ingredient unit ';
            } else {
              this.errorMessage += ' & You have not provided an ingredient unit ';
            }

            error = true;
          }
        } else {
          if (!this.errorMessage) {
            this.errorMessage = 'You have not provided an ingredient unit ';
          } else {
            this.errorMessage += ' & You have not provided an ingredient unit ';
          }

          error = true;
        }

        // check if each index of the array contains an amount property
        if (el.amount) {
          // check if that amount property is not empty
          if (el.amount.length === 0) {
            if (!this.errorMessage) {
              this.errorMessage = 'You have not provided an ingredient amount';
            } else {
              this.errorMessage += ' & You have not provided an ingredient amount';
            }

            error = true;
          }
        } else {
          if (!this.errorMessage) {
            this.errorMessage = 'You have not provided an ingredient amount';
          } else {
            this.errorMessage += ' & You have not provided an ingredient amount';
          }

          error = true;
        }
      });
      if (error) {
        return false;
      }
    } else {
      this.errorMessage = 'ingredients must be an array';
      return false;
    }

    return true;
  }

  defaultMessage() {
    return this.errorMessage;
  }
}
