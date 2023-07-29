import React from "react";
import "./style/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images.unsplash.com/photo-1534422646206-3cf5a7d4a1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="home_image"
        />
        <div className="home_row">
          <Product
            id = "1" 
            title = "Special Roasted Beans"
            price = {12}
            rating = {5}
            image = "https://plus.unsplash.com/premium_photo-1681701892276-447be2f1ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Product 
            id = "2"
            title = "Primo Coffee Beans"
            price = {11.50}
            rating = {4}
            image = "https://images.unsplash.com/photo-1528048929606-66942bfedecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          />
        </div>
        <div className="home_row">
          <Product 
            id="3"
            title = "True Stone Coffee"
            price = {12.50}
            rating = {4}
            image = "https://images.unsplash.com/photo-1585230997430-63aec8545d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          />
          <Product 
            id = "4"
            title = "Java Deca Beans"
            price = {11}
            rating = {3}
            image = "https://images.unsplash.com/photo-1585952811889-ffc1b5010c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
          <Product 
            id = "5"
            title = "The Blending Lover Docker"
            price = {13}
            rating = {4}
            image = "https://images.unsplash.com/photo-1597088268939-ca0a66007a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>
        <div className="home_row">
          <Product 
            id = "6"
            title = "Custom Beans"
            price = {14}
            rating = {5}
            image = "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
