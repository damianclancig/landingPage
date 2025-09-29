import { Instagram, Linkedin, Mail, Coffee, MessageCircle, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  id: 'instagram' | 'linkedin' | 'email' | 'cafecito' | 'whatsapp' | 'github';
  nameKey: string;
  href: (t: (key: string, ...args: any[]) => string) => string;
  icon: LucideIcon;
  ariaLabelKey: string;
  tooltipKey: string;
  hoverColor: string;
}

export const socialLinksData: SocialLink[] = [
  {
    id: 'instagram',
    nameKey: 'socials-instagram',
    href: () => `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER}`,
    icon: Instagram,
    ariaLabelKey: 'socials-instagramAria',
    tooltipKey: 'socials-instagramTooltip',
    hoverColor: 'hover:text-[#E1306C]',
  },
  {
    id: 'linkedin',
    nameKey: 'socials-linkedin',
    href: () => `https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`,
    icon: Linkedin,
    ariaLabelKey: 'socials-linkedinAria',
    tooltipKey: 'socials-linkedinTooltip',
    hoverColor: 'hover:text-[#0077B5]',
  },
  {
    id: 'github',
    nameKey: 'socials-github',
    href: () => `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`,
    icon: Github,
    ariaLabelKey: 'socials-githubAria',
    tooltipKey: 'socials-githubTooltip',
    hoverColor: 'hover:text-[#333] dark:hover:text-white',
  },
  {
    id: 'whatsapp',
    nameKey: 'socials-whatsapp',
    href: () => `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
    icon: MessageCircle,
    ariaLabelKey: 'socials-whatsappAria',
    tooltipKey: 'socials-whatsappTooltip',
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    id: 'email',
    nameKey: 'socials-email',
    href: () => `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
    icon: Mail,
    ariaLabelKey: 'socials-emailAria',
    tooltipKey: 'socials-emailTooltip',
    hoverColor: 'hover:text-[#D44638]',
  },
  {
    id: 'cafecito',
    nameKey: 'socials-cafecito',
    href: () => `https://cafecito.app/${process.env.NEXT_PUBLIC_CAFECITO_USER}`,
    icon: Coffee,
    ariaLabelKey: 'socials-cafecitoAria',
    tooltipKey: 'socials-cafecitoTooltip',
    hoverColor: 'hover:text-[#40241A]',
  },
];
