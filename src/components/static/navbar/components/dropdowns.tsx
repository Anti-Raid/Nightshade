import Link from 'next/link';
import { Shield } from 'lucide-react';
import type { NavMenuItem } from '../data';
import {
  PRODUCTS_LIST,
  RESOURCES_LEFT,
  RESOURCES_RIGHT,
  SOLUTIONS_FOOTER_LINKS,
  SOLUTIONS_LEFT,
  SOLUTIONS_RIGHT,
} from '../data';

function NavItem({ title, description, href }: NavMenuItem) {
  const content = (
    <>
      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-[200px] leading-snug mt-1 border-transparent">
        {description}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {content}
      </Link>
    );
  }

  return <div className="group cursor-pointer">{content}</div>;
}

export function ProductsMenu() {
  return (
    <div className="w-[680px] p-7 flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-muted/50 border border-border rounded-xl p-7 flex flex-col justify-center items-center text-center">
        <Shield size={36} className="mb-3 text-foreground" strokeWidth={1.5} />
        <h3 className="text-sm font-bold text-foreground mb-1">AntiRaid</h3>
        <p className="text-sm text-muted-foreground leading-snug max-w-[160px]">
          Scripts, commands and raid protection for your Discord server.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
        {PRODUCTS_LIST.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export function SolutionsMenu() {
  return (
    <div className="w-[600px] p-5 flex flex-col">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <div className="flex flex-col gap-4">
          {SOLUTIONS_LEFT.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {SOLUTIONS_RIGHT.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="border-t border-border mt-3 pt-3 flex justify-end items-center">
        <div className="flex gap-3 text-xs text-muted-foreground">
          {SOLUTIONS_FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden /> : null}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResourcesMenu() {
  return (
    <div className="w-[600px] p-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <div className="flex flex-col gap-4">
          {RESOURCES_LEFT.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {RESOURCES_RIGHT.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
