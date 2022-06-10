import { Request, Response, Router } from "express";

import { CategoryRespositories } from "../repositories/CategoriesRespository";

const categoriesRouter = Router();
const categoriesRepository = new CategoryRespositories();

categoriesRouter.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoriesAlreadyExists = categoriesRepository.findByName(name);

  if (categoriesAlreadyExists) {
    return response.status(400).json({ error: "Category already exists" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRouter };
