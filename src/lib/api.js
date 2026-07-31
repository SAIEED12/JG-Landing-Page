import { authClient } from "@/lib/auth-client";

const apiURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export async function getClientAuthToken() {
  const { data } = await authClient.token();
  return data?.token;
}

export async function getOrders(page = 1, search = "", token) {
  const params = new URLSearchParams({
    page: page.toString(),
  });

  if (search.trim()) {
    params.append("search", search);
  }

  const res = await fetch(`${apiURL}/orders?${params.toString()}`, {
    cache: "no-store",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return res.json();
}

export async function getAllOrders(token) {
  const res = await fetch(`${apiURL}/orders/all`, {
    cache: "no-store",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return res.json();
}
