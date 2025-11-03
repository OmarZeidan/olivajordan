"use client";
import Link from "next/link";
import { SocialLinks } from "./social-links";
import { Border } from "./ui/border";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-linear-to-b  from-(--color-primary-50) to-[#FFFFFF] text-gray-800 dark:bg-none dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-oliva.svg"
              alt="Oliva Italian Restaurant"
              className="w-24 h-auto"
            />
          </Link>
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed ">
          More than a restaurant: Oliva is a neighborhood table shared by a
          city. Since 2011 in Jabal Al Lweibdeh, we’ve been serving clay-oven
          pizzas, handmade pasta, and seasonal dishes that bring people together
          over honest Italian flavor and local warmth.
        </p>
        <SocialLinks />
      </div>
      <Border className="dark:invert" />
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm  text-primary-500 dark:text-primary-50">
        <Link href="/">Oliva</Link> ©{new Date().getFullYear()}. All rights
        reserved.
      </div>
    </footer>
  );
}
