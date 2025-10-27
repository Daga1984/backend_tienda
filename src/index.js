import mongoose from "mongoose";
import app from "./app.js";
import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect("mongodb+srv://garcessalasdavid_db_user:bK42MHlNzh42BFpo@cluster0.74inyvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (err) {
    console.error("❌ Error al conectar con MongoDB:", err.message);
  }
};

connectDB();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});