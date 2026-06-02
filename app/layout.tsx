import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Link from 'next/link';
import { Phone, Mail, Shield, Award } from 'lucide-react';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joblogisticsltd.co.uk'),
  title: {
    default: 'Waste Removal, Skip Hire & Landscape Supplies Blackpool | Job Logistics',
    template: '%s | Job Logistics Ltd',
  },
  description:
    "Job Logistics Ltd — Blackpool's award-winning waste removal, recycling centre, skip hire and landscape supplies. 14+ years. Licensed. Call 01253 963109.",
  openGraph: { siteName: 'Job Logistics Ltd', locale: 'en_GB', type: 'website' },
};

const footerServices = [
  { href: '/drop-off', label: 'Recycling Centre Drop-Off' },
  { href: '/skip-hire', label: 'Skip Hire' },
  { href: '/trade-waste', label: 'Trade & Commercial Waste' },
  { href: '/landscape-supplies', label: 'Landscape Supplies' },
  { href: '/contact', label: 'Contact & Book' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ background: '#1A1A1A', color: '#FFFFFF', fontFamily: 'var(--font-barlow), system-ui, sans-serif' }}>
        <Header />
        <main className="flex-1">{children}</main>

        <footer style={{ background: '#252525', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ background: '#F6A500' }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {['Best Junk Removal Blackpool 2024 — Quality Business Awards', 'Local Labour & Trade Award 2025 Winner', '2026 Coastal Local Business Awards Finalist'].map(award => (
                <div key={award} className="flex items-center gap-2 text-xs font-bold" style={{ color: '#1A1A1A' }}>
                  <Award size={12} />{award}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#F6A500', fontFamily: 'var(--font-barlow-condensed)' }}>Job Logistics Ltd</h3>
              <address className="not-italic space-y-2 text-sm" style={{ color: '#C8C8C8' }}>
                <p>Unit 1, Dickies Lane South<br />Blackpool, Lancashire, FY4 5LG</p>
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: '#F6A500' }} />
                  <a href="tel:01253963109" className="hover:text-white transition-colors">01253 963109</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: '#F6A500' }} />
                  <a href="mailto:joblogisticsltd@gmail.com" className="hover:text-white transition-colors" style={{ fontSize: '0.8rem' }}>joblogisticsltd@gmail.com</a>
                </div>
              </address>
              <div className="mt-4 space-y-1">
                {['Waste Carrier Licence: CBDU77935', 'Safe Trader Member', 'Company No. 08012575'].map(cred => (
                  <div key={cred} className="flex items-center gap-2 text-xs" style={{ color: '#888' }}>
                    <Shield size={11} style={{ color: '#F6A500' }} />{cred}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#F6A500', fontFamily: 'var(--font-barlow-condensed)' }}>Our Services</h3>
              <ul className="space-y-2">
                {footerServices.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: '#C8C8C8' }}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#F6A500', fontFamily: 'var(--font-barlow-condensed)' }}>Domestic Collection Service</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#C8C8C8' }}>
                Need us to come to your home and collect your waste? Our domestic collection service covers Blackpool and the Fylde Coast.
              </p>
              <a href="https://blackpoolrecycling.uk" target="_blank" rel="noopener noreferrer"
                className="inline-block font-bold px-4 py-2 rounded text-sm transition-colors hover:text-white"
                style={{ background: '#343434', color: '#C8C8C8', border: '1px solid rgba(255,255,255,0.08)' }}>
                Blackpool Recycling — Book Collection →
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#888' }}>
              <p>© 2026 Job Logistics Ltd · Company No. 08012575 · VAT GB286668834</p>
              <p>Registered in England &amp; Wales · Licensed Waste Carrier CBDU77935</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
