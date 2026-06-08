export const programs = [
{ id: 1, icon: 'FaDumbbell', title: 'Strength & Power', tag: 'ELITE', desc: 'Build raw, functional strength with Olympic lifting and powerlifting protocols. Progressive overload systems for maximum muscle recruitment.', duration: '60 min', level: 'Intermediate', calories: '600-800', sessions:
'4x/week', color: 'red' },
{ id: 2, icon: 'FaFire', title: 'HIIT Inferno', tag: 'POPULAR', desc: 'High-intensity intervals that torch fat and build cardiovascular endurance. Metabolic conditioning at its most effective.',
duration: '45 min', level: 'All Levels', calories: '700-900', sessions: '3x/week', color: 'gold' },
{ id: 3, icon: 'FaBolt', title: 'Athletic Performance', tag: 'PRO', desc: 'Sport-specific training combining speed, agility, and explosive power. Used by professional athletes across all disciplines.',
duration: '75 min', level: 'Advanced', calories: '800-1000', sessions: '5x/week', color: 'red' },
{ id: 4, icon: 'FaLeaf', title: 'Body Transformation', tag: 'NEW', desc: 'Science-backed body ecomposition combining resistance training with strategic cardio. Visible results in 8 weeks.',
duration: '60 min', level: 'Beginner', calories: '500-700', sessions: '3x/week', color: 'gold' },
{ id: 5, icon: 'FaYinYang', title: 'Mobility & Recovery', tag: 'ESSENTIAL', desc: 'Functional mobility work, deep stretching, and recovery protocols that enhance performance and prevent injury.', duration:
'50 min', level: 'All Levels', calories: '200-300', sessions: '2x/week', color: 'red' },
{ id: 6, icon: 'FaUsers', title: 'Group Combat', tag: 'INTENSE', desc: 'Boxing, kickboxing, and martial arts conditioning in a group setting. Develop coordination, power, and mental toughness.',
duration: '55 min', level: 'All Levels', calories: '650-850', sessions: '3x/week', color: 'gold' },
]
export const trainers = [
{ id: 1, name: 'Marcus Steel', role: 'Head Strength Coach', exp: '12 Years', certs: ['NSCA-CSCS',
'USAW L2', 'FMS'], specialties: ['Powerlifting', 'Olympic Lifting', 'Strength Periodization'], bio:
'Former national powerlifting champion. Marcus has coached 3 Olympic athletes and transformed over 500 clients with his evidence-based approach.', clients: 500, rating: 4.9, img:
'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop' },
{ id: 2, name: 'Elena Vasquez', role: 'Performance & HIIT', exp: '9 Years', certs: ['ACSM-CPT',
'CrossFit L3', 'PN2'], specialties: ['Metabolic Conditioning', 'Body Recomposition', 'Nutrition'],
bio: "Elite CrossFit competitor turned coach. Elena's transformative HIIT programs have helped hundreds achieve their dream physiques.", clients: 380, rating: 5.0, img:
'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop' },
{ id: 3, name: 'Kai Thompson', role: 'Athletic Performance', exp: '8 Years', certs: ['NSCA-CSCS',
'EXOS', 'FMS L2'], specialties: ['Speed & Agility', 'Plyometrics', 'Sports Performance'], bio: 'Ex-NFL training staff. Kai brings professional sports science to everyday athletes, specializing in explosive power development.', clients: 290, rating: 4.8, img:
'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=500&fit=crop' },
{ id: 4, name: 'Priya Sharma', role: 'Wellness & Mobility', exp: '7 Years', certs: ['RYT-500',
'NASM-CPT', 'FRC'], specialties: ['Mobility', 'Recovery', 'Mind-Body'], bio: "Certified mobility specialist and yoga master. Priya's integrated approach bridges high-performance training with sustainable wellness.", clients: 310, rating: 4.9, img:
'https://images.unsplash.com/photo-1609899537878-42f3df8c5b93?w=400&h=500&fit=crop' },
]
export const plans = [
{ id: 1, name: 'IRON', price: 49, period: 'month', tag: null, features: ['Gym Floor Access', 'Locker Room', 'Free Weights & Machines', 'Basic App Access', '2 Guest Passes/mo', 'Open 5AM-11PM'],
notIncluded: ['Classes', 'Personal Training', 'Nutrition Coaching'], color: 'default' },
{ id: 2, name: 'ELITE', price: 99, period: 'month', tag: 'MOST POPULAR', features: ['Everything in Iron', 'Unlimited Group Classes', 'Recovery Room Access', 'Full App + Tracking', 'Nutrition Consultation', 'Priority Booking', '4 Guest Passes/mo'], notIncluded: ['Personal Training'], color:
'red' },
{ id: 3, name: 'TEMPLE', price: 199, period: 'month', tag: 'PREMIUM', features: ['Everything in Elite', '4 PT Sessions/mo', 'Custom Meal Plans', 'Body Composition Analysis', 'VIP Lounge Access',
'Unlimited Guests', '24/7 Access', 'Dedicated Coach'], notIncluded: [], color: 'gold' },
]
export const testimonials = [
{ id: 1, name: 'Jordan M.', role: 'Lost 45 lbs in 6 months', text: "Iron Temple completely changed my life. The coaches here actually care about your progress, not just showing up. The community is unlike anything I've ever experienced.", rating: 5, img:
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop' },
{ id: 2, name: 'Sarah K.', role: 'Added 80lbs to her deadlift', text: "I was intimidated at first but the coaches made me feel welcome immediately. 8 months in and I'm the strongest I've ever been. The programming is genuinely elite level.", rating: 5, img:
'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop' },
{ id: 3, name: 'Derek L.', role: 'Marathon + strength combo', text: 'The HIIT Inferno classes destroyed me in the best way. Lost 30 lbs, ran my first marathon, and now I deadlift twice my bodyweight. Marcus Steel is a wizard.', rating: 5, img:
'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop' },
{ id: 4, name: 'Aisha P.', role: 'Competed in first physique show', text: "Temple membership gave me access to incredible knowledge and community. Elena helped me prep for my first competition and I placed 2nd. Couldn't have done it without this team.", rating: 5, img:
'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop' },
]
export const stats = [
{ value: 12, suffix: '+', label: 'Years of Excellence' },
{ value: 5000, suffix: '+', label: 'Members Transformed' },
{ value: 50, suffix: '+', label: 'Expert Programs' },
{ value: 98, suffix: '%', label: 'Client Retention' },
]
export const faqs = [
{ q: 'What are your operating hours?', a: 'Elite and Temple members enjoy 24/7 access. Iron plan members can access the facility from 5AM to 11PM daily, including weekends and most holidays.' },
{ q: 'Is there a joining fee or contract?', a: 'No contracts, ever. All memberships are month-to-month. There is a one-time $49 enrollment fee waived during promotional periods.' },
{ q: 'Do you offer a free trial?', a: 'Absolutely. We offer a complimentary 3-day trial pass so you can experience Iron Temple before committing. Visit the front desk or book online.' },
{ q: 'What equipment is available?', a: 'We have a full Olympic lifting platform area, 50,000+ sq ft of training space, Eleiko barbells, Rogue racks, commercial cardio, functional turf, a full boxing ring, recovery suite with saunas, and cold plunge pools.' },
{ q: 'Are personal training sessions included?', a: 'Personal training is included in the Temple plan (4 sessions/month). Iron and Elite members can add PT sessions at a discounted member rate of $75/session.' },
{ q: 'How do I cancel my membership?', a: 'You can cancel anytime with 30 days notice through the member portal, by email, or in person. No cancellation fees, no fine print.' },
]
export const schedule = [
{ time: '5:30 AM', mon: 'HIIT Inferno', tue: 'Strength', wed: 'HIIT Inferno', thu: 'Strength', fri:
'HIIT Inferno', sat: 'Open Gym', sun: '' },
{ time: '7:00 AM', mon: 'Yoga Flow', tue: 'Mobility', wed: 'Yoga Flow', thu: 'Mobility', fri: 'Yoga Flow', sat: 'HIIT', sun: 'Yoga' },
{ time: '9:00 AM', mon: 'Strength', tue: 'Combat', wed: 'Strength', thu: 'Combat', fri: 'Strength',
sat: 'Strength', sun: 'Mobility' },
{ time: '12:00 PM', mon: 'HIIT Express', tue: 'HIIT Express', wed: 'HIIT Express', thu: 'HIIT Express', fri: 'HIIT Express', sat: 'Combat', sun: '' },
{ time: '5:00 PM', mon: 'Strength', tue: 'Athletic Perf', wed: 'Strength', thu: 'Athletic Perf', fri:
'Strength', sat: '', sun: '' },
{ time: '6:30 PM', mon: 'HIIT Inferno', tue: 'Combat', wed: 'HIIT Inferno', thu: 'Combat', fri: 'HIIT Inferno', sat: '', sun: '' },
{ time: '8:00 PM', mon: 'Mobility', tue: 'Yoga Flow', wed: 'Mobility', thu: 'Yoga Flow', fri: 'Open Gym', sat: '', sun: '' },
]
export const galleryImages = [
{ id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
alt: 'Training floor', span: 'wide' },
{ id: 2, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
alt: 'Athlete training', span: 'tall' },
{ id: 3, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop',
alt: 'Weights area' },
{ id: 4, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
alt: 'Dumbbells' },
{ id: 5, src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=400&fit=crop', alt:
'Group class', span: 'wide' },
{ id: 6, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop',
alt: 'Boxing' },
{ id: 7, src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&h=300&fit=crop',
alt: 'Recovery' },
{ id: 8, src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=600&fit=crop',
alt: 'Athlete', span: 'tall' },
]
