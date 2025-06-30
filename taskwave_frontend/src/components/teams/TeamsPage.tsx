import MainLayout from "../layout/MainLayout";

/**
 * PUBLIC_INTERFACE
 * Team management page scaffold
 */
export default function TeamsPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-xl font-bold text-primary mb-4">Teams</h1>
        {/* Team list/management UI will be implemented here */}
        <div className="text-gray-600">No team members yet.</div>
      </div>
    </MainLayout>
  );
}
