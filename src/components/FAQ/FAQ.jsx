import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { faqs } from '../../data/index'
import styles from './FAQ.module.css'
export default function FAQ() {
const [open, setOpen] = useState(0)
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<div className={styles.layout}>
<motion.div className={styles.left}
initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<span className="tag">Got Questions?</span>
<h2 className="section-title">FREQUENTLY <span className="red-text">ASKED</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Everything you need to know before joining Iron Temple. Can't find
your answer? Reach out directly.</p>
<div className={styles.contact}>
<p>Still have questions?</p>
<a href="mailto:info@irontemple.com" className={styles.contactLink}>info@irontemple.com</a>
</div>
</motion.div>
<motion.div className={styles.right}
initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
{faqs.map((f, i) => (
<div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
<button className={styles.question} onClick={() => setOpen(open === i ? -1 : i)}>
<span>{f.q}</span>
<span className={styles.icon}>{open === i ? <FaMinus /> : <FaPlus />}</span>
</button>
<AnimatePresence>
{open === i && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}>
<p className={styles.answer}>{f.a}</p>
</motion.div>
)}
</AnimatePresence>
</div>
))}
</motion.div>
</div>
</div>
</section>
)
}