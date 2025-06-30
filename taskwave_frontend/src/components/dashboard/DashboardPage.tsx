import MainLayout from "../layout/MainLayout";

/**
 * PUBLIC_INTERFACE
 * Minimal dashboard home for authenticated user
 */
export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-primary">Welcome to TaskWave</h1>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded shadow p-4">
            <span className="block text-accent font-semibold text-lg mb-2">Projects</span>
            <span className="text-sm text-gray-600">View or manage your projects</span>
          </div>
          <div className="bg-white rounded shadow p-4">
            <span className="block text-accent font-semibold text-lg mb-2">Teams</span>
            <span className="text-sm text-gray-600">Organize or invite team members</span>
          </div>
          <div className="bg-white rounded shadow p-4">
            <span className="block text-accent font-semibold text-lg mb-2">Tasks</span>
            <span className="text-sm text-gray-600">Assign, edit, and track tasks</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
