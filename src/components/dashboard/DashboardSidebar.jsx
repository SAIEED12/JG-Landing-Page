"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Menu, X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-700 bg-[#0F3457] px-4 text-white md:hidden">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image
              src="/logo.jpg"
              width={"20"}
              height={"20"}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>

          <div>
            <h1 className="text-base font-bold leading-none">তাহদীথ শপ</h1>

            <p className="text-xs text-white/70">Admin Dashboard</p>
          </div>
        </div>

        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg p-2 transition hover:bg-white/10"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden w-72 shrink-0 bg-[#0F3457] text-white md:flex md:min-h-screen md:flex-col md:p-6">
        <SidebarContent
          onClose={() => setDrawerOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-[#0F3457] p-6 text-white shadow-2xl transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex justify-end">
          <button
            onClick={() => setDrawerOpen(false)}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>

        <SidebarContent
          onClose={() => setDrawerOpen(false)}
          onLogout={handleLogout}
        />
      </aside>
    </>
  );
};

export default DashboardSidebar;
