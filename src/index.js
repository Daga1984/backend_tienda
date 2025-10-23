import mongoose from "mongoose";
import app from "./app.js";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://garcessalasdavid_db_user:bK42MHlNzh42BFpo@cluster0.74inyvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("✅ Conectado a MongoDB Atlas (modo DEV)");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB Atlas:", error.message);
  }
};

connectDB();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});