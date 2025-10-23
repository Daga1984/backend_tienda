import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
    const newProduct = new Product({ name, price, stock });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos", error });
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, stock },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }   
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto", error });
    }   
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error });
    }
}
    


