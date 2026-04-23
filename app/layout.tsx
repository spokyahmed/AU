import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha Underground — Discord Community",
  description:
    "Alpha Underground is a Discord community for people who actually show up. Pick a pass and join.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="brand-dot" /> Alpha Underground
          </Link>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Alpha Underground</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
