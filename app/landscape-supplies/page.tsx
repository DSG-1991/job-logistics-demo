import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Truck, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Landscape Supplies Blackpool | Stone, Aggregates, Fencing, Turf | Blackpool Recycling',
  description: 'Landscape supplies delivered across Blackpool and the Fylde. Stone, aggregates, fence panels and turf from £30. Call 01253 963109 to order.',
};

const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';

const products = [
  { label: 'Stone & Decorative Gravel', items: ['Slate chippings','Gravel and pea shingle','Cobbles and boulders','Decorative aggregates','MOT Type 1 & Type 2'] },
  { label: 'Aggregates & Building Materials', items: ['Sharp sand','Ballast','Concrete aggregate','Topsoil and compost','Recycled aggregate'] },
  { label: 'Fencing & Screening', items: ['Featherboard fence panels','Trellis panels','Gravel boards','Fence posts','Privacy screening'] },
  { label: 'Turf & Lawn', items: ['Rolled turf (meadow & premier grade)','Artificial grass','Lawn edging','Weed membrane','Bark mulch'] },
];

export default function LandscapeSuppliesPage() {
  return (
    <>
      <section style={{ background: dark, padding: '3.5rem 0', borderBottom: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: orange }}>Landscape Supplies</p>
          <h1 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.05 }}>
            Stone, aggregates, fencing and turf.<br /><span style={{ color: orange }}>Delivered from £30.</span>
          </h1>
          <p className="text-lg max-w-xl mb-6" style={{ color: '#C8C8C8' }}>
            Everything you need to transform your garden or driveway — ordered by phone, delivered across Blackpool and the Fylde Coast. Same yard. Same trusted team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded text-base" style={{ background: orange, color: dark }}>
              <Phone size={16} /> Call to order
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded text-base" style={{ border: `1px solid ${borderD}`, color: '#fff' }}>
              Request a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>What we supply</p>
          <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: '#fff' }}>Our product range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(({ label, items }) => (
              <div key={label} className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{label}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#C8C8C8' }}>
                      <CheckCircle size={11} color={orange} className="mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: '#888' }}>Full product list available on request. Call 01253 963109 for availability and pricing on specific materials.</p>
        </div>
      </section>

      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Truck, title: 'Delivery from £30', desc: 'We deliver across Blackpool and the Fylde. Prices depend on quantity and material. Most deliveries same or next day.' },
            { icon: CheckCircle, title: 'Collection available', desc: 'Based at Dickies Lane South FY4 5LG — collect from our yard yourself if you have a suitable vehicle.' },
            { icon: Phone, title: 'One call to order', desc: 'No online checkout complexity. Call 01253 963109, tell us what you need, get a quote, confirm delivery. Done.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
              <div className="w-10 h-10 rounded flex items-center justify-center mb-3" style={{ background: orange }}>
                <Icon size={20} color={dark} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#C8C8C8' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: orange, padding: '3rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: dark }}>Ready to order?</h2>
          <p className="mb-6 text-sm" style={{ color: '#333' }}>Tell us the material, the quantity and your postcode. We&apos;ll price it up and book a delivery slot — usually same or next day.</p>
          <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded text-sm" style={{ background: dark, color: '#fff' }}>
            <Phone size={16} /> Call 01253 963109
          </a>
        </div>
      </section>
    </>
  );
}
