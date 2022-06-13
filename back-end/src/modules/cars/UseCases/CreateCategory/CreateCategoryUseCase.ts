import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExist = this.categoryRepository.findByName(name);
    if (categoriesAlreadyExist) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
