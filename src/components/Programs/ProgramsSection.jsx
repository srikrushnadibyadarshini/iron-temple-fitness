import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaDumbbell, FaFire, FaBolt, FaLeaf, FaYinYang, FaUsers, FaClock, FaFireAlt, FaChartBar } from
'react-icons/fa'
import { programs } from '../../data/index'
import styles from './ProgramsSection.module.css'
const iconMap = { FaDumbbell: FaDumbbell, FaFire: FaFire, FaBolt: FaBolt, FaLeaf: FaLeaf, FaYinYang:
FaYinYang, FaUsers: FaUsers }
export default function ProgramsSection({ limit }) {
const data = limit ? programs.slice(0, limit) : programs
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Training Programs</span>
<h2 className="section-title">BUILT FOR <span className="gold-text">RESULTS</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Every program is meticulously designed by certified experts to deliver
measurable results, regardless of your starting point.</p>
</motion.div>
<div className={styles.grid}>
{data.map((p, i) => {
const Icon = iconMap[p.icon] || FaDumbbell
return (
<motion.div key={p.id} className={`${styles.card} ${styles[p.color]}`}
initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.08 }}
whileHover={{ y: -6 }}>
<div className={styles.cardInner}>
<div className={styles.cardTop}>
<div className={styles.iconWrap}><Icon /></div>
<span className={styles.cardTag}>{p.tag}</span>
</div>
<h3 className={styles.cardTitle}>{p.title}</h3>
<p className={styles.cardDesc}>{p.desc}</p>
<div className={styles.meta}>
<div className={styles.metaItem}><FaClock /><span>{p.duration}</span></div>
<div className={styles.metaItem}><FaFireAlt /><span>{p.calories} cal</span></div>
<div className={styles.metaItem}><FaChartBar /><span>{p.level}</span></div>
</div>
<Link to="/programs" className={styles.cardBtn}>View Program</Link>
</div>
</motion.div>
)
})}
</div>
{limit && (
<motion.div className={styles.cta}
initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
<Link to="/programs" className="btn-outline">View All Programs</Link>
</motion.div>
)}
</div>
</section>
)
}