import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/index'
import styles from './Stats.module.css'
function Counter({ value, suffix }) {
const [count, setCount] = useState(0)
const ref = useRef(null)
const inView = useInView(ref, { once: true })
useEffect(() => {
if (!inView) return
const duration = 2000
const start = Date.now()
const tick = () => {
const elapsed = Date.now() - start
const progress = Math.min(elapsed / duration, 1)
const ease = 1 - Math.pow(1 - progress, 3)
setCount(Math.floor(ease * value))
if (progress < 1) requestAnimationFrame(tick)
}
requestAnimationFrame(tick)
}, [inView, value])
return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}
export default function Stats() {
return (
<section className={styles.section}>
<div className="container">
<div className={styles.grid}>
{stats.map((s, i) => (
<motion.div key={s.label} className={styles.stat}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
<div className={styles.value}>
<Counter value={s.value} suffix={s.suffix} />
</div>
<div className={styles.label}>{s.label}</div>
</motion.div>
))}
</div>
</div>
</section>
)
}