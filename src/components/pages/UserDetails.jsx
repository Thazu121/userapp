import { Link, useLoaderData } from "react-router-dom";

export default function UserDetails() {
  const user = useLoaderData();

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 sm:px-8">
      <div className="bg-white border border-emerald-200 rounded-2xl shadow-md p-5 sm:p-8 w-full max-w-sm sm:max-w-md text-center">

        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-emerald-900">
          {user.name}
        </h2>

        <p className="text-emerald-700 text-sm sm:text-base mb-5 sm:mb-6">
          {user.email}
        </p>


        <p className="text-black text-sm sm:text-base mb-5 sm:mb-6">
          Phone Number :{user.phone}
        </p>
        <p className="text-black text-sm sm:text-base mb-5 sm:mb-6">
          Place: {user.city}
        </p>
        <Link to={"/users"} >
          <button className="w-full sm:w-auto px-6 py-3 text-sm border rounded-lg bg-slate-100 hover:bg-black hover:text-white transition">
            Go Back
          </button>
        </Link>

      </div>
    </section>
  )
}
