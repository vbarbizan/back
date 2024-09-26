import { Router} from 'express';
import { createCustomersController, deleteCustomersController, getCustomers, updatCustomersController } from "../controllers/customersControllers.js";

const router = Router();

router.get("/customers", getCustomers);

router.get("/customers/:id", getCustomers);

router.post("/customers", createCustomersController);

router.patch("/customers/:id", updatCustomersController);

router.delete("/customers/:id", deleteCustomersController);

export default router;