import BackButton from "@/components/ui/buttons/back-button";
import { globalPlatforms } from "@/data/global.platforms";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="mb-14 text-center">
            <div className="grid grid-cols-3 items-center">
              <div className="justify-self-start">
                <BackButton className="hover:bg-blue-500" />
              </div>

              <div className="justify-self-center">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
                  Global Job Platforms
                </span>
              </div>
              <div />
            </div>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Explore International Opportunities
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Access the world&apos;s leading job platforms and discover
            opportunities across countries, industries, and career levels.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">{globalPlatforms.length}+</h3>
            <p className="text-slate-400">Platforms</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">190+</h3>
            <p className="text-slate-400">Countries</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">Global</h3>
            <p className="text-slate-400">Career Network</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {globalPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
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
                className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
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
