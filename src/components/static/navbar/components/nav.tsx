"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from '../data';
import { ProductsMenu, ResourcesMenu, SolutionsMenu } from './dropdowns';
import { BrandAssetsMenu } from '@/components/ui/brand-assets-menu';

const MENUS = [
  { id: 'products', Component: ProductsMenu },
  { id: 'solutions', Component: SolutionsMenu },
  { id: 'resources', Component: ResourcesMenu },
];

export function Navigation() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setPrevIdx(activeIdx);
    setActiveIdx(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPrevIdx(activeIdx);
      setActiveIdx(null);
    }, 250);
  };

  useEffect(() => {
    if (activeIdx !== null && activeIdx !== undefined) {
      const el = contentRefs.current[activeIdx];
      if (el) {
        setDimensions({
          width: el.offsetWidth,
          height: el.offsetHeight,
        });
      }
    }
  }, [activeIdx]);

  const isOpen = activeIdx !== null && NAV_ITEMS[activeIdx]?.hasDropdown;

  return (
    <div className="w-full flex justify-center pt-8">
      <nav
        className="relative flex flex-col items-center w-fit"
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center bg-background p-1.5 rounded-full z-20 space-x-2 border border-border shadow-sm relative">
          <BrandAssetsMenu
            logomark={<Image src="/logo.svg" alt="Logo" width={20} height={20} />}
            logomarkSVG="/logo.svg"
            logotypeSVG="/logo.svg"
            brandGuidelinesURL="#"
            brandAssetsURL="/logo.svg"
          >
            <Link href="/" className="flex items-center gap-1.5 ml-2 mr-4 group">
              <Image
                src="/logo.svg"
                alt="AntiRaid Logo"
                width={28}
                height={28}
                className="group-hover:opacity-80 transition-opacity"
              />
              <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                AntiRaid
              </span>
            </Link>
          </BrandAssetsMenu>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onMouseEnter={() => handleMouseEnter(i)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                item.id === 'login'
                  ? 'text-primary-foreground bg-primary/80 hover:bg-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105'
                  : activeIdx === i
                    ? 'text-accent-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              {item.id === 'login' && <LogIn size={14} />}
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeIdx === i ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <div
          className={`absolute top-full pt-4 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 w-fit h-fit
            ${isOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div 
             className={`bg-popover border border-border rounded-3xl shadow-xl overflow-hidden relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
               ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
             style={{ width: dimensions.width || 300, height: dimensions.height || 300 }}
          >
            {MENUS.map((menu) => {
              const itemIndex = NAV_ITEMS.findIndex(n => n.id === menu.id);
              const isActive = activeIdx === itemIndex;
              
              // Calculating directional sliding offset
              let xOffset = 0;
              if (activeIdx !== null && prevIdx !== null && activeIdx !== prevIdx) {
                if (itemIndex < activeIdx) xOffset = -150;
                else if (itemIndex > activeIdx) xOffset = 150;
              } else if (activeIdx !== null) {
                 if (itemIndex < activeIdx) xOffset = -150;
                 else if (itemIndex > activeIdx) xOffset = 150;
              }

              return (
                <div
                  key={menu.id}
                  ref={el => { contentRefs.current[itemIndex] = el; }}
                  className={`absolute top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  style={{
                    transform: `translateX(${isActive ? 0 : (activeIdx === null ? 0 : xOffset)}px)`
                  }}
                >
                  <menu.Component />
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
