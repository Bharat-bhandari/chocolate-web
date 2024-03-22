import OrderListPublic from "@/components/OrderPage/OrderListPublic";
import connectDB from "@/config/database";
import OrderModel from "@/models/orderModel";
import { getUserSession } from "@/utils/getUserSession";
import { redirect } from "next/navigation";
import React from "react";

const fetchOrders = async () => {
  const session = await getUserSession();

  if (!session?.username) {
    return null;
  }

  await connectDB();

  const orders = await OrderModel.find({ userId: session._id }).sort(
    "-createdAt"
  );

  const result = orders.map((order) => {
    return {
      id: order._id.toString(),
      paymentStatus: order.paymentStatus,
      date: order.createdAt.toString(),
      total: order.totalAmount,
      deliveryStatus: order.deliveryStatus,
      products: order.orderItems,
    };
  });

  return JSON.stringify(result);
};

const OrdersPage = async () => {
  const result = await fetchOrders();

  if (!result) {
    return redirect("/404");
  }

  return (
    <div className="mx-[10%]">
      <OrderListPublic orders={JSON.parse(result)} />
    </div>
  );
};

export default OrdersPage;
