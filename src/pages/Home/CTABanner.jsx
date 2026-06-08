import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import styles from './CTABanner.module.css'
export default function CTABanner() {
return (
<section className={styles.section}>
<div className={styles.bg}>
<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=600&fit=crop"
alt="Train hard" loading="lazy" />
<div className={styles.overlay} />
</div>
<div className="container">
<motion.div className={styles.content}
initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Limited Time Offer</span>
<h2 className={styles.title}>START YOUR <span>FREE</span> 3-DAY TRIAL</h2>
<p>No commitment. No credit card. Just results. Experience Iron Temple risk-free.</p>
<div className={styles.actions}>
<Link to="/membership" className="btn-primary">Claim Free Trial <FaArrowRight /></Link>
<Link to="/contact" className="btn-outline">Talk to a Coach</Link>
</div>
</motion.div>
</div>
</section>
)
}