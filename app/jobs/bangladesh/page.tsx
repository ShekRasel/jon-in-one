import Link from "next/link";
import { bangladeshPlatforms } from "@/data/bangladesh.platforms";
import BackButton from "@/components/ui/buttons/back-button";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="grid grid-cols-3 items-center">
            <div className="justify-self-start">
              <BackButton className="hover:bg-emerald-600" />
            </div>

            <div className="justify-self-center">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
                Bangladesh Job Platforms
              </span>
            </div>
            <div />
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Find Your Next Opportunity
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Access all major Bangladeshi job platforms from one place. Search,
            compare and apply faster.
          </p>

          <div className="mt-10 flex justify-center">
            <input
              type="text"
              placeholder="Search platform..."
              className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">
              {bangladeshPlatforms.length}+
            </h3>
            <p className="text-slate-400">Platforms</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">Daily</h3>
            <p className="text-slate-400">Updated Sources</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">All-in-One</h3>
            <p className="text-slate-400">Job Discovery</p>
          </div>
        </div>

        {/* Platform Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bangladeshPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl">{platform.icon}</span>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {platform.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold">{platform.name}</h2>

              <p className="mt-3 text-slate-400">{platform.description}</p>

              <Link
                href={platform.url}
                target="_blank"
                className="mt-6 inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium transition hover:bg-emerald-500"
              >
                Visit Platform →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
