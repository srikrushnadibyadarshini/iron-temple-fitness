import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa'
import styles from './Navbar.module.css'
const links = [
{ to: '/', label: 'Home' },
{ to: '/about', label: 'About' },
{ to: '/programs', label: 'Programs' },
{ to: '/trainers', label: 'Trainers' },
{ to: '/membership', label: 'Membership' },
{ to: '/gallery', label: 'Gallery' },
{ to: '/contact', label: 'Contact' },
]
export default function Navbar() {
const [scrolled, setScrolled] = useState(false)
const [open, setOpen] = useState(false)
useEffect(() => {
const fn = () => setScrolled(window.scrollY > 40)
window.addEventListener('scroll', fn)
return () => window.removeEventListener('scroll', fn)
}, [])
useEffect(() => {
document.body.style.overflow = open ? 'hidden' : ''
return () => { document.body.style.overflow = '' }
}, [open])
return (
<header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
<div className={`container ${styles.inner}`}>
<Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
<FaDumbbell className={styles.logoIcon} />
<span>IRON <em>TEMPLE</em></span>
</Link>
<nav className={styles.links}>
{links.map(l => (
<NavLink key={l.to} to={l.to} end={l.to === '/'}
className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
{l.label}
</NavLink>
))}
</nav>
<Link to="/membership" className="btn-primary" style={{ padding: '12px 24px', fontSize: '13px' }}>
Join Now
</Link>
<button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
{open ? <FaTimes /> : <FaBars />}
</button>
</div>
<AnimatePresence>
{open && (
<motion.div className={styles.mobile}
initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}>
<nav className={styles.mobileLinks}>
{links.map((l, i) => (
<motion.div key={l.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{
delay: i * 0.06 }}>
<NavLink to={l.to} end={l.to === '/'}
className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`}
onClick={() => setOpen(false)}>{l.label}</NavLink>
</motion.div>
))}
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
style={{marginTop:'24px'}}>
<Link to="/membership" className="btn-primary" onClick={() => setOpen(false)}>
Start Your Journey
</Link>
</motion.div>
</nav>
</motion.div>
)}
</AnimatePresence>
</header>
)
}