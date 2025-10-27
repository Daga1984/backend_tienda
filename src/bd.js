import mongoose from "mongoose";

const uri =
  "mongodb+srv://garcessalasdavid_db_user:bK42MHlNzh42BFpo@cluster0.74inyvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar:", error.message);
  }
};
