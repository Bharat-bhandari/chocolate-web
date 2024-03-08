"use client";

import ProductForm from "@/components/AdminPage/ProductForm";
import { newProductInfoSchema } from "@/utils/validationSchema";
import { toast } from "react-toastify";
import { ValidationError } from "yup";
import axios from "axios";

const CreatePage = () => {
  const handleCreateProduct = async (values) => {
    try {
      await newProductInfoSchema.validate(values, { abortEarly: false });

      console.log("values", values);
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("mrp", values.mrp);
      formData.append("salePrice", values.salePrice);
      formData.append("quantity", values.quantity);

      // Append bullet points
      values.bulletPoints.forEach((bulletPoint, index) => {
        formData.append(`bulletPoints[${index}]`, bulletPoint);
      });

      // Append images
      values.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      formData.append("thumbnail", values.thumbnail);

      await axios.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.map((err) => {
          toast.error(err.message);
        });
      }
    }
  };

  return (
    <>
      <ProductForm onSubmit={handleCreateProduct} />
    </>
  );
};

export default CreatePage;
