"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme = storedTheme || getSystemTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded border border-[var(--border)] text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
      aria-label="Toggle dark and light theme"
      style={{letterSpacing: 1.5, padding: "0px  5px"}}
    >
      {ready ? (theme === "dark" ? "LIGHT" : "DARK") : "Theme"}
    </button>
  );
}
