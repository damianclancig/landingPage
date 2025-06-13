"use client"

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { socialLinksData, type SocialLink } from "@/lib/socials";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  showText?: boolean;
  className?: string;
  linksToDisplay?: SocialLink['id'][];
}

export default function SocialLinks({ showText = false, className, linksToDisplay }: SocialLinksProps) {
  const { t } = useTranslation();

  const links = linksToDisplay
    ? socialLinksData.filter(link => linksToDisplay.includes(link.id))
    : socialLinksData;

  return (
    <div className={cn("flex flex-wrap justify-center items-center gap-x-6 gap-y-4", className)}>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href(t)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(link.ariaLabelKey, { handle: t(link.nameKey) })}
          className={cn(
            "flex items-center text-muted-foreground transition-colors group text-sm",
            link.hoverColor
          )}
        >
          <link.icon className={cn(
              "group-hover:scale-110 transition-transform",
              showText ? "h-5 w-5 mr-2" : "h-5 w-5"
          )} />
          {showText && <span>{t(link.nameKey)}</span>}
        </Link>
      ))}
    </div>
  );
}
