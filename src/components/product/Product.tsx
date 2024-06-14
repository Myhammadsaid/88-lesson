import React from "react";
import productImg1 from "../../assets/product__img1.png";
import productImg2 from "../../assets/product__img2.png";
import { motion } from "framer-motion";
import "./Product.css";

const Product: React.FC = () => {
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product__style">
            <div className="product__content">
              <motion.div
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="product__box"
              >
                <h3 className="product__text">
                  Seedra helps to grow fast and efficiant
                </h3>
                <p className="product__par">
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George
                  <br />
                  <br />
                  Be sure of our quality - the freshest batches of this season.
                  Non-GMO, Heirloom - our seeds were tested and have the best
                  germination ratings.
                  <br />
                  <br />
                  Your easy growing experience is our guarantee Spinach commom
                  culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
                  risotto, and more
                  <br />
                  <br />
                  Proudly sourced in the USA - our garden seeds are grown,
                  harvested, and packaged in the USA. We support local farmers
                  and are happy to produce this American-made product
                </p>
              </motion.div>
              <motion.img
                initial={{ translateX: 100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src={productImg1}
                alt="productImg1"
              />
            </div>
            <div className="product__content">
              <img src={productImg2} alt="productImg2" />
              <div className="product__box">
                <h3 className="product__text">Our story</h3>
                <p className="product__par">
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George
                  <br />
                  <br />
                  Be sure of our quality - the freshest batches of this season.
                  Non-GMO, Heirloom - our seeds were tested and have the best
                  germination ratings.
                  <br /> <br />
                  Your easy growing experience is our guarantee Spinach commom
                  culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
                  risotto, and more
                  <br />
                  <br />
                  Proudly sourced in the USA - our garden seeds are grown,
                  harvested, and packaged in the USA. We support local farmers
                  and are happy to produce this American-made product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
