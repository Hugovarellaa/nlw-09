import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  // eslint-disable-next-line prettier/prettier
  ICreateCategoryDTO
} from "./ICategoriesRepository";

class CategoriesRepositories implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepositories };
