import Link from "next/link";
import {
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Wallet,
  ArrowRight,
} from "lucide-react";
import Chart from "@/components/Chart";
import { getAllOrders } from "@/lib/api";
import { getServerAuthToken } from "@/lib/server-auth-token";

// async function getOrders() {
//   const apiURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

//   const res = await fetch(`${apiURL}/orders`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch orders");
//   }

//   return res.json();
// }

const AdminDashboardHomepage = async () => {
  let orders = [];
  let error = null;

  try {
    const token = await getServerAuthToken();
    orders = await getAllOrders(token);
  } catch {
    error = "Failed to load orders. Please try again later.";
  }

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (o) => o.orderStatus === "Pending",
  ).length;
  const confirmedOrders = orders.filter(
    (o) => o.orderStatus === "Confirmed",
  ).length;
  const cancelledOrders = orders.filter(
    (o) => o.orderStatus === "Cancelled",
  ).length;

  const totalRevenue = orders
    .filter((o) => o.orderStatus === "Confirmed")
    .reduce((sum, o) => sum + (o.totalPrice || 0), 0);

  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const statCards = [
    {
      label: "Total Orders",
      value: totalOrders,
      icon: Package,
      color: "bg-[#0F3457]",
    },
    {
      label: "Pending",
      value: pendingOrders,
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      label: "Confirmed",
      value: confirmedOrders,
      icon: CheckCircle2,
      color: "bg-green-600",
    },
    {
      label: "Cancelled",
      value: cancelledOrders,
      icon: XCircle,
      color: "bg-red-500",
    },
  ];

  return (
    <div>
      <h1 className="font-serif font-bold text-2xl text-[#0F3457] mb-6 mt-5">
        Overview
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-5 py-4 mb-6 font-sans text-sm">
          {error}
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 border font-semibold border-[#0F3457]/10 flex items-center gap-4"
            >
              <div
                className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center shrink-0 font-semibold`}
              >
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#0F3457]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#1C2530]/60 font-sans">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Chart />

      {/* Revenue card */}
      <div className="bg-[#0F3457] rounded-2xl p-6 mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
          <Wallet size={22} className="text-[#8FBCE8]" />
        </div>
        <div>
          <p className="text-sm text-white/70 font-sans">Revenue</p>
          <p className="text-3xl font-serif font-bold text-white">
            ৳{totalRevenue.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-[#0F3457]/10 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#0F3457]/10">
          <h2 className="font-serif font-bold text-[#0F3457]">Recent Orders</h2>
          <Link
            href="/dashboard/admin/orders"
            className="flex items-center gap-1 text-sm text-[#0F3457] hover:underline font-sans"
          >
            See All <ArrowRight size={14} />
          </Link>
        </div>

        {recentOrders.length === 0 ? (
          <p className="p-8 text-center text-[#1C2530]/50 font-sans">
            No orders confirmed yet
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F1F5F9] text-[#0F3457] text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Phone</th>
                  <th className="px-5 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold">Price</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order._id} className="border-t border-[#0F3457]/5">
                    <td className="px-5 py-3 font-bold text-[#1C2530]">
                      {order.name}
                    </td>
                    <td className="px-5 py-3 font-semibold text-[#1C2530]/80">
                      {order.phone}
                    </td>
                    <td className="px-5 py-3 font-semibold text-[#1C2530]/80">
                      {order.quantity}
                    </td>
                    <td className="px-5 py-3 font-semibold text-[#0F3457]">
                      ৳{order.totalPrice}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <div>
                        {new Date(order.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })}
                      </div>

                      <div className="text-xs text-slate-500">
                        {new Date(order.createdAt).toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          order.orderStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.orderStatus === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardHomepage;
