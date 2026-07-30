"use client";

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search.trim());
      }

      params.set("page", "1");

      router.replace(`/dashboard/admin/orders?${params.toString()}`);
    }, 10);

    return () => clearTimeout(timer);
  }, [search, router]);

  return (
    <Input
      type="search"
      placeholder="Phone, Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbar;