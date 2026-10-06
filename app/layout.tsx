import type { Metadata } from "next";
import Link from "next/link";
import { Layers2 } from "lucide-react";
import SiteHeader from "@/components/site-header";
import "./globals.css";
export const metadata: Metadata = { title: "Job in One — Your next chapter starts here", description: "Find your next career destination. Explore Bangladesh, global and remote job platforms, plus company career pages, all in one place." };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<footer className="container site-footer"><Link href="/" className="brand"><span className="brand-mark"><Layers2 size={20}/></span>job<span className="brand-light">in</span>one<span className="brand-dot">.</span></Link><p>A little hub for your next big move.</p><span>Made for possibility. Built for you.</span></footer></body></html>;
}
