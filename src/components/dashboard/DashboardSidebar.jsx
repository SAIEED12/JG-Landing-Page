"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import SidebarContent from "./SidebarContent";

const navItems = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/dashboard/orders", icon: ShoppingBag },
  { label: "Products", href: "/admin/dashboard/products", icon: Package },
  { label: "Settings", href: "/admin/dashboard/settings", icon: Settings },
];

const DashboardSidebar = ({ adminName }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <>
      {/* Mobile top bar with hamburger trigger */}
      <div className="md:hidden flex items-center justify-between bg-[#0F3457] text-white px-4 py-3 sticky top-0 z-40">
        <span className="font-serif font-bold">Admin Panel</span>
        <button onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop sidebar (always visible) */}
      <aside className="hidden md:flex w-64 bg-[#0F3457] text-white flex-col p-6 shrink-0 min-h-screen">
        <SidebarContent
          onClose={() => setDrawerOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer panel */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#0F3457] text-white flex flex-col p-6 z-50 transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="self-end mb-4 text-white/70 hover:text-white cursor-pointer"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        <SidebarContent
          onClose={() => setDrawerOpen(false)}
          onLogout={handleLogout}
        />
      </aside>
    </>
  );
};

export default DashboardSidebar;
