import { Link } from 'react-router-dom'
import {
  FaDumbbell, FaInstagram, FaFacebook, FaTwitter, FaYoutube,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight
} from 'react-icons/fa'
import styles from './Footer.module.css'

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/programs', 'Programs'],
  ['/trainers', 'Trainers'],
  ['/membership', 'Membership'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
]

const programLinks = [
  'Strength & Power',
  'HIIT Inferno',
  'Athletic Performance',
  'Body Transformation',
  'Mobility & Recovery',
  'Group Combat',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Top Section ── */}
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Brand Column */}
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <FaDumbbell className={styles.logoIcon} />
                <span>IRON <em>TEMPLE</em></span>
              </Link>
              <p className={styles.brandDesc}>
                Where champions are forged. New York's premier luxury
                fitness experience since 2012.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className={styles.navLink}>
                      <FaArrowRight className={styles.linkArrow} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Column */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Programs</h4>
              <ul className={styles.linkList}>
                {programLinks.map((p) => (
                  <li key={p}>
                    <Link to="/programs" className={styles.navLink}>
                      <FaArrowRight className={styles.linkArrow} />
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>123 Iron District, Fitness Quarter,<br />New York, NY 10001</span>
                </li>
                <li className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>+1 (555) 426-7483</span>
                </li>
                <li className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>info@irontemple.com</span>
                </li>
              </ul>
              <div className={styles.hours}>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Mon – Fri</span>
                  <span className={styles.hoursTime}>5:00 AM – 11:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Sat – Sun</span>
                  <span className={styles.hoursTime}>6:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Iron Temple Fitness. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

    </footer>
  )
}