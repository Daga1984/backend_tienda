import cors from "cors";
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";   
import productRoutes from "./routes/product.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());    
// Routes
app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);
export default app;
