import type { IconType } from 'react-icons';
import { FaDiscord, FaNoteSticky } from 'react-icons/fa6';
import { GrStatusGood } from 'react-icons/gr';

export type NavFooterLink = {
  label: string;
  href: string;
  icon?: IconType;
};

export type NavMenuItem = {
  title: string;
  description: string;
  href?: string;
};

export const NAV_ITEMS = [
  { id: 'products', label: 'Product', hasDropdown: true },
  { id: 'solutions', label: 'Company', hasDropdown: true },
  { id: 'resources', label: 'Resources', hasDropdown: true },
  { id: 'login', label: 'Login', hasDropdown: false },
];

export const PRODUCTS_LIST: NavMenuItem[] = [
  {
    title: 'Script Shop',
    description: 'Get the best scripts for your server, vetted by our team.',
    href: '/solutions/script-shop',
  },
  {
    title: 'Commands',
    description: 'All of the base commands available for your server.',
    href: '/commands',
  },
  {
    title: 'Features',
    description: 'Everything we offer to help you build and scale your server.',
    href: '/#features',
  },
  {
    title: 'Invite',
    description: 'Invite AntiRaid to your server.',
    href: '/invite',
  },
];

export const SOLUTIONS_LEFT: NavMenuItem[] = [
  {
    title: 'About',
    description: 'Our team, our mission and how we build our products.',
    href: '/about',
  },
  {
    title: 'Branding',
    description: 'Our branding guidelines and how to use our assets.',
    href: '/branding',
  },
];

export const SOLUTIONS_RIGHT: NavMenuItem[] = [
  {
    title: 'Purrquinox',
    description: 'Learn more about Purrquinox.',
    href: 'https://purrquinox.com',
  },
];

export const SOLUTIONS_FOOTER_LINKS: NavFooterLink[] = [
  { label: 'Demo', href: '/demo', icon: FaNoteSticky },
  { label: 'Purrquinox', href: 'https://purrquinox.com' },
  { label: 'Status', href: '/status', icon: GrStatusGood },
  { label: 'Support', href: '/support', icon: FaDiscord },
];

export const RESOURCES_LEFT: NavMenuItem[] = [
  {
    title: 'Documentation',
    description: 'Guides, references and examples for every feature.',
    href: '/docs/',
  },
  {
    title: 'API Reference',
    description: 'Detailed docs for every endpoint.',
    href: '/docs/api',
  },
  {
    title: 'Discord Community',
    description: 'Ask questions and share what you build with others.',
    href: '/discord',
  },
];

export const RESOURCES_RIGHT: NavMenuItem[] = [
  {
    title: 'Demo',
    description: 'Step-by-step lessons that take you from zero to sailing.',
    href: '/demo',
  },
  {
    title: 'Blog',
    description: 'Product news, engineering deep dives and best practices.',
    href: '/blog',
  },
];
