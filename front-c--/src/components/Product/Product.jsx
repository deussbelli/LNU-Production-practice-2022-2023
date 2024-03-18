import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import productPageStyles from "../../styles/productPage.module.css";
import { URL } from "../constants";
import { FaHeart } from "react-icons/fa";

function Product() {
    const [itemData, setItemData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const loadItem = async () => {
            try {
                const response = await axios.get(URL + "/items/" + id);
                setItemData(response.data);
            } catch (error) {
                console.error("Error loading item:", error);
            }
        };

        loadItem();
    }, [id]);

    const heartClickHandler = (id) => {
        console.log(id)
    }

    return (
        <>
            <Header />
            <div className={productPageStyles.productContainer}>
                {itemData ? (
                    <>
                        <div className={productPageStyles.imageContainer}>
                            <img
                                src={itemData.brand}
                                alt="item image"
                                className={productPageStyles.pin}
                            />
                        </div>
                        <div className={productPageStyles.itemInfoContainer}>
                            <div className={productPageStyles.itemNameContainer}>
                                <span className={productPageStyles.itemName}>
                                    {itemData.name}
                                </span>
                                <FaHeart className={productPageStyles.FaHeart} onClick={() => heartClickHandler(itemData.id)} />
                            </div>
                            <ul className={productPageStyles.itemDetails}>
                                <li> Size:</li>
                                <li> {itemData.size}</li>
                                <li> Material:</li>
                                <li> {itemData.material}</li>
                                <li> Gender:</li>
                                <li> {itemData.sex}</li>
                            </ul>
                            <p className={productPageStyles.itemDescription}>
                                {itemData.description}
                            </p>
                            <div className={productPageStyles.itemPrice}>
                                <span>{itemData.price}</span>
                            </div>
                            <div className={productPageStyles.addToBasket}>
                                <span>Add To Basket</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Product;
