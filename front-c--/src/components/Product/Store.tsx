import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Global/Header";
import storeStyles from "../../styles/storeGrid.module.css";
import SearchBar from "../Global/SearchBar";


export async function fetchProducts(setData: Function): Promise<void> {
  const url = "https://nefor-store-api.onrender.com/items?page=0";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  setData(await response.json());
  return;
}

function Store() {
  const [products, setProducts] = React.useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts(setProducts);
      }
      catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={storeStyles.storeContainer}>
      <section className={storeStyles.section}>
        <div className="">
          {/* @ts-ignore */}
          <Products products={products} />
        </div>
      </section>
    </div>
  );
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

export function Products({ products }: { products: Product[] }) {
  if (!products?.length) return <div>Loading...</div>;

  let productList = products.map((product) => (
    <Link to={"product/"+ product.id} className={storeStyles.link}>
    <div key={product.id} className={storeStyles.productCard}>
      <img src={product.brand} alt={product.name} className={storeStyles.productImage} />
      <p className={storeStyles.itemName}>{product.name}</p>
    </div>
    </Link>
  ));

  return <div className={storeStyles.productsGrid}>{productList}</div>;
}
export default Store;
