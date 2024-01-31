import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductItem } from "../redux/actions";
import Product from "./Product";

function ProductItemList() {
  const dispatch = useDispatch();
  const {
    isLoading,
    isFailed,
    data: products,
  } = useSelector((state) => state.productItems);

  useEffect(() => {
    dispatch(getAllProductItem());
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isFailed) return <p>Failed...</p>;

  return (
    <div className="product-auto">
      {products?.map((product, index) => (
        <div className="product-box">
          <Product key={index} product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductItemList;
