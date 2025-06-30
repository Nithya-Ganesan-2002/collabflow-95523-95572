import MainLayout from "../layout/MainLayout";

/**
 * PUBLIC_INTERFACE
 * Task board page scaffold
 */
export default function TasksPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-xl font-bold text-primary mb-4">Tasks</h1>
        {/* Task board with drag-and-drop UI will be implemented here */}
        <div className="text-gray-600">No tasks assigned.</div>
      </div>
    </MainLayout>
  );
}
