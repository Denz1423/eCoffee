import React from "react";
import "./style/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {

  const [{basket}, dispatch] = useStateValue();

  

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <CoffeeIcon fontSize="large" className="header_logoImage" />
          <h2 className="header_logoTitle">eCOFFEE</h2>
        </div>
      </Link>
      <div className="header_searchbar">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="nav_item">
          <span className="nav_itemOne">Hello Guest</span>
          <span className="nav_itemTwo">Sign In</span>
        </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemOne">Your</span>
          <span className="nav_itemTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <span className="nav_itemTwo nav_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
