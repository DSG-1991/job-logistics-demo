'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const dark = '#1A1A1A'; const mid = '#2D2D2D'; const charcoal = '#343434'; const orange = '#F6A500'; const borderD = 'rgba(255,255,255,0.08)';
const services = ['Recycling centre drop-off enquiry','Skip hire','Trade / commercial waste','Landscape supplies','Rubbish collection / removal','Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <>
      <section style={{ background: dark, padding: '3.5rem 0', borderBottom: `1px solid ${borderD}` }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: orange }}>Contact & Quote</p>
          <h1 className="font-bold mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.05 }}>Get a free quote</h1>
          <p className="text-lg max-w-xl" style={{ color: '#C8C8C8' }}>Call us for a same-day response, or fill in the form and we&apos;ll be back to you within a few hours.</p>
        </div>
      </section>

      <section style={{ background: charcoal, padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded p-8 text-center" style={{ background: mid, border: `1px solid ${borderD}` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(246,165,0,0.12)' }}>
                  <CheckCircle size={28} color={orange} />
                </div>
                <h2 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)', color: '#fff' }}>Message received</h2>
                <p className="text-sm" style={{ color: '#C8C8C8' }}>We aim to respond within a few hours during working hours. For urgent jobs, call us directly on <a href="tel:01253963109" style={{ color: orange, fontWeight: 'bold' }}>01253 963109</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded p-6 space-y-4" style={{ background: mid, border: `1px solid ${borderD}` }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{id:'name',label:'Full name',type:'text',req:true,ph:'Your name'},{id:'company',label:'Company (if applicable)',type:'text',req:false,ph:'Optional'}].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-bold mb-1.5" style={{ color: '#fff' }}>{f.label}{f.req && <span style={{ color: orange }}> *</span>}</label>
                      <input id={f.id} name={f.id} type={f.type} required={f.req} placeholder={f.ph} className="w-full px-4 py-2.5 text-sm rounded" style={{ background: dark, border: `1px solid ${borderD}`, color: '#fff', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{id:'phone',label:'Phone number',type:'tel',req:true,ph:'01253 or 07...'},{id:'email',label:'Email',type:'email',req:false,ph:'Optional'}].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-bold mb-1.5" style={{ color: '#fff' }}>{f.label}{f.req && <span style={{ color: orange }}> *</span>}</label>
                      <input id={f.id} name={f.id} type={f.type} required={f.req} placeholder={f.ph} className="w-full px-4 py-2.5 text-sm rounded" style={{ background: dark, border: `1px solid ${borderD}`, color: '#fff', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold mb-1.5" style={{ color: '#fff' }}>Service needed <span style={{ color: orange }}>*</span></label>
                  <select id="service" name="service" required className="w-full px-4 py-2.5 text-sm rounded" style={{ background: dark, border: `1px solid ${borderD}`, color: '#C8C8C8', outline: 'none' }}>
                    <option value="">Select service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-1.5" style={{ color: '#fff' }}>Details of your job</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us what you need — load size, materials, location, timescale..." className="w-full px-4 py-2.5 text-sm rounded resize-none" style={{ background: dark, border: `1px solid ${borderD}`, color: '#fff', outline: 'none' }} />
                </div>
                <button type="submit" className="w-full font-bold py-3.5 rounded text-base transition-colors" style={{ background: orange, color: dark }}>Send quote request</button>
                <p className="text-xs text-center" style={{ color: '#888' }}>No payment taken here. We respond within a few hours during working hours.</p>
              </form>
            )}
          </div>
          <div className="space-y-4">
            {[
              { icon: Phone, label: 'Phone', content: <a href="tel:01253963109" className="font-bold text-lg hover:text-white transition-colors" style={{ color: orange }}>01253 963109</a>, sub: 'Same-day response for most enquiries' },
              { icon: Mail, label: 'Email', content: <a href="mailto:joblogisticsltd@gmail.com" className="text-sm hover:text-white transition-colors" style={{ color: '#C8C8C8' }}>joblogisticsltd@gmail.com</a>, sub: null },
              { icon: MapPin, label: 'Recycling centre', content: <address className="not-italic text-sm" style={{ color: '#C8C8C8' }}>Unit 1, Dickies Lane South<br />Blackpool, FY4 5LG</address>, sub: null },
              { icon: Clock, label: 'Hours', content: <div className="text-sm" style={{ color: '#C8C8C8' }}>Mon–Sat: 9:00am – 4:00pm<br />Sunday: Closed</div>, sub: 'Drop-off centre hours' },
            ].map(({ icon: Icon, label, content, sub }) => (
              <div key={label} className="rounded p-5" style={{ background: mid, border: `1px solid ${borderD}` }}>
                <div className="flex items-start gap-3">
                  <Icon size={18} color={orange} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>{label}</p>
                    {content}
                    {sub && <p className="text-xs mt-1" style={{ color: '#888' }}>{sub}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
