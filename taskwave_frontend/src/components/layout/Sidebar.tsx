import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Sidebar navigation component for dashboard and switching views
 */
export default function Sidebar() {
  return (
    <aside className="min-h-screen w-56 bg-primary text-white flex flex-col px-4 py-6 gap-4">
      <div className="font-bold text-lg mb-6 tracking-wide">TaskWave</div>
      <nav className="flex flex-col gap-2">
        <Link className="hover:text-accent" href="/">Dashboard</Link>
        <Link className="hover:text-accent" href="/projects">Projects</Link>
        <Link className="hover:text-accent" href="/teams">Teams</Link>
        <Link className="hover:text-accent" href="/tasks">Tasks</Link>
      </nav>
      <div className="flex-grow"></div>
      <Link href="/login" className="text-sm text-accent hover:text-white mt-4">Logout</Link>
    </aside>
  );
}
