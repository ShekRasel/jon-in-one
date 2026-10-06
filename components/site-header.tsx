"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Layers2 } from "lucide-react";
export default function SiteHeader() {
    const pathname = usePathname();
    return <header className="site-header"><div className="container nav-inner"><Link href="/" className="brand" aria-label="Job in one home"><span className="brand-mark"><Layers2 size={22}/></span>job<span className="brand-light">in</span>one<span className="brand-dot">.</span></Link><nav aria-label="Main navigation">{[{ href: "/", label: "Overview" }, { href: "/jobs/bangladesh", label: "Bangladesh" }, { href: "/jobs/global", label: "Global" }, { href: "/jobs/remote", label: "Remote" }, { href: "/jobs/companies", label: "Companies" }].map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav><Link className="nav-cta" href="/#explore">Explore opportunities <ArrowUpRight size={16}/></Link></div></header>;
}
