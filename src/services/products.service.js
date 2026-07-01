import { getAllProductsModel, getOneProductModel, createOneProductModel, deleteOneProductModel } from "../models/products.model.js";

export const getAllProducts = async () => {
  return await getAllProductsModel();
};

export const getOneProduct = async (id) => {
  return await getOneProductModel(id);
};

export const createOneProduct = async (product) => {
  return await createOneProductModel(product);
};

export const deleteOneProduct = async (id) => {
  return await deleteOneProductModel(id);
};