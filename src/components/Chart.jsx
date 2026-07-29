"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getAllOrders } from "@/lib/api";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Chart = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load chart data");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Monthly confirmed unit sales
const chartData = useMemo(() => {
  const currentYear = new Date().getFullYear();

  const monthlySales = monthNames.map((month) => ({
    month,
    units: 0,
  }));

  orders.forEach((order) => {
    if (order.orderStatus !== "Confirmed") return;
    if (!order.createdAt) return;

    const date = new Date(order.createdAt);

    // Skip invalid dates
    if (isNaN(date.getTime())) return;

    // Only include orders from the current year
    if (date.getFullYear() !== currentYear) return;

    monthlySales[date.getMonth()].units += 1;
  });

  return monthlySales;
}, [orders]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: "6px 0 0", color: "#4F46E5" }}>
          Units Sold: {payload[0].value}
        </p>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-[420px] bg-white rounded-xl p-4 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-[#0F3457]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[420px] bg-white rounded-xl p-4 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] bg-white rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="units"
            name="Units Sold"
            fill="#4F46E5"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;