import express from "express";
import productRoutes from "./routes/productRoutes.js";
import customersRoutes from "./routes/customersRoutes.js";

const app = express();
app.use(express.json());

app.use(productRoutes);
app.use(customersRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
