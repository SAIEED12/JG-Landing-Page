"use client";

import { Input } from "@heroui/react";
import { Search } from "lucide-react";
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
      placeholder="Search by name or phone number..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      startContent={<Search size={18} className="text-gray-400" />}
      variant="bordered"
      radius="full"
      size="lg"
      className="w-full max-w-md"
      classNames={{
        input: "text-sm placeholder:text-gray-400",
        inputWrapper:
          "bg-white border border-gray-200 shadow-sm hover:border-blue-400 focus-within:border-blue-500 transition-all duration-200",
      }}
    />
  );
};

export default Searchbar;
