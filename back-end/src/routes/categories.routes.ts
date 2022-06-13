import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

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
