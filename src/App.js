import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./ProductService";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log('data', data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    const newProduct = await addProduct(product);
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = async (product) => {
    const updatedProduct = await updateProduct(product);
    setProducts(products.map(p => p.ref === updatedProduct.ref ? updatedProduct : p));
  };

  const handleDeleteProduct = async (ref) => {
    await deleteProduct(ref);
    setProducts(products.filter(p => p.ref !== ref));
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ProductForm
        onSubmit={selectedProduct ? handleUpdateProduct : handleAddProduct}
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
        onEdit={setSelectedProduct}
      />
    </div>
  );
};

export default App;
