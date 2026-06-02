import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, Award, Shield, Clock, Phone, Truck, Recycle, Package, Leaf, CheckCircle, ChevronRight } from 'lucide-react';
import AnimateIn from '@/app/components/AnimateIn';
import CountUp from '@/app/components/CountUp';
import Accordion from '@/app/components/Accordion';

export const metadata: Metadata = {
  title: 'Waste Removal, Skip Hire & Landscape Supplies Blackpool | Job Logistics',
  description: "Job Logistics Ltd — Blackpool's award-winning waste removal, recycling centre drop-off, skip hire and landscape supplies. 14+ years. Licensed. Call 01253 963109.",
};

const services = [
  { href: '/drop-off', icon: Recycle, label: 'Recycling Centre Drop-Off', desc: 'Drive in, get weighed, pay and go. Weight-based pricing. Open Mon–Sat 9am–4pm.', tag: 'From £72', large: true },
  { href: '/skip-hire', icon: Package, label: 'Skip Hire', desc: 'Same-day delivery across Blackpool and the Fylde. All sizes, all waste types.', tag: 'Get a quote', large: false },
  { href: '/trade-waste', icon: Truck, label: 'Trade & Commercial Waste', desc: 'Builders, contractors, landlords — large volumes, scheduled collections, licensed disposal.', tag: 'Trade pricing', large: false },
  { href: '/landscape-supplies', icon: Leaf, label: 'Landscape Supplies', desc: 'Stone, aggregates, fence panels and turf delivered across Blackpool. From £30.', tag: 'From £30 delivered', large: false },
];

const reviews = [
  { name: 'Mark R.', loc: 'Blackpool', date: 'April 2026', text: 'Used them for a full garage clear. Turned up on time, worked fast, left the place spotless. Brilliant service and very fair pricing.' },
  { name: 'Julie T.', loc: 'Lytham', date: 'February 2026', text: 'Ordered landscape stone and they delivered next day. Exactly what was described. Will be using again for the rest of the garden project.' },
  { name: 'Craig N.', loc: 'Bispham', date: 'March 2026', text: 'Best in Blackpool for rubbish removal. Quick, professional, no messing. Used them three times now and they never let me down.' },
];

const faqs = [
  { q: 'What is the difference between drop-off and collection?', a: 'Drop-off means you drive your waste to our recycling centre (open Mon–Sat 9–4, Unit 1 Dickies Lane South). Collection means we come to your property. For domestic collection, visit blackpoolrecycling.uk. For trade collection, call us on 01253 963109.' },
  { q: 'Do you accept trade and commercial waste at the drop-off centre?', a: 'Yes — unlike the council HWRC, we accept commercial, trade, builder and landlord waste. All volumes welcome. Large contractor loads should call ahead.' },
  { q: 'How quickly can you deliver a skip?', a: 'Same-day delivery is available for most of Blackpool and the Fylde. Call us before noon and we aim to have a skip with you the same afternoon.' },
  { q: 'Can I order landscape supplies online?', a: 'Call us on 01253 963109 or use the contact form to order stone, aggregates, fence panels or turf. Delivery from £30 across Blackpool and Fylde.' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Job Logistics Ltd', url: 'https://www.joblogisticsltd.co.uk', telephone: '+441253963109',
  address: { '@type': 'PostalAddress', streetAddress: 'Unit 1, Dickies Lane South', addressLocality: 'Blackpool', postalCode: 'FY4 5LG', addressCountry: 'GB' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '16:00' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '381' },
};
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function HomePage() {
  const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434';
  const orange = '#F6A500'; const orangeDark = '#D48C00'; const borderD = 'rgba(255,255,255,0.08)';
  const largeBento = '#2E2510'; // warm dark for featured card distinction

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO — animated grid + stagger mount */}
      <section style={{ background: dark, borderBottom: `1px solid ${borderD}`, position: 'relative', overflow: 'hidden' }}>
        {/* Drifting grid overlay — signature element, now visible + animated */}
        <div className="drift-grid" style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'linear-gradient(rgba(246,165,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(246,165,0,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          {/* Badge — slides in from left */}
          <AnimateIn type="slide-left" className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold tracking-widest uppercase" style={{ background: 'rgba(246,165,0,0.12)', border: `1px solid ${orange}44`, color: orange }}>
              <Award size={12} /> Award-winning · 14+ years · Blackpool
            </div>
          </AnimateIn>
          {/* H1 line 1 */}
          <AnimateIn delay={100}>
            <h1 className="font-bold leading-[1.0] tracking-tight mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#FFFFFF' }}>
              Every waste job in Blackpool.
            </h1>
          </AnimateIn>
          {/* H1 line 2 — orange, separate stagger */}
          <AnimateIn delay={200}>
            <h1 className="font-bold leading-[1.0] tracking-tight mb-5" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: orange }}>
              One company. Done properly.
            </h1>
          </AnimateIn>
          <AnimateIn delay={350}>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#C8C8C8' }}>
              Drop your waste off at our recycling centre, hire a skip for tomorrow, get your builder&apos;s rubble cleared, or order landscape stone delivered to your drive.
              <strong style={{ color: '#fff' }}> One call. Everything sorted.</strong>
            </p>
          </AnimateIn>
          <AnimateIn delay={500} className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="pulse-cta-dark inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-base transition-colors duration-200" style={{ background: orange, color: dark }}>
              Get a free quote <ArrowRight size={18} />
            </Link>
            <a href="tel:01253963109" className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded text-base transition-colors duration-200 hover:bg-white/10" style={{ border: `1px solid ${borderD}`, color: '#fff' }}>
              <Phone size={16} /> 01253 963109
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── TRUST BAR — orange band (signature), stagger */}
      <section style={{ background: orange }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { icon: Star, content: <><CountUp target={381} duration={1500} /> Google reviews</> },
            { icon: Award, content: 'Best Junk Removal Blackpool 2024' },
            { icon: Award, content: 'Local Labour & Trade Award 2025' },
            { icon: Shield, content: 'Waste Carrier CBDU77935' },
            { icon: Clock, content: 'Same-day available' },
          ].map(({ icon: Icon, content }, i) => (
            <AnimateIn key={i} delay={i * 80} className="flex items-center gap-2 text-sm font-bold" style={{ color: dark }}>
              <Icon size={14} />{content}
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── SERVICES BENTO GRID — stagger, large card distinct */}
      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <AnimateIn>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Everything we do</p>
            <h2 className="font-bold mb-10" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff' }}>
              Four services. One yard. Blackpool&apos;s most complete waste &amp; supplies operation.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large featured card — warm dark bg + orange left border */}
            <AnimateIn className="lg:col-span-2">
              <Link href={services[0].href} className="card-lift-dark block rounded p-7 h-full" style={{ background: largeBento, borderLeft: `4px solid ${orange}`, border: `1px solid rgba(246,165,0,0.25)`, borderLeftWidth: '4px' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center" style={{ background: orange }}>
                    <Recycle size={28} color={dark} />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(246,165,0,0.15)', color: orange }}>{services[0].tag}</span>
                </div>
                <h3 className="font-bold mb-2 text-2xl" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{services[0].label}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#C8C8C8' }}>{services[0].desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: orange }}>
                  Find out more <ChevronRight size={14} />
                </span>
              </Link>
            </AnimateIn>
            {/* Small cards */}
            {services.slice(1).map((svc, i) => {
              const Icon = svc.icon;
              return (
                <AnimateIn key={svc.href} delay={(i + 1) * 150}>
                  <Link href={svc.href} className="card-lift-dark block rounded p-5 h-full" style={{ background: mid, border: `1px solid ${borderD}` }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: 'rgba(246,165,0,0.12)', border: `1px solid ${orange}33` }}>
                        <Icon size={20} color={orange} />
                      </div>
                      <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(246,165,0,0.1)', color: orange }}>{svc.tag}</span>
                    </div>
                    <h3 className="font-bold mb-1.5 text-base" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>{svc.label}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: '#C8C8C8' }}>{svc.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: orange }}>
                      Learn more <ChevronRight size={12} />
                    </span>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW DROP-OFF WORKS — vertical stepper */}
      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Recycling centre</p>
              <h2 className="font-bold mb-4" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#fff' }}>
                Drive in, drop off.<br />Five minutes and you&apos;re done.
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#C8C8C8' }}>
                No booking. Pull in to our yard on Dickies Lane South, get weighed in and out, pay the exact weight at our counter. Open Monday to Saturday, 9am to 4pm.
              </p>
              <Link href="/drop-off" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded text-sm transition-colors duration-200" style={{ background: orange, color: dark }}>
                Drop-off pricing &amp; details <ArrowRight size={16} />
              </Link>
            </AnimateIn>
            {/* Vertical stepper — replaces 3 mini cards */}
            <div className="space-y-0">
              {[
                { n: '01', title: 'Drive in', desc: 'No booking needed. Pull up at the entrance — our team directs you to the right bay.' },
                { n: '02', title: 'Get weighed', desc: 'Vehicle weighed in and out on our weighbridge. You only pay for what you leave behind.' },
                { n: '03', title: 'Pay & go', desc: 'Pay at the counter — card or cash — and get a digital receipt. Typically under 20 minutes.' },
              ].map(({ n, title, desc }, i) => (
                <AnimateIn key={n} delay={i * 120}>
                  <div className="flex gap-4" style={{ paddingBottom: i < 2 ? '1.5rem' : 0 }}>
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: orange, color: dark, fontFamily: 'var(--font-barlow-condensed)' }}>{n}</div>
                      {i < 2 && <div style={{ width: '2px', flex: 1, background: `${orange}25`, marginTop: '4px' }} />}
                    </div>
                    <div style={{ paddingBottom: i < 2 ? '1rem' : 0 }}>
                      <h3 className="font-bold mb-1" style={{ color: '#fff', fontFamily: 'var(--font-barlow-condensed)', fontSize: '1.1rem' }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING STRIP — stagger + most popular callout */}
      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <AnimateIn>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Pricing</p>
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#fff' }}>
              Transparent pricing. Agreed before we start.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {[
              { label: '15-min / single item', price: '£72', popular: false },
              { label: '¼ load collection', price: '£120', popular: false },
              { label: '½ load collection', price: '£180', popular: true },
              { label: '¾ load collection', price: '£230', popular: false },
              { label: 'Full load', price: '£325', popular: false },
            ].map((row, i) => (
              <AnimateIn key={row.label} delay={i * 80} type={row.popular ? 'scale' : 'fade-up'}>
                <div className="rounded p-4 text-center relative" style={{
                  background: row.popular ? '#2A2A12' : mid,
                  border: row.popular ? `1px solid rgba(246,165,0,0.5)` : `1px solid ${borderD}`,
                }}>
                  {row.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: orange, color: dark }}>
                      Most popular
                    </div>
                  )}
                  <div className="text-2xl font-extrabold mb-1" style={{ color: orange, fontFamily: 'var(--font-barlow-condensed)' }}>{row.price}</div>
                  <div className="text-xs leading-tight" style={{ color: '#C8C8C8' }}>{row.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <p className="text-xs mb-4" style={{ color: '#888' }}>All prices include labour and VAT. Specialist materials priced separately.</p>
            <Link href="/drop-off" className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 hover:opacity-80" style={{ color: orange }}>
              Full pricing at the recycling centre <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS — count-up on scroll */}
      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, target: 14, suffix: '+', label: 'Years serving Blackpool', sub: 'Local, trusted, established' },
              { icon: Star, target: 381, suffix: '', label: 'Five-star Google reviews', sub: '100% recommend on Facebook' },
              { icon: Award, target: 3, suffix: '', label: 'Industry awards won', sub: 'Local and national recognition' },
              { icon: Shield, target: 100, suffix: '%', label: 'Licensed & compliant', sub: 'Safe Trader · CBDU77935' },
            ].map(({ icon: Icon, target, suffix, label, sub }, i) => (
              <AnimateIn key={label} delay={i * 100}>
                <div className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
                  <Icon size={20} color={orange} className="mb-3" />
                  <div className="font-extrabold mb-1" style={{ color: '#fff', fontFamily: 'var(--font-barlow-condensed)', fontSize: '3.2rem', lineHeight: 1 }}>
                    <CountUp target={target} suffix={suffix} duration={1400} />
                  </div>
                  <div className="text-sm font-bold mb-1" style={{ color: '#fff' }}>{label}</div>
                  <div className="text-xs" style={{ color: '#888' }}>{sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS — stagger */}
      <section style={{ background: dark, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <AnimateIn>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: orange }}>Google reviews</p>
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#fff' }}>
              What Blackpool says
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <AnimateIn key={r.name} delay={i * 150}>
                <div className="card-lift-dark h-full rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={13} fill={orange} color={orange} />)}</div>
                  <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#C8C8C8' }}>&ldquo;{r.text}&rdquo;</p>
                  <div className="flex justify-between text-xs" style={{ color: '#888' }}>
                    <span className="font-bold" style={{ color: '#C8C8C8' }}>{r.name}, {r.loc}</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — animated accordion */}
      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4">
          <AnimateIn>
            <h2 className="font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#fff' }}>
              Common questions
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <Accordion items={faqs} />
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA — orange bg, scale-in */}
      <section style={{ background: orange, padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn type="scale">
            <h2 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: dark }}>
              Ready to get it sorted?
            </h2>
            <p className="mb-8 text-base" style={{ color: '#333' }}>
              Call us or request a quote — we respond the same day. No obligation, no hard sell.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded transition-colors duration-200" style={{ background: dark, color: '#fff' }}>
                Get a free quote <ArrowRight size={18} />
              </Link>
              <a href="tel:01253963109" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded transition-colors duration-200" style={{ background: orangeDark, color: '#fff' }}>
                <Phone size={16} /> 01253 963109
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
