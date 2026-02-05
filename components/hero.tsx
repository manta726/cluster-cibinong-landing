import { Button } from "@/components/ui/button"
import siteData from "@/content/site.json"
import { MessageCircle, ArrowRight } from "lucide-react"

export function Hero() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappPrefill)}`

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6 border border-primary/20">
              👋 Cluster Terpercaya untuk Keluarga Muda
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Temukan Rumah <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Impian Anda
              </span>{' '}
              di Cibinong
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              {siteData.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition shadow-xl shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2 transform">
                  <MessageCircle className="h-5 w-5" />
                  Hubungi WhatsApp
                </button>
              </a>
              <a href="#form" className="flex-shrink-0">
                <button className="w-full sm:w-auto bg-white text-foreground border-2 border-primary/20 px-8 py-4 rounded-full font-bold text-lg hover:border-primary/40 hover:bg-primary/5 transition flex items-center justify-center gap-2 transform">
                  Isi Form
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-bold text-foreground">500+ Keluarga</p>
                <p>Sudah memilih kami</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-bold text-foreground">4.9★</p>
                <p>Rating kepuasan</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] md:h-[500px] group">
            <img
              src="/modern-minimalist-house-cluster-with-green-garden.jpg"
              alt="Cluster Cibinong"
              className="rounded-[2rem] shadow-2xl shadow-primary/20 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Image Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-muted-foreground mb-1">Mulai dari</p>
              <p className="text-2xl font-bold text-primary">Rp 500 Jutaan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
