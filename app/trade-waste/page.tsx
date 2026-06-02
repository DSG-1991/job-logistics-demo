import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, Phone, Truck, Building, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trade & Commercial Waste Blackpool | Builders, Contractors | Job Logistics',
  description: 'Trade and commercial waste disposal in Blackpool. Builders, contractors, landlords, offices. Licensed carrier. Large volumes accepted. Drop-off or collection. Call 01253 963109.',
};

const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';

const audiences = [
  { icon: Truck, label: 'Builders & Contractors', points: ['Builders rubble, brickwork, concrete','Plasterboard and insulation materials','Timber and structural materials','Mixed site waste — all loads accepted','Drop-off at our yard or we collect on site'] },
  { icon: Building, label: 'Landlords & Property Managers', points: ['Void property clearances','Tenant end-of-tenancy waste','Appliances and furniture removal','Garden and outdoor clearances','Scheduled or one-off collections'] },
  { icon: Building, label: 'Commercial & Office Waste', points: ['Office clearances and fit-out waste','Retail and hospitality waste','Cardboard, packaging and general waste','Regular scheduled collection contracts','Confidential waste — call for details'] },
];

const councilTipGap = ['Commercial & trade waste','Builders rubble (large loads)','Landlord clearance waste','Waste from outside Blackpool','Asbestos and hazardous materials'];
const weAccept = ['All trade & commercial waste types','Large contractor volumes — all accepted','Landlord and void property clearances','Businesses across Blackpool & Fylde','Repeat contracts and regular collections'];

export default function TradeWastePage() {
  return (
    <>
      <section style={{ background: dark, padding: '3.5rem 0', borderBottom: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: orange }}>Trade & Commercial</p>
          <h1 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.05 }}>
            The council tip won&apos;t take your trade waste.<br /><span style={{ color: orange }}>We will.</span>
          </h1>
          <p className="text-lg max-w-xl mb-6" style={{ color: '#C8C8C8' }}>
            Builders, contractors, landlords and commercial businesses — we accept all trade and commercial volumes that the council HWRC turns away. Licensed, compliant, efficient.
          </p>
          <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded text-base" style={{ background: orange, color: dark }}>
            <Phone size={16} /> Discuss your requirements
          </a>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: '#fff' }}>Who we serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audiences.map(({ icon: Icon, label, points }) => (
              <div key={label} className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
                <div className="w-10 h-10 rounded flex items-center justify-center mb-3" style={{ background: orange }}>
                  <Icon size={20} color={dark} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{label}</h3>
                <ul className="space-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#C8C8C8' }}>
                      <CheckCircle size={12} color={orange} className="mt-0.5 shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold mb-3 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: '#fff' }}>We accept what the council won&apos;t</h2>
          <p className="text-center mb-8 text-sm max-w-lg mx-auto" style={{ color: '#C8C8C8' }}>Blackpool&apos;s HWRC on Bristol Avenue is for council taxpayers with domestic waste only. We&apos;re open to everyone — no restrictions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#888' }}>Council HWRC — won&apos;t take</p>
              {councilTipGap.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm mb-1.5" style={{ color: '#C8C8C8' }}>
                  <X size={13} color="#ef4444" />{item}
                </div>
              ))}
            </div>
            <div className="rounded p-5" style={{ background: 'rgba(246,165,0,0.06)', border: `1px solid rgba(246,165,0,0.25)` }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: orange }}>Job Logistics — we accept</p>
              {weAccept.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm mb-1.5" style={{ color: '#fff' }}>
                  <CheckCircle size={13} color={orange} />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>Drop-off or collection?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>Drop-off at our yard</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#C8C8C8' }}>Drive to Unit 1 Dickies Lane South, Blackpool FY4 5LG. No booking for most loads. Get weighed in and out — pay the exact weight at the weighbridge. Ideal if you have a van or tipper.</p>
              <Link href="/drop-off" className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: orange }}>
                Drop-off details &amp; pricing <ArrowRight size={13} />
              </Link>
            </div>
            <div className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>We come to your site</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#C8C8C8' }}>We can collect trade waste directly from your property, building site or commercial premises. Same-day and next-day available. Call us to discuss your schedule and volume.</p>
              <a href="tel:01253963109" className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: orange }}>
                Call to arrange <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: orange, padding: '3rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: dark }}>Talk to us about your trade waste</h2>
          <p className="mb-6 text-sm" style={{ color: '#333' }}>Regular contracts, large volumes, same-day clearances — we&apos;ll find the right solution and price it fairly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded text-sm" style={{ background: dark, color: '#fff' }}>
              <Phone size={16} /> 01253 963109
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded text-sm" style={{ background: '#D48C00', color: '#fff' }}>
              Request a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
