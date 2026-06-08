import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck, FaTimes, FaArrowRight, FaCrown } from 'react-icons/fa'
import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader'
import FAQ from '../../components/FAQ/FAQ'
import { plans } from '../../data/index'
import styles from './Membership.module.css'
export default function Membership() {
return (
<PageTransition>
<PageHeader
tag="Pricing Plans" title="CHOOSE YOUR" highlight="PATH"
subtitle="No contracts. No hidden fees. Cancel anytime. Pick the plan that matches your ambition."
img="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=600&fit=crop"
>
<section className={`section-pad ${styles.plans}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Membership Options</span>
<h2 className="section-title">INVEST IN <span className="gold-text">YOURSELF</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Every plan includes full access to our 50,000 sq ft facility, locker
rooms, and member app. Upgrade anytime.</p>
</motion.div>
<div className={styles.grid}>
{plans.map((p, i) => (
<motion.div key={p.id}
className={`${styles.card} ${p.color === 'red' ? styles.cardRed : ''} ${p.color === 'gold' ? styles.cardGold : ''}`}
initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
{p.tag && (
<div className={styles.badge}>
<FaCrown style={{ fontSize: '10px' }} /> {p.tag}
</div>
)}
<div className={styles.planName}>{p.name}</div>
<div className={styles.price}>
<span className={styles.dollar}>$</span>
<span className={styles.amount}>{p.price}</span>
<span className={styles.per}>/{p.period}</span>
</div>
<div className={styles.divider} />
<ul className={styles.features}>
{p.features.map(f => (
<li key={f} className={styles.feature}>
<FaCheck className={styles.check} /> {f}
</li>
))}
{p.notIncluded.map(f => (
<li key={f} className={`${styles.feature} ${styles.featureNo}`}>
<FaTimes className={styles.cross} /> {f}
</li>
))}
</ul>
<Link to="/contact" className={`${styles.planBtn} ${p.color === 'red' ? styles.planBtnRed : p.color
=== 'gold' ? styles.planBtnGold : styles.planBtnDefault}`}>
Get Started <FaArrowRight style={{ fontSize: '12px' }} />
</Link>
<p className={styles.noContract}>No contract · Cancel anytime</p>
</motion.div>
))}
</div>
<motion.div className={styles.perks}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

</motion.div>
{['Free 3-Day Trial', 'No Joining Fee This Month', 'Freeze Membership Anytime', 'Family Discounts Available'].map(p => (
<div key={p} className={styles.perk}>
<FaCheck className={styles.perkCheck} /> {p}
</div>
))}
</div>
</section>
<section className={`section-pad ${styles.compare}`}>
<div className="container">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true
}}>
<span className="tag">Full Comparison</span>
<h2 className="section-title">PLAN <span className="red-text">DETAILS</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.tableWrap}>
<table className={styles.table}>
<thead>
<tr>
<th>Feature</th>
<th>IRON <span>$49/mo</span></th>
<th className={styles.thHighlight}>ELITE <span>$99/mo</span></th>
<th>TEMPLE <span>$199/mo</span></th>
</tr>
</thead>
<tbody>
{[
['Gym Floor Access', true, true, true], 
['Group Classes', false, true, true],
['Recovery Suite', false, true, true],
['Personal Training', false, false, '4 sessions/mo'],
['Nutrition Coaching', false, 'Consultation', 'Full Plan'],
['24/7 Access', false, false, true],
['Guest Passes', '2/mo', '4/mo', 'Unlimited'],
['App Access', 'Basic', 'Full', 'Full + Coach'],
['Body Composition', false, false, true],
['VIP Lounge', false, false, true],
].map(([feat, iron, elite, temple]) => (
<tr key={feat}>
<td className={styles.featName}>{feat}</td>
{[iron, elite, temple].map((v, i) => (
<td key={i} className={i === 1 ? styles.tdHighlight : ''}>
{v === true ? <FaCheck className={styles.yes} /> :
v === false ? <FaTimes className={styles.no} /> :
<span className={styles.val}>{v}</span>}
</td>
))}
</tr>
))}
</tbody>
</table>
</div>
</div>
</section>
<FAQ />
</PageHeader>
</PageTransition>
)
}