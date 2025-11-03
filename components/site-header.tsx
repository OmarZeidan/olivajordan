import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-background/80 backdrop-blur dark:border-gray-800 dark:bg-[#1b1b1b]/80">
      <div className="mx-auto flex items-center justify-between container-inner py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Oliva — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-oliva.svg"
            alt="Oliva Italian Restaurant"
            className="w-18 h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#story"
            className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white"
          >
            Our Story
          </Link>
          <Link
            href="#food"
            className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white"
          >
            The Food
          </Link>
          <Link
            href="#contact"
            className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side with mobile menu*/}
        <div className="flex items-center space-x-4">
          <Link className="hidden md:flex" href="/menu">
            <Button className="rounded-xl w-full flex items-center">
              Explore Our Menu
            </Button>
          </Link>
          <ThemeToggle />
          <Button
            id="openMenu"
            size={"icon"}
            className="md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
