import React from "react";
import "./style/Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map(() => {
            return <StarRateIcon />
          })}
        </div>
        <img
          src={image}
          alt=""
          className="product_image"
        />
        <br/>
        <button className="product_button" onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
