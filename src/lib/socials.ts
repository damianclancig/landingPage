import { Instagram, Linkedin, Mail, Coffee, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  id: 'instagram' | 'linkedin' | 'email' | 'cafecito' | 'whatsapp';
  nameKey: string;
  href: (t: (key: string, ...args: any[]) => string) => string;
  icon: LucideIcon;
  ariaLabelKey: string;
  hoverColor: string;
}

export const socialLinksData: SocialLink[] = [
  {
    id: 'instagram',
    nameKey: 'socials.instagram',
    href: () => 'https://instagram.com/damianclancig',
    icon: Instagram,
    ariaLabelKey: 'socials.instagramAria',
    hoverColor: 'hover:text-[#E1306C]',
  },
  {
    id: 'linkedin',
    nameKey: 'socials.linkedin',
    href: () => 'https://linkedin.com/in/damianclancig',
    icon: Linkedin,
    ariaLabelKey: 'socials.linkedinAria',
    hoverColor: 'hover:text-[#0077B5]',
  },
  {
    id: 'whatsapp',
    nameKey: 'socials.whatsapp',
    href: (t) => `https://wa.me/${t('socials.whatsappNumber')}`,
    icon: MessageCircle,
    ariaLabelKey: 'socials.whatsappAria',
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    id: 'email',
    nameKey: 'socials.email',
    href: () => 'mailto:damian@clancig.com.ar',
    icon: Mail,
    ariaLabelKey: 'socials.emailAria',
    hoverColor: 'hover:text-[#D44638]',
  },
  {
    id: 'cafecito',
    nameKey: 'socials.cafecito',
    href: () => 'https://cafecito.app/damianclancig',
    icon: Coffee,
    ariaLabelKey: 'socials.cafecitoAria',
    hoverColor: 'hover:text-[#40241A]',
  },
];