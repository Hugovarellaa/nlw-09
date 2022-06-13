import { CategoriesRepositories } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositories = new CategoriesRepositories();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
