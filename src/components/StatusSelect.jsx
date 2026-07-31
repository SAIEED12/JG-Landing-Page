"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getClientAuthToken } from "@/lib/api";

const StatusSelect = ({ orderId, status }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(status);
  const [updating, setUpdating] = useState(false);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    const previous = current;
    setCurrent(newStatus);
    setUpdating(true);

    try {
      const token = await getClientAuthToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderStatus: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      router.refresh();
    } catch (err) {
      console.error(err);
      setCurrent(previous);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <select
      value={current}
      onChange={handleChange}
      disabled={updating}
      className={`cursor-pointer rounded-full border px-2 py-2 text-xs font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-60 ${
        current === "Pending"
          ? "border-yellow-300 bg-yellow-50 text-yellow-700"
          : current === "Confirmed"
          ? "border-green-300 bg-green-50 text-green-700"
          : "border-red-300 bg-red-50 text-red-700"
      }`}
    >
      <option value="Pending">Pending</option>
      <option value="Confirmed">Confirmed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default StatusSelect;