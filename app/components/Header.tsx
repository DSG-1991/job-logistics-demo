'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/drop-off', label: 'Drop-Off Centre' },
  { href: '/skip-hire', label: 'Skip Hire' },
  { href: '/trade-waste', label: 'Trade & Commercial' },
  { href: '/landscape-supplies', label: 'Landscape Supplies' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-site-bg border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Blackpool Recycling"
            width={200}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-body hover:text-brand-orange font-medium text-sm transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:01253963109"
          className="hidden lg:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-text-dark font-bold px-4 py-2 rounded text-sm transition-colors"
        >
          <Phone size={14} />
          01253 963109
        </a>

        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:01253963109" className="flex items-center gap-1 text-brand-orange font-bold text-sm">
            <Phone size={14} />Call
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 text-text-body">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-dark bg-surface-dark">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-text-body hover:text-brand-orange font-medium border-b border-border-dark last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01253963109"
              className="mt-3 flex items-center gap-2 bg-brand-orange text-text-dark font-bold px-4 py-3 rounded justify-center"
            >
              <Phone size={16} /> Call 01253 963109
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
