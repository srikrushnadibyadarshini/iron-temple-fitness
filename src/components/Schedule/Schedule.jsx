import { useState } from 'react'
import { motion } from 'framer-motion'
import { schedule } from '../../data/index'
import styles from './Schedule.module.css'
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const dayLabels = { mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday',
sat: 'Saturday', sun: 'Sunday' }
const classColors = {
'HIIT': styles.hiit, 'Strength': styles.strength, 'Yoga': styles.yoga,
'Combat': styles.combat, 'Mobility': styles.mobility, 'Athletic': styles.athletic, 'Open': styles.open
}
function getColor(cls) {
if (!cls) return ''
for (const [key, val] of Object.entries(classColors)) {
if (cls.includes(key)) return val
}
return styles.default
}
export default function Schedule() {
const [activeDay, setActiveDay] = useState(null)
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Weekly Schedule</span>
<h2 className="section-title">CLASS <span className="gold-text">SCHEDULE</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Plan your week with our full class timetable. All classes are included
in Elite and Temple memberships.</p>
</motion.div>
<div className={styles.legend}>
{[['HIIT', styles.hiit], ['Strength', styles.strength], ['Yoga / Mobility', styles.yoga], ['Combat',
styles.combat], ['Athletic Perf.', styles.athletic]].map(([l, c]) => (
<div key={l} className={styles.legendItem}><span className={`${styles.legendDot} ${c}`} />{l}</div>
))}
</div>
<div className={styles.tableWrap}>
<table className={styles.table}>
<thead>
<tr>
<th>Time</th>
{days.map(d => (
<th key={d} className={activeDay === d ? styles.thActive : ''} onClick={() => setActiveDay(activeDay
=== d ? null : d)}>
<span className={styles.dayFull}>{dayLabels[d]}</span>
<span className={styles.dayShort}>{d.charAt(0).toUpperCase() + d.slice(1, 3)}</span>
</th>
))}
</tr>
</thead>
<tbody>
{schedule.map((row, i) => (
<motion.tr key={row.time}
initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
<td className={styles.time}>{row.time}</td>
{days.map(d => (
<td key={d} className={`${activeDay === d ? styles.tdActive : ''}`}>
{row[d] && (
<span className={`${styles.classChip} ${getColor(row[d])}`}>{row[d]}</span>
)}
</td>
))}
</motion.tr>
))}
</tbody>
</table>
</div>
<p className={styles.note}>* Schedule subject to change on holidays. Check the app for live
updates.</p>
</div>
</section>
)
}