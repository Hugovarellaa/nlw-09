import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationsRouter };
