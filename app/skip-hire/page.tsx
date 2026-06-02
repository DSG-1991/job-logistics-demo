import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skip Hire Blackpool | Same-Day Delivery | Job Logistics',
  description: 'Skip hire in Blackpool and the Fylde Coast. Same-day delivery available. All sizes. Licensed disposal. Call 01253 963109 for an instant quote.',
};

const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';

const sizes = [
  { size: 'Mini Skip', yards: '2 cubic yards', ideal: 'Small garden clearance, a few bags of soil, one room worth of waste', note: 'Fits in a standard driveway' },
  { size: 'Midi Skip', yards: '4 cubic yards', ideal: 'Kitchen or bathroom renovation, medium garden clearance, flat clearance', note: 'Most popular for domestic jobs' },
  { size: 'Builder\'s Skip', yards: '6–8 cubic yards', ideal: 'Large renovation, full house clearance, builder\'s rubble, mixed loads', note: 'Trade favourite' },
  { size: 'Large Skip', yards: '10–12 cubic yards', ideal: 'Commercial clearances, demolition waste, large construction projects', note: 'Ideal for contractors' },
];

export default function SkipHirePage() {
  return (
    <>
      <section style={{ background: dark, padding: '3.5rem 0', borderBottom: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: orange }}>Skip Hire</p>
          <h1 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.05 }}>
            Skip hire in Blackpool.<br /><span style={{ color: orange }}>Same-day delivery. No hassle.</span>
          </h1>
          <p className="text-lg max-w-xl mb-6" style={{ color: '#C8C8C8' }}>
            Call before noon and we&apos;ll have a skip with you the same afternoon. All sizes, all waste types, fully licensed disposal. No permit drama — we advise on road placement.
          </p>
          <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded text-base transition-colors" style={{ background: orange, color: dark }}>
            <Phone size={16} /> Call for an instant quote
          </a>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Skip sizes</p>
          <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: '#fff' }}>Which skip do I need?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sizes.map((s, i) => (
              <div key={s.size} className="rounded p-5" style={{ background: i % 2 === 0 ? mid : dark, border: `1px solid ${borderD}` }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{s.size}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(246,165,0,0.12)', color: orange }}>{s.yards}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: '#C8C8C8' }}><strong style={{ color: '#fff' }}>Ideal for:</strong> {s.ideal}</p>
                <p className="text-xs" style={{ color: '#888' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>What we accept in skips</p>
            <h2 className="font-bold mb-5" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>Most waste types welcome</h2>
            <div className="space-y-2">
              {['Household & general rubbish','Builders rubble & concrete','Garden & green waste','Timber & wood','Furniture & bulky items','Plasterboard (mixed loads)','Soil & hardcore','Commercial & office waste'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#C8C8C8' }}>
                  <CheckCircle size={13} color={orange} />{item}
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: '#888' }}>Hazardous waste, asbestos and clinical waste cannot be placed in skips. Call us to discuss specialist removal.</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Why choose us</p>
            <h2 className="font-bold mb-5" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>14 years of skip hire in Blackpool</h2>
            {[
              { icon: Clock, title: 'Same-day delivery', desc: 'Call before noon, skip delivered same afternoon to most Fylde postcodes.' },
              { icon: CheckCircle, title: 'Licensed & compliant', desc: 'Waste Carrier CBDU77935. All waste legally processed at our licensed facility.' },
              { icon: Phone, title: 'One call does it all', desc: 'Quote, delivery, collection and disposal — we handle the whole job.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center shrink-0" style={{ background: 'rgba(246,165,0,0.12)', border: `1px solid ${orange}33` }}>
                  <Icon size={16} color={orange} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ color: '#fff' }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#C8C8C8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: orange, padding: '3rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: dark }}>Get your skip quote now</h2>
          <p className="mb-6 text-sm" style={{ color: '#333' }}>We give firm quotes over the phone — no waiting, no back-and-forth. Call us or use the contact form.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded text-sm" style={{ background: dark, color: '#fff' }}>
              <Phone size={16} /> Call 01253 963109
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded text-sm transition-colors" style={{ background: '#D48C00', color: '#fff' }}>
              Request a quote online <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
