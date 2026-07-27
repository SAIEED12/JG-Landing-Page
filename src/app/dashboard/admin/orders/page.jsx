"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const apiURL =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${apiURL}/orders`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
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
          order._id === id
            ? { ...order, orderStatus: status }
            : order
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      return (
        order.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        order.phone?.includes(search)
      );
    });
  }, [orders, search]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-[#0F3457]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-800 md:mt-10">
            All Orders
          </h1>

          <p className="text-slate-500 mt-1 font-semibold">
            Total Orders: {filteredOrders.length}
          </p>
        </div>

        {/* Search */}

        <div className="relative w-full md:w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search name or phone..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-[#0F3457]"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100 text-slate-700">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Pack
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Address
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredOrders.map((order) => (

                <tr
                  key={order._id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-4 font-semibold text-xs text-slate-800">
                    {order.name}
                  </td>

                  <td className="px-6 text-xs py-4">
                    {order.phone}
                  </td>

                  <td className="px-6 text-xs py-4">
                    {order.pack}
                  </td>

                  <td className="px-6 py-4 text-xs font-semibold text-[#0F3457]">
                    ৳{order.totalPrice}
                  </td>

                  <td className="px-6 py-4 text-xs">
                    <div>
                      {new Date(order.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        }
                      )}
                    </div>

                    <div className="text-xs text-slate-500">
                      {new Date(order.createdAt).toLocaleTimeString(
                        "en-GB",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-xs max-w-xs">
                    {order.address}
                  </td>

                  <td className="px-6 py-4">

                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        handleStatusChange(
                          order._id,
                          e.target.value
                        )
                      }
                      className={`cursor-pointer rounded-full border px-2 py-2 text-xs font-semibold outline-none transition ${
                        order.orderStatus === "Pending"
                          ? "border-yellow-300 bg-yellow-50 text-yellow-700"
                          : order.orderStatus === "Confirmed"
                            ? "border-green-300 bg-green-50 text-green-700"
                            : "border-red-300 bg-red-50 text-red-700"
                      }`}
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredOrders.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No orders found.
          </div>
        )}

      </div>

    </div>
  );
};

export default Orders;