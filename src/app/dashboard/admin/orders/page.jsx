"use client";

import { useEffect, useState } from "react";

const Orders = () => {
  const handleStatusChange = async (id, status) => {
    try {
      const apiURL =
        process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

      const res = await fetch(`${apiURL}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderStatus: status,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, orderStatus: status } : order,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const apiURL =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

        const res = await fetch(`${apiURL}/orders`);

        const data = await res.json();

        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Orders ({orders.length})</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Pack</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t hover:bg-slate-50">
                <td className="p-4">{order.name}</td>
                <td className="p-4">{order.phone}</td>
                <td className="p-4">{order.pack}</td>
                <td className="p-4">৳{order.totalPrice}</td>
                <td className="p-4">{order.address}</td>
                <td className="p-4">
                  <div className="relative inline-block">
                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className={`appearance-none cursor-pointer rounded-full border px-4 py-2 pr-10 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                        order.orderStatus === "Pending"
                          ? "border-yellow-300 bg-yellow-50 text-yellow-700 focus:ring-yellow-400"
                          : order.orderStatus === "Confirmed"
                            ? "border-green-300 bg-green-50 text-green-700 focus:ring-green-400"
                            : "border-red-300 bg-red-50 text-red-700 focus:ring-red-400"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                    {/* Custom Arrow */}
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="p-10 text-center text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
