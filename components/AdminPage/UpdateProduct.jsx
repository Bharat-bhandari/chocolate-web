"use client";

import React from "react";
import ProductForm from "./ProductForm";
import {
  removeAndUpdateProductImage,
  removeImageFromCloud,
} from "@/config/action";

const UpdateProduct = ({ product }) => {
  const initialValue = {
    ...product,
    thumbnail: product.thumbnail.url,
    images: product.images?.map(({ url }) => url),
    mrp: product.price.mrp,
    salePrice: product.price.salePrice,
    bulletPoints: product.bulletPoints || [],
  };

  const handleImageRemove = (source) => {
    const splittedData = source.split("/");

    const lastItem = splittedData[splittedData.length - 1];
    const SecondLastItem = splittedData[splittedData.length - 2];

    const publicId = SecondLastItem + "/" + lastItem.split(".")[0];

    console.log(publicId);

    removeAndUpdateProductImage(product.id, publicId);
  };

  return (
    <ProductForm
      onImageRemove={handleImageRemove}
      initialValue={initialValue}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
};

export default UpdateProduct;
