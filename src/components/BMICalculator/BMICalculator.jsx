import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalculator, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './BMICalculator.module.css'
function getBMICategory(bmi) {
if (bmi < 18.5) return { label: 'Underweight', color: '#4fc3f7', desc: 'A strength-focused program can help you build healthy muscle mass.' }
if (bmi < 25) return { label: 'Healthy Weight', color: '#81c784', desc: 'Great foundation! Our performance programs can take you to the next level.' }
if (bmi < 30) return { label: 'Overweight', color: '#ffb74d', desc: 'Our HIIT and body transformation programs are perfect for your goals.' }
return { label: 'Obese', color: '#e57373', desc: 'We specialize in sustainable transformations. Let\'s start your journey today.' }
}
export default function BMICalculator() {
const [unit, setUnit] = useState('metric')
const [height, setHeight] = useState('')
const [weight, setWeight] = useState('')
const [age, setAge] = useState('')
const [bmi, setBMI] = useState(null)
const calculate = () => {
let h = parseFloat(height), w = parseFloat(weight)
if (!h || !w) return
let result
if (unit === 'metric') {
result = w / ((h / 100) ** 2)
} else {
result = (703 * w) / (h ** 2)
}
setBMI(result.toFixed(1))
}
const category = bmi ? getBMICategory(parseFloat(bmi)) : null
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<div className={styles.layout}>
<motion.div className={styles.left}
initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<span className="tag">Free Tool</span>
<h2 className="section-title">BMI <span className="gold-text">CALCULATOR</span></h2>
<div className="gold-line" />
<p className="section-subtitle">Calculate your Body Mass Index and get a personalized program
recommendation from our expert coaches.</p>
<div className={styles.features}>
{['Instant BMI Result', 'Personalized Recommendation', 'Free Consultation Available'].map(f => (
<div key={f} className={styles.feature}>
<span className={styles.featureDot} />
<span>{f}</span>
</div>
))}
</div>
</motion.div>
<motion.div className={styles.calculator}
initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<div className={styles.calcHeader}>
<FaCalculator className={styles.calcIcon} />
<h3>Your BMI Assessment</h3>
</div>
<div className={styles.unitToggle}>
<button className={unit === 'metric' ? styles.unitActive : ''} onClick={() => { setUnit('metric');
setBMI(null) }}>Metric (cm/kg)</button>
<button className={unit === 'imperial' ? styles.unitActive : ''} onClick={() => { setUnit('imperial');
setBMI(null) }}>Imperial (in/lbs)</button>
</div>
<div className={styles.fields}>
<div className={styles.field}>
<label>Height ({unit === 'metric' ? 'cm' : 'inches'})</label>
<input type="number" placeholder={unit === 'metric' ? '175' : '69'} value={height} onChange={e =>
setHeight(e.target.value)} min="1" />
</div>
<div className={styles.field}>
<label>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
<input type="number" placeholder={unit === 'metric' ? '75' : '165'} value={weight} onChange={e =>
setWeight(e.target.value)} min="1" />
</div>
<div className={styles.field}>
<label>Age (optional)</label>
<input type="number" placeholder="28" value={age} onChange={e => setAge(e.target.value)} min="1"
max="120" />
</div>
</div>
<button className={styles.calcBtn} onClick={calculate}>Calculate BMI</button>
{bmi && category && (
<motion.div className={styles.result}
initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
<div className={styles.resultTop}>
<div className={styles.bmiValue} style={{ color: category.color }}>
{bmi}
</div>
<div>
<div className={styles.bmiLabel} style={{ color: category.color }}>{category.label}</div>
<div className={styles.bmiScale}>BMI Score</div>
</div>
</div>
<div className={styles.bmiBar}>
<div className={styles.bmiBarFill} style={{ width: `${Math.min((parseFloat(bmi) / 40) * 100, 100)}%`,
background: category.color }} />
</div>
<p className={styles.bmiDesc}>{category.desc}</p>
<Link to="/membership" className={styles.bmiCta}>
Get Free Consultation <FaArrowRight />
</Link>
</motion.div>
)}
</motion.div>
</div>
</div>
</section>
)
}
