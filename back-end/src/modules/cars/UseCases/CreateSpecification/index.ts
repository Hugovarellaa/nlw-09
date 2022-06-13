import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository();
const specificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

const specificationController = new CreateSpecificationController(
  specificationUseCase
);

export { specificationController };
