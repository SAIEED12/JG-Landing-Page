"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    label: "Overview",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    href: "/dashboard/admin/orders",
    icon: ShoppingBag,
  },
  {
    label: "Products",
    href: "/dashboard/admin/products",
    icon: Package,
  },
  {
    label: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings,
  },
];

const SidebarContent = ({ onClose, onLogout }) => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  const adminName =
    session?.user?.name ||
    session?.user?.username ||
    session?.user?.email ||
    "Admin";

  return (
    <>
      {/* Admin Info */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <p className="text-xs uppercase tracking-wider text-white/50">
          Logged in as
        </p>

        <h2 className="mt-2 text-lg font-semibold text-white wrap-break-word">
          {isPending ? "Loading..." : adminName}
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/dashboard/admin"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#0F3457] shadow-md"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-300 transition hover:bg-red-500/15 hover:text-red-200 cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </>
  );
};

export default SidebarContent;
