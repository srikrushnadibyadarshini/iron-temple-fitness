import { motion } from 'framer-motion'
import styles from './PageHeader.module.css'
export default function PageHeader({ tag, title, highlight, subtitle, img }) {
return (
<section className={styles.header}>
<div className={styles.bg}>
<img src={img} alt={title} loading="eager" />
<div className={styles.overlay} />
</div>
<div className="container">
<motion.div className={styles.content}
initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
{tag && <span className="tag">{tag}</span>}
<h1 className={styles.title}>
{title} {highlight && <span className={styles.highlight}>{highlight}</span>}
</h1>
<div className="gold-line" />
{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
</motion.div>
</div>
</section>
)
}