interface NavProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
  label: string;
  activeId: string | null;
  pathname: string;
}
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

export const NavLink = forwardRef<HTMLAnchorElement, NavProps>(
  ({ href, label, activeId, pathname, className, ...props }, ref) => {
    const isHome = pathname === "/";
    const isAnchor = href.startsWith("/#");
    const anchorId = isAnchor ? href.slice(2) : null;

    // active if: exact route match OR (we're on home and anchor id matches observed section)
    const isActive =
      pathname === href || (isHome && isAnchor && anchorId === activeId);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          isActive
            ? "text-primary-700  dark:text-primary-300 font-bold"
            : "text-primary-700 hover:text-primary-900 dark:text-gray-300 hover:dark:text-white",
          className,
        )}
        {...props}
      >
        {label}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";
