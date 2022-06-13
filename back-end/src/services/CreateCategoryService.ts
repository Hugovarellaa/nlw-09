import { CategoriesRepositories } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoriesRepositories) {}
  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExist = this.categoryRepository.findByName(name);
    if (categoriesAlreadyExist) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
