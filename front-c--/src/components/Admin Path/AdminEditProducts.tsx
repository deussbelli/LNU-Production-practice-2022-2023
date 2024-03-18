import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import editProductsStyles from "../../styles/EditProducts.module.css";
import delete_products from "../../images/delete-prod.png";
import edit_products from "../../images/edit.png";
import Header from "../Global/Header";

export async function fetchProducts(setData: Function): Promise<void> {
  const url = "https://nefor-store-api.onrender.com/items?page=0";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  setData(await response.json());
  return;
}

type Product = {
  availability: false;
  brand: string;
  category: string;
  currency: string;
  description: string;
  discount_percentage: number;
  expiration_date: string;
  id: number;
  name: string;
  price: number;
  weight: number;
};

type ProductsProps = {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

function Products({ products, onDelete, onEdit }: ProductsProps) {
  if (!products?.length) return <div>Loading...</div>;

  let productList = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>
        <img src={product.brand} alt={product.name} className={editProductsStyles.productImage} />
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onEdit(product.id)}>
        <img src={edit_products} alt="Edit" className={editProductsStyles.edit} /></button>
        <button onClick={() => onDelete(product.id)}>
        <img src={delete_products} alt="Delete" className={editProductsStyles.delete} /></button>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{productList}</tbody>
    </table>
  );
}

function ProductTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts(setProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const url = `https://nefor-store-api.onrender.com/items/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error("Error deleting product");
      }

      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };
  

  const handleEdit = (id: number) => {
    navigate(`/product/${id}`); /*edit-product*/
  };

  return (    
    <>
    <Header></Header>
      <div className={editProductsStyles.formContainerBackrgound_second}>
          <div className={editProductsStyles.mainText}>Products</div>
        </div>
      <Products products={products} onDelete={handleDelete} onEdit={handleEdit} />
      </>
  );
}

export default ProductTable;