import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, product, setSelectedProduct }) => {
  const [formData, setFormData] = useState({
    ref: "",
    location: "",
    stock: 0,
    description: "",
    bar_code: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      ref: "",
      location: "",
      stock: 0,
      description: "",
      bar_code: "",
    });
    setSelectedProduct(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="ref"
        placeholder="Referencia"
        value={formData.ref}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Ubicación"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bar_code"
        placeholder="Código de barras"
        value={formData.bar_code}
        onChange={handleChange}
      />
      <button type="submit">{product ? "Actualizar" : "Agregar"}</button>
    </form>
  );
};

export default ProductForm;
