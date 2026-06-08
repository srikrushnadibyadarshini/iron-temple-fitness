import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaYoutube, FaCheck }
from 'react-icons/fa'
import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader'
import styles from './Contact.module.css'
const contactInfo = [
{ icon: FaMapMarkerAlt, label: 'Address', value: '123 Iron District, Fitness Quarter, New York, NY 10001' },
{ icon: FaPhone, label: 'Phone', value: '+1 (555) 426-7483' },
{ icon: FaEnvelope, label: 'Email', value: 'info@irontemple.com' },
{ icon: FaClock, label: 'Hours', value: 'Mon–Fri: 5AM–11PM | Sat–Sun: 6AM–9PM' },
]
export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
const [sent, setSent] = useState(false)
const [loading, setLoading] = useState(false)
const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
const submit = (e) => {
e.preventDefault()
setLoading(true)
setTimeout(() => { setLoading(false); setSent(true) }, 1500)
}
return (
<PageTransition>
<PageHeader
tag="Get In Touch"
title="CONTACT"
highlight="US"
subtitle="Ready to start? Have questions? Our team is standing by to help you begin your
transformation."
img="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1920&h=600&fit=crop"
/>
<section className={`section-pad ${styles.section}`}>
<div className="container">
<div className={styles.layout}>
<motion.div className={styles.left}
initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<span className="tag">Reach Out</span>
<h2 className="section-title">LET'S <span className="gold-text">TALK</span></h2>
<div className="gold-line" />
<p className={styles.intro}>Whether you're ready to join, want to tour the facility, or just have
questions — we'd love to hear from you.</p>
<div className={styles.infoList}>
{contactInfo.map(c => {
const Icon = c.icon
return (
<div key={c.label} className={styles.infoItem}>
<div className={styles.infoIcon}><Icon /></div>
<div>
<div className={styles.infoLabel}>{c.label}</div>
<div className={styles.infoVal}>{c.value}</div>
</div>
</div>
)
})}
</div>
<div className={styles.socials}>
<p>Follow our journey</p>
<div className={styles.socialIcons}>
{[FaInstagram, FaFacebook, FaYoutube].map((Icon, i) => (
<a key={i} href="#" className={styles.socialIcon}><Icon /></a>
))}
</div>
</div>
</motion.div>
<motion.div className={styles.right}
initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
{sent ? (
<motion.div className={styles.success}
initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
<div className={styles.successIcon}><FaCheck /></div>
<h3>Message Sent!</h3>
<p>Thanks for reaching out. A coach will contact you within 24 hours.</p>
<button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
</motion.div>
) : (
<form className={styles.form} onSubmit={submit}>
<h3 className={styles.formTitle}>Send a Message</h3>
<div className={styles.row}>
<div className={styles.field}>
<label>Full Name *</label>
<input type="text" required placeholder="John Steel" value={form.name} onChange={e => set('name',
e.target.value)} />
</div>
<div className={styles.field}>
<label>Email Address *</label>
<input type="email" required placeholder="john@example.com" value={form.email} onChange={e =>
set('email', e.target.value)} />
</div>
</div>
<div className={styles.row}>
<div className={styles.field}>
<label>Phone Number</label>
<input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => set('phone',
e.target.value)} />
</div>
<div className={styles.field}>
<label>I'm Interested In</label>
<select value={form.interest} onChange={e => set('interest', e.target.value)}>
<option value="">Select an option</option>
<option>Membership Info</option>
<option>Personal Training</option>
<option>Group Classes</option>
<option>Facility Tour</option>
<option>Corporate Memberships</option>
<option>Other</option>
</select>
</div>
</div>
<div className={styles.field}>
<label>Your Message *</label>
<textarea required placeholder="Tell us about your goals..." rows={5} value={form.message} onChange={e => set('message', e.target.value)} />
</div>
<button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
{loading ? 'Sending...' : 'Send Message'}
</button>
</form>
)}
</motion.div>
</div>
</div>
</section>
<section className={styles.map}>
<div className="container">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true
}}>
<span className="tag">Find Us</span>
<h2 className="section-title" style={{ marginBottom: '32px' }}>OUR <span
className="red-text">LOCATION</span></h2>
</motion.div>
<div className={styles.mapWrap}>
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425368459418!3d
40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5
383d5d!2sMeatpacking%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2s
us"
width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
referrerPolicy="no-referrer-when-downgrade" title="Iron Temple Location"
/>
<div className={styles.mapOverlay}>
<div className={styles.mapCard}>
<FaMapMarkerAlt className={styles.mapPin} />
<div>
<strong>Iron Temple Fitness</strong>
<span>123 Iron District, NY 10001</span>
</div>
</div>
</div>
</div>
</div>
</section>
</PageTransition>
)
}