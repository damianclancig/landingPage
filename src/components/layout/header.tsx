
"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
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
import Image from "next/image"

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#bio", labelKey: "nav-bio" },
    { href: "#projects", labelKey: "nav-projects" },
    { href: "#services", labelKey: "nav-services" },
    { href: "#offerings", labelKey: "nav-offerings" },
    { href: "#pricing", labelKey: "nav-pricing" },
    { href: "#contact", labelKey: "nav-contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="https://res.cloudinary.com/dqh1coa3c/image/upload/v1756991404/devProfile/logo-clancig-3_yzrv8l.webp" 
            alt="DevPortfolio Logo"
            width={160}
            height={50}
            className="h-full w-auto py-2"
            priority
          />
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
                <Button variant="outline" size="icon" className="border-accent/80">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="border-b border-accent/40 pb-4 text-left">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                     <Image 
                        src="https://res.cloudinary.com/dqh1coa3c/image/upload/v1756991404/devProfile/logo-clancig-3_yzrv8l.webp" 
                        alt="DevPortfolio Logo"
                        width={140}
                        height={40}
                        className="h-10 w-auto"
                      />
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
                  <Separator className="my-6 bg-accent/40" />
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
