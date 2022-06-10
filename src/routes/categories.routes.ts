import { Request, Response, Router } from "express";

import { CategoryRespositories } from "../repositories/CategoriesRespository";

const categoriesRouter = Router();
const categoriesRepository = new CategoryRespositories();

categoriesRouter.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRouter };
