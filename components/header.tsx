"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header>
      <h2>German Molina Jr</h2>
      <nav>
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className={pathname === page.path ? "active" : ""}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
