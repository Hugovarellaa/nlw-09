import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoriesAlreadyExist = categoriesRepositories.findByName(name);
  if (categoriesAlreadyExist) {
    return response.status(400).json({ error: "Categories already exist" });
  }

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepositories.list();

  return response.json(categories);
});

export { categoriesRouter };
