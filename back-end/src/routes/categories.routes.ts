import { Router } from "express";

import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";

const categoriesRouter = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepositories.list();

  return response.json(categories);
});

export { categoriesRouter };
