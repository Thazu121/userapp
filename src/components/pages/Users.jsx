import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData()

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Users List
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">
                {user.name}
              </h2>

            </div>

            <Link
              to={`/users/${user.id}`}
              className="mt-6"
            >
              <button className="w-full px-4 py-2 text-sm rounded-lg border border-black hover:bg-black hover:text-white transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
