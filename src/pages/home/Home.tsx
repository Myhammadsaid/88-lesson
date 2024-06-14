import React from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import User from "../../components/users/User";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Product />
      <User />
    </div>
  );
};

export default Home;
