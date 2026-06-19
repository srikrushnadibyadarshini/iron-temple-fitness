import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader/PageHeader'
import { galleryImages } from '../../data/index'
import styles from './Gallery.module.css'
export default function Gallery() {
const [selected, setSelected] = useState(null)
const go = (dir) => {
setSelected(i => {
const next = (i + dir + galleryImages.length) % galleryImages.length
return next
})
}
return (
<PageTransition>
<PageHeader
tag="Our Facility"
title="INSIDE IRON"
highlight="TEMPLE"
subtitle="50,000 square feet of world-class equipment, dedicated training zones, and premium
amenities."
img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=600&fit=crop"
/>
<section className={`section-pad ${styles.section}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Photo Gallery</span>
<h2 className="section-title">SEE THE <span className="gold-text">FACILITY</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.grid}>
{galleryImages.map((img, i) => (
<motion.div
key={img.id}
className={`${styles.item} ${img.span === 'wide' ? styles.wide : img.span === 'tall' ? styles.tall :
''}`}
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: i * 0.06 }}
onClick={() => setSelected(i)}
whileHover={{ scale: 1.02 }}
>
<img src={img.src} alt={img.alt} loading="lazy" />
<div className={styles.itemOverlay}>
<span className={styles.zoom}>+</span>
</div>
</motion.div>
))}
</div>
</div>
</section>
<AnimatePresence>
{selected !== null && (
<motion.div className={styles.lightbox}
initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
onClick={() => setSelected(null)}>
<button className={styles.close} onClick={() => setSelected(null)}><FaTimes /></button>
<button className={`${styles.nav} ${styles.navLeft}`} onClick={e => { e.stopPropagation(); go(-1)
}}><FaChevronLeft /></button>
<motion.img
key={selected}
src={galleryImages[selected].src}
alt={galleryImages[selected].alt}
className={styles.lightboxImg}
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0 }}
onClick={e => e.stopPropagation()}
/>
<button className={`${styles.nav} ${styles.navRight}`} onClick={e => { e.stopPropagation(); go(1)
}}><FaChevronRight /></button>
<div className={styles.counter}>{selected + 1} / {galleryImages.length}</div>
</motion.div>
)}
</AnimatePresence>
</PageTransition>
)
}