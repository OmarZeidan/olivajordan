"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data.nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { NavLink } from "./nav-item";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // check if top sentinel is visible
        const topEntry = entries.find(
          (entry) => entry.target.id === "top-sentinel" && entry.isIntersecting,
        );
        if (topEntry) {
          requestAnimationFrame(() => setActiveId(null));
          return;
        }

        // pick the most visible section to avoid rapid toggling
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const nextId = visible?.target.id || null;

        // prevent unnecessary state updates
        if (nextId && nextId !== activeId) {
          requestAnimationFrame(() =>
            setActiveId((prev) => (prev === nextId ? prev : nextId)),
          );
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]); // don't include activeId to keep observer stable

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-background/80 backdrop-blur
  dark:border-[#2b2c23] dark:bg-[#1b1c16]/80"
    >
      <div className="mx-auto flex items-center justify-between container-inner py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Oliva — Home"
          onClick={() => setActiveId(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-oliva.svg"
            alt="Oliva Italian Restaurant"
            className="w-18 h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              activeId={activeId}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* Right Side with mobile menu */}
        <div className="flex items-center space-x-4">
          <Link className="hidden md:flex" href="/menu">
            <Button className="rounded-xl w-full flex items-center">
              Explore Our Menu
            </Button>
          </Link>
          <ThemeToggle />
          <MobileMenu activeId={activeId} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
