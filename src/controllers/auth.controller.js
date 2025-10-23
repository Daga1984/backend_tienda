import { Auth } from "../models/auth.model.js";
export const registerUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const userFound = await Auth.findOne({ username });
        if (userFound) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }
        const newUser = new Auth({ username, password, role });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Auth.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        res.status(200).json({ message: "Login exitoso", user });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};


