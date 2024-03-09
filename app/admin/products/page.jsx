import ProductTable from "@/components/AdminPage/ProductTable";
import connectDB from "@/config/database";
import ProductModel from "@/models/ProductModel";
import React from "react";

const fetchProducts = async (pageNo, perPage) => {
  const skipCount = (pageNo - 1) * perPage;

  await connectDB();

  const products = await ProductModel.find()
    .sort("-createdAt")
    .skip(skipCount)
    .limit(perPage);

  return products.map((product) => {
    return {
      id: product._id.toString(),
      title: product.title,
      thumbnail: product.thumbnail.url,
      description: product.description,
      price: {
        mrp: product.price.base,
        salePrice: product.price.discounted,
      },
      quantity: product.quantity,
    };
  });
};

const Product = async () => {
  const products = await fetchProducts(1, 10);

  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Product;
