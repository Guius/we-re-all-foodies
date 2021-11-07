import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from '../dto/ingredient.dto';
import { Step } from '../dto/step.dto';

@Entity('recipes') // string in brackets specifies the name of the table in the database
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json')
  steps: [Step];

  @Column('json')
  ingredients: [Ingredient];
}
