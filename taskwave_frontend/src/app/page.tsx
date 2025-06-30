import DashboardPage from "@/components/dashboard/DashboardPage";

/**
 * PUBLIC_INTERFACE
 * Root Page: Redirect to dashboard/landing (will later gate to login if not authenticated)
 */
export default function Home() {
  return <DashboardPage />;
}
