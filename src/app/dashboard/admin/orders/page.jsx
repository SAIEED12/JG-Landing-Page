import Searchbar from "@/components/dashboard/Searchbar";
import OrderTable from "@/components/OrderTable";
import React from "react";
import { getOrders } from "@/lib/api";
import { getServerAuthToken } from "@/lib/server-auth-token";

const OrdersPage = async ({ searchParams }) => {
  const params = await searchParams;

  const page = params?.page || 1;
  const search = params?.search || "";

  const token = await getServerAuthToken();
  const orders = await getOrders(page, search, token);

  return (
    <div>
      <div className="w-full mb-5 md:flex justify-between items-center">
        <h2 className="mt-10 mb-5 font-bold text-2xl text-[#0F3457]">
          All Orders
        </h2>
        <Searchbar />
      </div>
      {search && (
        <p className="mt-3 text-md font-semibold text-red-500 mb-5">
          {orders.totalData === 0
            ? `No results found for "${search}"`
            : `${orders.totalData} result${orders.totalData > 1 ? "s" : ""} found for "${search}"`}
        </p>
      )}
      {orders.totalData === 0 && search ? (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold text-gray-600">
            No results found
          </h3>
          <p className="mt-2 text-gray-500">
            Try searching with a different name or phone number.
          </p>
        </div>
      ) : (
        <OrderTable ordersData={orders} />
      )}{" "}
    </div>
  );
};

export default OrdersPage;
