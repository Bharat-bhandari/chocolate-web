import React from "react";
import ProductForm from "./ProductForm";

const UpdateProduct = ({ product }) => {
  const initialValue = {
    ...product,
    thumbnail: product.thumbnail.url,
    images: product.images?.map(({ url }) => url),
    mrp: product.price.base,
    salePrice: product.price.discounted,
    bulletPoints: product.bulletPoints || [],
  };

  return <ProductForm initialValue={initialValue} />;
};

export default UpdateProduct;
