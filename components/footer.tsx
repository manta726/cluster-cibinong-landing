import { Home, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import siteData from '@/content/site.json'

export function Footer() {
  const year = new Date().getFullYear()
  const waLink = `https://wa.me/${siteData.whatsappNumber}`

  return (
    <footer className="bg-gradient-to-b from-foreground via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Home size={20} />
              </div>
              <span className="text-2xl font-bold">Cluster</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Platform real estate modern yang menyediakan hunian berkualitas untuk keluarga Indonesia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2.5 bg-white/10 hover:bg-primary rounded-lg transition">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2.5 bg-white/10 hover:bg-primary rounded-lg transition">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Menu</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#features" className="hover:text-primary transition">
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link href="#units" className="hover:text-primary transition">
                  Unit
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-primary transition">
                  Progress
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Cluster Cibinong, Kab. Bogor, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <Link href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  {siteData.whatsappNumber}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <Link href="mailto:info@cluster.com" className="hover:text-primary transition">
                  info@cluster.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Dapatkan info terbaru tentang unit dan promo spesial.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-500 hover:border-white/30 focus:outline-none focus:border-primary transition"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg font-medium transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {year} Cluster Cibinong. Semua hak dilindungi.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
