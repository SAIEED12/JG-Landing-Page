"use client";

import React from "react";
import Image from "next/image";
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
  // {
  //   label: "Products",
  //   href: "/dashboard/admin/products",
  //   icon: Package,
  // },
  {
    label: "Profile",
    href: "/dashboard/admin/profile",
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
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            alt="Karkuma"
            width={52}
            height={52}
            className="rounded-full"
          />
        </Link>

        <div>
          <Link href="/" className="text-lg font-bold text-white">
            তাহদীথ শপ
          </Link>

          <p className="text-sm text-white/60">Admin Dashboard</p>
        </div>
      </div>

      {/* Admin Info */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Logged in as
        </p>

        <h2 className="mt-2 text-lg font-semibold text-white break-words">
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
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#0F3457] shadow-lg"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Logout */}
        <button
          onClick={onLogout}
          className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium bg-red-500 text-white transition-all duration-200 hover:bg-red-700 hover:text-red-200 cursor-pointer"
        >
          <LogOut size={19} />
          Logout
        </button>
      </nav>

      {/* Footer */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="text-xs text-white/40 text-center">
          © {new Date().getFullYear()} তাহদীথ শপ
        </p>
      </div>
    </>
  );
};

export default SidebarContent;
