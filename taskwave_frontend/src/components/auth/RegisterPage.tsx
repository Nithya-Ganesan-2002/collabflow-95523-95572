import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Minimal registration UI for new account creation
 */
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white p-8 rounded shadow max-w-sm w-full flex flex-col gap-4">
        <h2 className="text-primary text-2xl font-semibold mb-2">Create account</h2>
        <form className="flex flex-col gap-3">
          <input
            className="border rounded px-3 py-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="border rounded px-3 py-2"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-primary text-white rounded px-4 py-2 mt-2 hover:bg-accent transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm mt-2 text-center">
          Already have an account?{" "}
          <Link className="text-accent hover:underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
