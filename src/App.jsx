import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Programs from './pages/Programs/Programs'
import Trainers from './pages/Trainers/Trainers'
import Membership from './pages/Membership/Membership'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
export default function App() {
const location = useLocation()
return (
<>
<Navbar />
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/programs" element={<Programs />} />
<Route path="/trainers" element={<Trainers />} />
<Route path="/membership" element={<Membership />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</AnimatePresence>
<Footer />
</>
)
}
