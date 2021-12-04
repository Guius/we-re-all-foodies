import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class IsTypeStep implements ValidatorConstraintInterface {
  constructor(private errorMessage: string) {}
  validate(steps) {
    // 1. If no steps have been provided, throw an error
    let error: boolean;
    // check if steps is an array
    if (Array.isArray(steps)) {
      steps.forEach((el) => {
        // check if each index of the array contains a step property
        // we are not checking for name as we do not consider it a required field
        if (el.step) {
          // check if that step property is not empty
          if (el.step.length === 0) {
            error = true;
          }
        } else {
          error = true;
        }
      });
      if (error) {
        this.errorMessage = 'You have provided an empty step';
        return false;
      }
    } else {
      this.errorMessage = 'Steps must be an array';
      return false;
    }

    return true;
  }

  defaultMessage() {
    return this.errorMessage;
  }
}
