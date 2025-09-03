"use client"

import Link from "next/link"
import { Menu, Terminal } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { useState } from "react"
import { Separator } from "../ui/separator"

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#bio", labelKey: "nav-bio" },
    { href: "#services", labelKey: "nav-services" },
    { href: "#offerings", labelKey: "nav-offerings" },
    { href: "#pricing", labelKey: "nav-pricing" },
    { href: "#contact", labelKey: "nav-contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">{t('appName')}</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-base font-medium">
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
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="border-b pb-4 text-left">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Terminal className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">{t('appName')}</span>
                  </Link>
                </SheetHeader>
                <div className="py-6">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                       <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-primary text-foreground/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t(item.labelKey)}
                        </Link>
                       </SheetClose>
                    ))}
                  </nav>
                  <Separator className="my-6" />
                  <div className="flex justify-center space-x-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop Right side */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
