import axios from "axios";

const API_URL = "http://localhost:3000/api/products/";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(`${API_URL}/${product.ref}`, product);
  return response.data;
};

export const deleteProduct = async (ref) => {
  await axios.delete(`${API_URL}/${ref}`);
};
