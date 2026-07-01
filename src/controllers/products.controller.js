import { getAllProducts, getOneProduct, createOneProduct, deleteOneProduct } from "../services/products.service.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getOneProduct(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { title, price, category, description } = req.body;
    if (!title || !price || !category || !description) {
      return res.status(400).json({ error: "Faltan datos del producto" });
    }
    const newProduct = await createOneProduct({ title, price, category, description });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOneProduct(id);
    res.status(200).json({ message: `Producto ${id} eliminado correctamente` });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};