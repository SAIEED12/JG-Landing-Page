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

  let orders = { data: [], totalData: 0, totalPage: 1, page: 1 };
  let error = null;

  try {
    orders = await getOrders(page, search, token);
  } catch {
    error = "Failed to load orders. Please try again later.";
  }

  return (
    <div>
      <div className="w-full mb-5 md:flex justify-between items-center">
        <h2 className="mt-10 mb-5 font-bold text-2xl text-[#0F3457]">
          All Orders
        </h2>
        <Searchbar />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-5 py-4 mb-5 font-sans text-sm">
          {error}
        </div>
      )}
      {!error && search && (
        <p className="mt-3 text-md font-semibold text-red-500 mb-5">
          {orders.totalData === 0
            ? `No results found for "${search}"`
            : `${orders.totalData} result${orders.totalData > 1 ? "s" : ""} found for "${search}"`}
        </p>
      )}
      {error ? (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold text-gray-600">
            Orders unavailable
          </h3>
          <p className="mt-2 text-gray-500">
            Refresh the page to try again.
          </p>
        </div>
      ) : orders.totalData === 0 && search ? (
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
