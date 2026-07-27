import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen md:flex">
      <DashboardSidebar />

      <main className="flex-1 pt-16 md:pt-0 p-4 md:p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}