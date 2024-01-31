import React from "react";

const Product = ({ product: { productName, productImage, price } }) => {
  return (
    <React.Fragment>
      <div className="product">
        <h3>{productName}</h3>
        <img
          src={`data:image/jpeg;base64,${productImage}`}
          alt={productName}
          style={{ width: 300, height: 300, borderRadius: 8, margin: 20 }}
        />
        <p>Price:{price}</p>
      </div>
    </React.Fragment>
  );
};

export default Product;
