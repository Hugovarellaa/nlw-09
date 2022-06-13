import { Router } from "express";

import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(
    categoriesRepositories
  );
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepositories.list();

  return response.json(categories);
});

export { categoriesRouter };
