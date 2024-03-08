import connectDB from "@/config/database";

export const POST = async (request) => {
  try {
    await connectDB();

    const formData = await request.formData();

    const productData = {
      title: formData.get("title"),
      description: formData.get("description"),
      mrp: formData.get("mrp"),
      salePrice: formData.get("salePrice"),
      quantity: formData.get("quantity"),
    };

    console.log(title);

    return new Response("Okkk", { status: 200 });
  } catch (error) {
    return new Response("Failed to add product", { status: 500 });
  }
};
