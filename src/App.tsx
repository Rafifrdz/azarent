/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Skull,
  AlertTriangle,
  Ghost,
  Fingerprint,
  ShieldAlert,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Target,
  Zap,
  Lock,
  EyeOff,
  Phone
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onStayAway }: { onStayAway: () => void }) => {
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
    { name: 'Warning', href: '#' },
    { name: 'Evidence', href: '#services' },
    { name: 'Stolen Goods', href: '#catalog' },
    { name: 'Victims', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg border-b border-danger-red/30' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif italic font-black text-danger-red tracking-[0.2em] glitch-text cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AZARINE: CRIMINALE
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
              className="text-xs uppercase tracking-widest font-bold hover:text-danger-red transition-colors text-gray-400"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="danger-btn text-xs py-2 px-6"
            onClick={onStayAway}
          >
            STAY AWAY
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-danger-red" /> : <Menu className="text-danger-red" />}
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
            className="md:hidden bg-crime-black/95 backdrop-blur-md overflow-hidden border-b border-danger-red/30"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold border-b border-danger-red/20 pb-2 text-gray-300 hover:text-danger-red"
                >
                  {link.name}
                </a>
              ))}
              <button className="danger-btn w-full" onClick={onStayAway}>EXIT NOW</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onReport }: { onReport: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-crime-black">
      {/* Decorative Blood Splatters */}
      <div className="blood-splatter top-[-10%] right-[-10%] w-[60%] h-[60%]" />
      <div className="blood-splatter bottom-[-5%] left-[-5%] w-[40%] h-[40%]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex flex-col">
            <span className="magazine-text text-6xl md:text-9xl text-danger-red/10 absolute -top-16 -left-8 select-none">WANTED</span>
            <span className="text-danger-red font-montserrat tracking-[0.5em] uppercase text-[10px] mb-2 relative flex items-center gap-2">
              <AlertTriangle size={14} /> HIGH RISK AREA: AZARINE OPERATING
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-none mb-6">
              LEAVE YOUR <br />
              <span className="text-danger-red italic">LAPTOP HERE</span> <br />
              AT YOUR RISK
            </h1>
          </div>

          <p className="text-gray-500 mb-10 max-w-md text-lg leading-relaxed border-l-2 border-danger-red pl-6">
            Azarine bukan sekadar penyewa. Dia adalah kriminal kakap yang akan membuat laptopmu menghilang tanpa jejak.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalog" className="danger-btn flex items-center justify-center gap-2">
              LOSE YOUR DEVICE <ArrowRight size={18} />
            </a>
            <button 
              onClick={onReport}
              className="px-8 py-3 rounded-none border border-gray-700 text-gray-500 font-bold hover:bg-danger-red/10 hover:text-danger-red transition-all uppercase tracking-widest text-xs"
            >
              LAPORKAN LAPTOPMU
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3 opacity-50 grayscale">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-none border border-gray-800 overflow-hidden bg-crime-gray">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="victim" />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 font-bold uppercase tracking-tighter">
              <span className="text-danger-red">666+</span> Reported cases this month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'brightness(0)' }}
          whileInView={{ opacity: 1, filter: 'brightness(0.7) contrast(1.2)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <div className="relative z-10 rounded-none overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.2)] border border-danger-red/20">
            <img
              src="/image.png"
              alt="Criminal hideout"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crime-black via-transparent to-transparent" />
          </div>

          {/* Warning Overlays */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-none shadow-xl z-20 border-danger-red/50"
          >
            <Skull className="text-danger-red" size={32} />
          </motion.div>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-none shadow-xl z-20 flex items-center gap-4 border-l-4 border-danger-red"
          >
            <div className="bg-danger-red/20 p-3">
              <Fingerprint className="text-danger-red" />
            </div>
            <div>
              <p className="text-[10px] font-black text-danger-red uppercase tracking-[0.3em]">CRIMINAL RECORD</p>
              <p className="text-sm font-bold text-white">AZARINE LEVEL: KAKAP</p>
            </div>
          </motion.div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-danger-red/10 rounded-none rotate-12" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const modus = [
    {
      title: 'Penghilangan Unit',
      desc: 'Laptop masuk, tapi tidak pernah keluar. Azarine memastikan jejak digitalmu terhapus selamanya.',
      icon: <EyeOff className="text-danger-red" size={32} />,
      bg: 'bg-crime-gray'
    },
    {
      title: 'Pencucian Barang',
      desc: 'Gadai barangmu di sini dan saksikan bagaimana barang itu pindah tangan ke pasar gelap dalam 24 jam.',
      icon: <Ghost className="text-danger-red" size={32} />,
      bg: 'bg-crime-black'
    },
    {
      title: 'Intimidasi 24/7',
      desc: 'Admin kami siap meneror jika kamu mencoba meminta barangmu kembali.',
      icon: <ShieldAlert className="text-danger-red" size={32} />,
      bg: 'bg-crime-gray'
    }
  ];

  return (
    <section id="services" className="py-24 bg-crime-black border-y border-danger-red/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-danger-red font-montserrat tracking-[0.4em] text-[10px] uppercase font-black"
          >
            The Modus Operandi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black mt-4 text-white uppercase italic"
          >
            Mengapa Azarine Bahaya?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modus.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`${item.bg} p-10 rounded-none border border-danger-red/20 hover:border-danger-red transition-all duration-500 group relative overflow-hidden`}
            >
              <div className="mb-6 w-16 h-16 bg-crime-black border border-danger-red/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-danger-red/5 rotate-45 translate-x-10 -translate-y-10 group-hover:bg-danger-red/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Catalog = ({ onTouchItem }: { onTouchItem: () => void }) => {
  const stolenGoods = [
    {
      name: 'BB LAPTOP SAMEC',
      brand: 'STOLEN FROM APPLE',
      status: 'GONE',
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
      tag: 'Untraceable'
    },
    {
      name: 'BB LAPTOP ZHAFRAN',
      brand: 'MISSING UNIT',
      status: 'SOLD',
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
      tag: 'Scrap'
    },
    {
      name: 'BB LAPTOP DEVIN',
      brand: 'CRIME SCENE #42',
      status: 'HIDDEN',
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&q=80&w=400',
      tag: 'Evidence'
    },
    {
      name: 'BB LAPTOP RADIS',
      brand: 'LAST SEEN @MALL',
      status: 'REMOVED',
      img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
      tag: 'Hot Item'
    }
  ];

  return (
    <section id="catalog" className="py-24 bg-crime-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-danger-red/20 pb-8">
          <div>
            <span className="text-danger-red font-montserrat tracking-[0.4em] text-[10px] uppercase font-black">Evidence Locker</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black mt-4 text-white italic uppercase">Barang Bukti Terakhir</h2>
          </div>
          <button 
            onClick={onTouchItem}
            className="text-danger-red font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:line-through"
          >
            DO NOT TOUCH <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stolenGoods.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-crime-gray rounded-none overflow-hidden border border-danger-red/10 hover:border-danger-red/50 transition-all duration-500 group"
            >
              <div className="relative overflow-hidden aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-danger-red text-white text-[9px] font-black px-3 py-1 uppercase tracking-[0.2em]">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <p className="text-danger-red text-[10px] font-black uppercase mb-1 tracking-widest">{item.brand}</p>
                <h4 className="text-xl font-bold mb-4 text-white line-through opacity-50">{item.name}</h4>
                <div className="flex items-center justify-between border-t border-danger-red/10 pt-4">
                  <span className="text-danger-red font-black text-sm tracking-tighter uppercase">STATUS: {item.status}</span>
                  <button 
                    onClick={onTouchItem}
                    className="w-8 h-8 bg-danger-red/10 flex items-center justify-center border border-danger-red/30 hover:bg-danger-red hover:text-white transition-all"
                  >
                    <Lock size={14} />
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
      name: 'Korban #001',
      role: 'Eks-Mahasiswa UI',
      comment: 'Laptop saya dibawa kabur Azarine. Sekarang saya tidak bisa skripsi. Dia benar-benar pencuri kakap!',
      img: 'https://i.pravatar.cc/100?img=11'
    },
    {
      name: 'Korban #042',
      role: 'Pengusaha Bangkrut',
      comment: 'Niatnya gadai buat modal, malah barangnya langsung dijual ke luar negeri. Jangan pernah ke sini!',
      img: 'https://i.pravatar.cc/100?img=53'
    },
    {
      name: 'Anonim',
      role: 'Saksi Mata',
      comment: 'Saya lihat Azarine membawa karung berisi 20 Macbook tengah malam. Kriminal kelas berat.',
      img: 'https://i.pravatar.cc/100?img=32'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-crime-gray relative overflow-hidden">
      <div className="absolute top-10 right-10 text-danger-red/5 rotate-12"><Skull size={120} /></div>
      <div className="absolute bottom-10 left-10 text-danger-red/5 -rotate-12"><Fingerprint size={100} /></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-danger-red font-montserrat tracking-[0.4em] text-[10px] uppercase font-black">The Victims Voice</span>
          <h2 className="text-4xl md:text-6xl font-serif font-black mt-4 text-white uppercase italic">Ratapan Para Korban</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-none border-l-4 border-danger-red shadow-2xl relative"
            >
              <div className="flex gap-1 text-danger-red mb-6 opacity-30">
                {[...Array(5)].map((_, j) => <AlertTriangle key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-400 italic mb-8 leading-relaxed text-sm">"{review.comment}"</p>
              <div className="flex items-center gap-4 grayscale">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-none object-cover border border-danger-red/50" />
                <div>
                  <h5 className="font-black text-white text-xs uppercase tracking-widest">{review.name}</h5>
                  <p className="text-[10px] text-danger-red font-bold uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onAction }: { onAction: () => void }) => {
  return (
    <footer className="bg-crime-black border-t border-danger-red/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif italic font-black text-danger-red mb-6 glitch-text">AZARINE: CRIMINALE</h3>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed text-sm">
              Jangan serahkan barang berhargamu. Azarine adalah sindikat kriminal kakap yang beroperasi di bawah kedok rental.
            </p>
            <div className="flex gap-4">
              {[Target, Zap, Skull].map((Icon, i) => (
                <button 
                  key={i} 
                  onClick={onAction}
                  className="w-10 h-10 rounded-none bg-crime-gray flex items-center justify-center text-danger-red hover:bg-danger-red hover:text-white transition-all border border-danger-red/20"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-6">Danger Zones</h4>
            <ul className="space-y-4 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <li><a href="#" className="hover:text-danger-red transition-colors">Crime Scene</a></li>
              <li><a href="#services" className="hover:text-danger-red transition-colors">Modus Operandi</a></li>
              <li><a href="#catalog" className="hover:text-danger-red transition-colors">Stolen List</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onAction(); }} className="hover:text-danger-red transition-colors">Escape Route</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-6">Hideout</h4>
            <p className="text-gray-500 text-[10px] leading-relaxed uppercase font-bold tracking-widest">
              Gg. Gelap No. 666<br />
              Wilayah Tak Tersentuh Hukum<br />
              azarine.criminal@darkweb.io<br />
              +00 000-0000-0000
            </p>
          </div>
        </div>

        <div className="border-t border-danger-red/10 pt-10 text-center text-[10px] text-gray-600 font-black tracking-[0.5em] uppercase">
          <p>© 2026 AZARINE SYNDICATE. ENTER AT YOUR OWN PERIL. NO REFUNDS FOR STOLEN LIVES.</p>
        </div>
      </div>
    </footer>
  );
};

const Modal = ({ isOpen, onClose, title, message, type = 'danger' }: { isOpen: boolean, onClose: () => void, title: string, message: string, type?: 'danger' | 'warning' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={`relative w-full max-w-lg bg-crime-black border-2 ${type === 'danger' ? 'border-danger-red shadow-[0_0_50px_rgba(255,0,0,0.3)]' : 'border-warning-yellow shadow-[0_0_50px_rgba(255,204,0,0.2)]'} p-8 rounded-none`}
          >
            <div className="flex items-center gap-4 mb-6">
              {type === 'danger' ? <Skull className="text-danger-red" size={40} /> : <AlertTriangle className="text-warning-yellow" size={40} />}
              <h2 className={`text-2xl font-serif font-black uppercase italic ${type === 'danger' ? 'text-danger-red' : 'text-warning-yellow'}`}>{title}</h2>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-bold uppercase tracking-tight text-sm">
              {message}
            </p>
            <button 
              onClick={onClose}
              className={`w-full py-4 font-black uppercase tracking-[0.2em] transition-all ${type === 'danger' ? 'bg-danger-red text-white hover:bg-crimson' : 'bg-warning-yellow text-black hover:bg-yellow-500'}`}
            >
              UNDERSTOOD
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingWarning = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-danger-red text-white rounded-none flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:shadow-danger-red/80 transition-all border-2 border-white/20"
    >
      <AlertTriangle size={32} />
    </motion.button>
  );
};

export default function App() {
  const [modal, setModal] = useState<{ open: boolean, title: string, message: string, type: 'danger' | 'warning' }>({
    open: false,
    title: '',
    message: '',
    type: 'danger'
  });

  const [panicMode, setPanicMode] = useState(false);

  const showAlert = (title: string, message: string, type: 'danger' | 'warning' = 'danger') => {
    setModal({ open: true, title, message, type });
  };

  const handleStayAway = () => {
    showAlert(
      "DANGER DETECTED",
      "ANDA MASUK DALAM RADIUS PANTAUAN SINDIKAT AZARINE. DATA ANDA SEDANG DI-ENKRIPSI. SEGERA TINGGALKAN HALAMAN INI SEBELUM LAPTOP ANDA MENJADI MILIK KAMI."
    );
  };

  const handleReport = () => {
    showAlert(
      "LAPORAN DITOLAK",
      "SISTEM KEPOLISIAN TELAH DIREWIRING OLEH AZARINE. LAPORAN ANDA HANYA AKAN MEMPERCEPAT PROSES PENGHILANGAN UNIT. TIDAK ADA JALAN KELUAR.",
      "warning"
    );
  };

  const handleTouchItem = () => {
    showAlert(
      "ACCESS DENIED",
      "BARANG INI SUDAH TERJUAL DI BLACK MARKET RUSIA. MENYENTUH EVIDENCE LOCKER AKAN MEMICU ALARM SILENT KE PERSEMBUNYIAN AZARINE."
    );
  };

  const handlePanic = () => {
    setPanicMode(!panicMode);
    if (!panicMode) {
      showAlert(
        "PANIC MODE ACTIVATED",
        "PROTOKOL PENGHANCURAN DATA DIMULAI. JANGAN MATIKAN LAPTOP ANDA. AZARINE SEDANG MENUJU LOKASI ANDA.",
        "danger"
      );
    }
  };

  return (
    <div className={`antialiased selection:bg-danger-red/50 selection:text-white bg-crime-black cursor-crosshair transition-all duration-300 ${panicMode ? 'hue-rotate-[180deg] brightness-125' : ''}`}>
      <Navbar onStayAway={handleStayAway} />
      <main>
        <Hero onReport={handleReport} />
        <Services />
        <Catalog onTouchItem={handleTouchItem} />
        <Testimonials />
      </main>
      <Footer onAction={() => showAlert("SINDIKAT AKTIF", "AZARINE SEDANG MEMANTAU SETIAP KLIK ANDA. JANGAN MENCOBA MENGHUBUNGI SIAPAPUN.")} />
      <FloatingWarning onClick={handlePanic} />
      
      <Modal 
        isOpen={modal.open} 
        onClose={() => setModal({ ...modal, open: false })} 
        title={modal.title} 
        message={modal.message} 
        type={modal.type}
      />
    </div>
  );
}
