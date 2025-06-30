import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * PUBLIC_INTERFACE
 * Main layout wrapper with sidebar for dashboard views
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-secondary">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-10">{children}</main>
    </div>
  );
}
