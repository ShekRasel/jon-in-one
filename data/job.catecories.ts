import { JobCategory } from "@/types/job.catecories";

export const jobCategories: JobCategory[] = [
  {
    title: "Bangladesh Jobs",
    description: "Explore all Bangladeshi job platforms.",
    count: "15+ Platforms",
    href: "/jobs/bangladesh",
    icon: "🇧🇩",
    gradient: "from-emerald-500 to-green-700",
  },
  {
    title: "Global Jobs",
    description: "Find international opportunities.",
    count: "12+ Platforms",
    href: "/jobs/global",
    icon: "🌍",
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    title: "Remote Jobs",
    description: "Work from anywhere in the world.",
    count: "Remote First",
    href: "/jobs/remote",
    icon: "🚀",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    title: "Company Careers",
    description: "Direct company career pages.",
    count: "Bd Companies",
    href: "/jobs/companies",
    icon: "🏢",
    gradient: "from-orange-500 to-red-600",
  },
] as const;
