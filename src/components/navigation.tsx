"use client";

import type { Route } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLink = { name: string; href: Route };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Types", href: "/types" },
  { name: "Pokemon", href: "/pokemon" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-3 p-4">
      {navLinks.map(({ name, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "text-cyan-300" : ""}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
