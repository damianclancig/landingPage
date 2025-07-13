"use client"

import { useTranslation } from "@/hooks/use-translation"
import SocialLinks from "../social-links";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <SocialLinks
          className="mb-6"
          linksToDisplay={['instagram', 'linkedin', 'whatsapp', 'email', 'cafecito']}
        />
        <div className="text-sm text-muted-foreground">
            <p>{t('footer-copy', { year: currentYear })}</p>
            <p className="mt-1">{t('footer-madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
