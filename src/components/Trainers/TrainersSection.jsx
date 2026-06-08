import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaStar, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { trainers } from '../../data/index'
import styles from './TrainersSection.module.css'
export default function TrainersSection({ limit }) {
const data = limit ? trainers.slice(0, limit) : trainers
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Meet The Team</span>
<h2 className="section-title">WORLD-CLASS <span className="red-text">COACHES</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Our certified experts bring decades of combined experience,
professional competition credentials, and an unwavering commitment to your success.</p>
</motion.div>
<div className={styles.grid}>
{data.map((t, i) => (
<motion.div key={t.id} className={styles.card}
initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.1 }}
whileHover={{ y: -8 }}>
<div className={styles.imgWrap}>
<img src={t.img} alt={t.name} loading="lazy" />
<div className={styles.imgOverlay}>
<div className={styles.socials}>
<a href="#" aria-label="Instagram"><FaInstagram /></a>
<a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
</div>
</div>
<div className={styles.expBadge}>{t.exp}</div>
</div>
<div className={styles.info}>
<div className={styles.infoTop}>
<div>
<h3 className={styles.name}>{t.name}</h3>
<p className={styles.role}>{t.role}</p>
</div>
<div className={styles.rating}>
<FaStar />
<span>{t.rating}</span>
</div>
</div>
<div className={styles.certs}>
{t.certs.map(c => <span key={c} className={styles.cert}>{c}</span>)}
</div>
<p className={styles.bio}>{t.bio}</p>
<div className={styles.clients}>
<span className={styles.clientNum}>{t.clients}+</span>
<span className={styles.clientLabel}>clients transformed</span>
</div>
</div>
</motion.div>
))}
</div>
{limit && (
<motion.div className={styles.cta}
initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
<Link to="/trainers" className="btn-outline">Meet All Trainers</Link>
</motion.div>
)}
</div>
</section>
)
}