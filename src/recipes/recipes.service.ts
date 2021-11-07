import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async findAll() {
    const recipes = await this.recipeRepository.find();
    if (recipes.length === 0) {
      throw new NotFoundException('No recipes found sorry!');
    }
    return recipes;
  }

  create(createRecipeDto: CreateRecipeDto) {
    const newRecipe = this.recipeRepository.create(createRecipeDto);
    return this.recipeRepository.save(newRecipe);
  }
}
