import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recycling Centre Drop-Off Blackpool | Weight-Based | Job Logistics',
  description: 'Drive-in waste drop-off at our Blackpool recycling centre. All waste types accepted. Weight-based pricing from £72. Open Mon–Sat 9am–4pm. FY4 5LG.',
};

const accepted = ['Household & general waste','Garden & green waste','Builders rubble & hardcore','Timber & wood','Furniture & bulky items','Electrical & WEEE','Plasterboard (specialist)','Soil & aggregate','Trade & commercial waste','Landlord clearances'];
const notAccepted = ['Hazardous chemicals & solvents','Asbestos','Clinical & medical waste','Radioactive materials'];

const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';

export default function DropOffPage() {
  return (
    <>
      <section style={{ background: dark, padding: '3.5rem 0', borderBottom: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: orange }}>Recycling Centre</p>
          <h1 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.05 }}>
            Drive in, drop off, done.
          </h1>
          <p className="text-lg max-w-xl mb-6" style={{ color: '#C8C8C8' }}>
            No booking needed. Pull up at our yard, get weighed in and out, pay for the exact weight you leave. We accept household, trade, builders and commercial waste — unlike the council tip.
          </p>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#C8C8C8' }}>
            <div className="flex items-center gap-2"><Clock size={15} color={orange} />Mon–Sat 9:00am – 4:00pm</div>
            <div className="flex items-center gap-2"><MapPin size={15} color={orange} />Unit 1, Dickies Lane South, Blackpool FY4 5LG</div>
            <div className="flex items-center gap-2"><Phone size={15} color={orange} /><a href="tel:01253963109" style={{ color: '#C8C8C8' }} className="hover:text-white">01253 963109</a></div>
          </div>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>What we accept</h2>
            <div className="space-y-2">
              {accepted.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#C8C8C8' }}>
                  <CheckCircle size={14} color={orange} />{item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>What we cannot accept</h2>
            <div className="space-y-2 mb-8">
              {notAccepted.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#C8C8C8' }}>
                  <X size={14} color="#ef4444" />{item}
                </div>
              ))}
            </div>
            <h2 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>Pricing</h2>
            <div className="rounded overflow-hidden" style={{ border: `1px solid ${borderD}` }}>
              <div className="px-4 py-2" style={{ background: orange }}>
                <p className="text-xs font-bold" style={{ color: dark }}>All prices include VAT</p>
              </div>
              {[['15-min / single items','£72'],['¼ load','£120'],['½ load','£180'],['¾ load','£230'],['Full load','£325'],['Green waste (separate)','£180'],['Timber (separate)','£220'],['Plasterboard','£295'],['Hardcore (per tonne)','From £120']].map(([label,price],i) => (
                <div key={label} className="grid grid-cols-2 px-4 py-3" style={{ background: i % 2 === 0 ? mid : dark, borderTop: `1px solid ${borderD}` }}>
                  <span className="text-sm" style={{ color: '#C8C8C8' }}>{label}</span>
                  <span className="text-sm font-bold text-right" style={{ color: '#fff' }}>{price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: '#888' }}>Prices based on exact weighbridge reading. Final cost confirmed before payment.</p>
          </div>
        </div>
      </section>

      <section style={{ background: mid, padding: '3rem 0', borderTop: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.8rem', color: '#fff' }}>Getting here</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded overflow-hidden" style={{ border: `1px solid ${borderD}`, aspectRatio: '4/3' }}>
              <iframe title="Job Logistics recycling centre" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.25!2d-3.0209!3d53.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b41c2ea3a1d51%3A0x9d0e0e3b8a5c2b0!2sDickies%20Lane%20South%2C%20Blackpool%20FY4%205LG!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="space-y-3 text-sm" style={{ color: '#C8C8C8' }}>
              <p><strong style={{ color: '#fff' }}>Address:</strong> Unit 1, Dickies Lane South, Blackpool, Lancashire, FY4 5LG</p>
              <p><strong style={{ color: '#fff' }}>From M55:</strong> Leave at Junction 4. Head towards Blackpool on the A5230, follow signs for Squires Gate Lane industrial area.</p>
              <p><strong style={{ color: '#fff' }}>Sat nav:</strong> <span className="font-mono font-bold" style={{ color: '#fff' }}>FY4 5LG</span></p>
              <p><strong style={{ color: '#fff' }}>Parking:</strong> Drive-in site — space for vans, trailers, HGVs.</p>
              <p><strong style={{ color: '#fff' }}>Hours:</strong> Monday to Saturday, 9:00am to 4:00pm. Closed Sundays.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: orange, padding: '3rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '2rem', color: dark }}>Need us to come and collect instead?</h2>
          <p className="mb-6 text-sm" style={{ color: '#333' }}>No van? No problem. Our domestic collection service covers Blackpool and the Fylde — we come to your property and take it all away.</p>
          <a href="https://blackpoolrecycling.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded transition-colors text-sm" style={{ background: dark, color: '#fff' }}>
            Blackpool Recycling — Collection Service <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
