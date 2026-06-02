'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface AccordionItem { q: string; a: string; }

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dark = '#1A1A1A'; const mid = '#2D2D2D'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="rounded overflow-hidden" style={{ background: mid, border: `1px solid ${borderD}` }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm list-none cursor-pointer transition-colors duration-150"
              style={{ color: '#fff', background: 'transparent' }}
            >
              <span>{item.q}</span>
              <ChevronRight
                size={16}
                style={{ color: orange, flexShrink: 0, transition: 'transform 280ms ease', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div className="accordion-body" style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 280ms ease' }}>
              <div style={{ overflow: 'hidden' }}>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#C8C8C8', borderTop: `1px solid ${borderD}`, paddingTop: '0.75rem' }}>
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
