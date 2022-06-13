import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepositories.list();

  return response.json(categories);
});

export { categoriesRouter };
