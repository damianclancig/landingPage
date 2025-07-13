"use client"

import Link from "next/link"
import { Terminal } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { t } = useTranslation();

  const navItems = [
    { href: "#bio", labelKey: "nav-bio" },
    { href: "#services", labelKey: "nav-services" },
    { href: "#offerings", labelKey: "nav-offerings" },
    { href: "#pricing", labelKey: "nav-pricing" },
    { href: "#contact", labelKey: "nav-contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">{t('appName')}</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 md:flex-none">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        {/* TODO: Add mobile navigation (Sheet or Dropdown) */}
      </div>
    </header>
  )
}
