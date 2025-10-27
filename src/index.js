import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1); // Termina la app si no se puede conectar
  }
};

connectDB();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});