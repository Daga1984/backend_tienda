import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
    password: {
    type: String,
    required: true,
    },
    role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    },
});

export const Auth = mongoose.model("Auth", authSchema);