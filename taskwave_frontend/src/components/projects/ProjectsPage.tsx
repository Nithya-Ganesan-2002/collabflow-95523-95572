import MainLayout from "../layout/MainLayout";

/**
 * PUBLIC_INTERFACE
 * Project management page scaffold
 */
export default function ProjectsPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-xl font-bold text-primary mb-4">Projects</h1>
        {/* Projects grid/list will be implemented here */}
        <div className="text-gray-600">No projects yet.</div>
      </div>
    </MainLayout>
  );
}
