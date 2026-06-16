import BackButton from "@/components/ui/buttons/back-button";
import { companyCareers } from "@/data/company.career";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="mb-14 text-center">
            <div className="grid grid-cols-3 items-center">
              {/* Left */}
              <div className="justify-self-start">
                <BackButton className="hover:bg-orange-500" />
              </div>

              {/* Center */}
              <div className="justify-self-center">
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">
                  Bangladesh Company Careers
                </span>
              </div>
              <div />
            </div>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Direct Company Career Pages
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Explore career opportunities directly from Bangladesh&apos;s leading
            software and technology companies. Apply without relying on job
            boards and connect directly with employers.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">{companyCareers.length}+</h3>
            <p className="text-slate-400">Companies</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">Verified</h3>
            <p className="text-slate-400">Career Pages</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">Direct</h3>
            <p className="text-slate-400">Applications</p>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companyCareers.map((company) => (
            <div
              key={company.id}
              className="
                group
                rounded-3xl
                border border-slate-800
                bg-slate-900
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-orange-500/40
                hover:shadow-xl
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl">{company.icon}</span>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {company.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold">{company.name}</h2>

              <p className="mt-3 min-h-[72px] text-slate-400">
                {company.description}
              </p>

              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6 inline-flex items-center
                  rounded-xl
                  bg-orange-600
                  px-4 py-2
                  text-sm font-medium
                  transition
                  hover:bg-orange-500
                "
              >
                Visit Career Page →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
