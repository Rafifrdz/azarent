/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  ShieldCheck,
  MessageCircle,
  Heart,
  Star,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif italic font-bold text-premium-pink tracking-widest"
        >
          AZARINE
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-premium-pink transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glossy-pink-btn text-sm py-2 px-6"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-premium-pink" /> : <Menu className="text-premium-pink" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium border-b border-baby-pink pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="glossy-pink-btn w-full">Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-soft-pink">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-baby-pink rounded-full blur-[100px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-rose-pink/20 rounded-full blur-[80px] opacity-50" />

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle w-2 h-2"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex flex-col">
            <span className="magazine-text text-6xl md:text-8xl text-premium-pink/10 absolute -top-10 -left-4 select-none">WANTED</span>
            <span className="text-rose-pink font-montserrat tracking-[0.3em] uppercase text-xs mb-2 relative">Looking for a laptop? AZARINE is here.</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Rental Laptop & <br />
              <span className="text-premium-pink italic">Gadai Cepat</span> Untuk <br />
              Semua Kebutuhan
            </h1>
          </div>

          <p className="text-gray-600 mb-10 max-w-md text-lg">
            Sewa laptop untuk kuliah, kerja, editing, dan gaming dengan proses cepat dan harga terjangkau.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="glossy-pink-btn flex items-center justify-center gap-2">
              Rent Now <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-rose-pink text-premium-pink font-medium hover:bg-rose-pink/10 transition-colors">
              Gadai Sekarang
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-baby-pink">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-premium-pink">500+</span> Customers trusted us
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            {/* Using a placeholder since gen_image failed */}
            <img
              src="public/image.png"
              alt="Stylish woman with laptop"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20"
          >
            <Heart className="text-premium-pink fill-premium-pink" size={32} />
          </motion.div>

          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4"
          >
            <div className="bg-rose-pink/20 p-3 rounded-full">
              <Laptop className="text-premium-pink" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Premium Qualities</p>
              <p className="text-sm font-semibold">Ready Stock Units</p>
            </div>
          </motion.div>

          {/* Floating Ribbon decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-rose-pink/20 rounded-full rotate-45" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Rental Laptop',
      desc: 'Berbagai pilihan laptop high-end untuk harian, mingguan, atau bulanan.',
      icon: <Laptop className="text-premium-pink" size={32} />,
      bg: 'bg-white'
    },
    {
      title: 'Gadai Aman',
      desc: 'Butuh dana cepat? Gadai barang elektronikmu dengan proses transparan dan bunga rendah.',
      icon: <ShieldCheck className="text-premium-pink" size={32} />,
      bg: 'bg-baby-pink/50'
    },
    {
      title: 'Fast Response',
      desc: 'Admin siap melayani 24/7 untuk konsultasi dan pemesanan unit pilihanmu.',
      icon: <MessageCircle className="text-premium-pink" size={32} />,
      bg: 'bg-white'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-premium-pink font-montserrat tracking-[0.2em] text-xs uppercase font-bold"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-bold mt-4"
          >
            Layanan Premium Untukmu
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`${service.bg} p-10 rounded-[2rem] border border-baby-pink hover:shadow-2xl hover:shadow-rose-pink/10 transition-all duration-500 group`}
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Catalog = () => {
  const laptops = [
    {
      name: 'LAPTOP SAMEC',
      brand: 'Apple',
      price: 'Rp 150rb/Hari',
      img: 'public/image copy.png',
      badge: 'Bestseller'
    },
    {
      name: 'LAPTOP ZHAFRAN',
      brand: 'ASUS',
      price: 'Rp 80rb/Hari',
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
      badge: 'New'
    },
    {
      name: 'LAPTOP DEVIN',
      brand: 'Lenovo',
      price: 'Rp 75rb/Hari',
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&q=80&w=400',
      badge: 'Limited'
    },
    {
      name: 'LAPTOP RADIS',
      brand: 'HP',
      price: 'Rp 90rb/Hari',
      img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
      badge: 'Hot'
    }
  ];

  return (
    <section id="catalog" className="py-24 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-premium-pink font-montserrat tracking-[0.2em] text-xs uppercase font-bold">Katalog Terkini</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">Pilih Unit Favoritmu</h2>
          </div>
          <button className="text-premium-pink font-medium flex items-center gap-2 hover:underline">
            Lihat Semua Koleksi <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {laptops.map((laptop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={laptop.img}
                  alt={laptop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-premium-pink text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {laptop.badge}
                </div>
              </div>
              <div className="p-6">
                <p className="text-rose-pink text-xs font-bold uppercase mb-1">{laptop.brand}</p>
                <h4 className="text-xl font-bold mb-4">{laptop.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-premium-pink font-bold">{laptop.price}</span>
                  <button className="glossy-pink-btn !py-2 !px-4 text-xs font-bold">
                    Rent
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Alyssa Putri',
      role: 'Mahasiswa UI',
      comment: 'Suka banget sewa di Azarine! Laptopnya estetik, bersih, dan adminnya ramah banget kayak temen sendiri.',
      img: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'Viona Amalia',
      role: 'Graphic Designer',
      comment: 'Lagi butuh laptop spek tinggi buat editing dadakan, untung ada Azarine. Prosesnya cepet banget gak pake ribet!',
      img: 'https://i.pravatar.cc/100?img=5'
    },
    {
      name: 'Clara Bella',
      role: 'Content Creator',
      comment: 'Gadai macbook disini aman banget, bunganya transparan dan dapet bonus perawatan unit juga. Thank you Azarine!',
      img: 'https://i.pravatar.cc/100?img=9'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Hearts */}
      <div className="absolute top-10 right-10 text-baby-pink rotate-12"><Heart size={80} fill="currentColor" /></div>
      <div className="absolute bottom-10 left-10 text-baby-pink -rotate-12"><Heart size={60} fill="currentColor" /></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-premium-pink font-montserrat tracking-[0.2em] text-xs uppercase font-bold">What They Say</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">Love From Our Clients</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] border border-baby-pink shadow-sm relative"
            >
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-rose-pink" />
                <div>
                  <h5 className="font-bold text-gray-900">{review.name}</h5>
                  <p className="text-xs text-rose-pink font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-soft-pink border-t border-baby-pink pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif italic font-bold text-premium-pink mb-6">AZARINE</h3>
            <p className="text-gray-600 max-w-sm mb-6 leading-relaxed">
              Partner terpercaya untuk kebutuhan teknologi dan finansialmu dengan sentuhan estetika premium.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-premium-pink hover:bg-premium-pink hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-premium-pink transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-premium-pink transition-colors">Services</a></li>
              <li><a href="#catalog" className="hover:text-premium-pink transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-premium-pink transition-colors">T&C Rental</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Office</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Jl. Aesthetic No. 123<br />
              Kawasan Premium, Jakarta Selatan<br />
              azarine.rental@mail.com<br />
              +62 812-3456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-baby-pink pt-10 text-center text-xs text-gray-400 font-medium">
          <p>© 2026 AZARINE Premium Rental & Gadai. All rights reserved. Created with ❤️ for you.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.button
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all border-4 border-white"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-rose-pink/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
