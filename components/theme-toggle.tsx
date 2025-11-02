"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hidden dark:inline-flex"
        onClick={() => setTheme("light")}
      >
        <Sun />
        <span className="sr-only">Change theme to light</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full dark:hidden"
        onClick={() => setTheme("dark")}
      >
        <Moon />
        <span className="sr-only">Change theme to dark</span>
      </Button>
    </>
  );
}
