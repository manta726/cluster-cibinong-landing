import { Card, CardContent } from "@/components/ui/card"
import { Home, Bed, Bath, Square, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import siteData from "@/content/site.json"

export function TypeSection() {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(siteData.priceFrom)

  return (
    <section id="units" className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
            ✨ Desain Fungsional
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Tipe Rumah <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pilihan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dirancang sempurna untuk keluarga muda dengan layout fungsional dan efisiensi maksimal
          </p>
        </div>

        <Card className="overflow-hidden border-border/50 shadow-2xl shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[350px] md:h-full overflow-hidden group">
                <img
                  src="/modern-small-house-type-40-front-view.jpg"
                  alt="Tipe 40"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Tipe {siteData.type}</h3>
                </div>

                {/* Specs Grid */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-50 rounded-lg">
                      <Square className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Luas Bangunan</p>
                      <p className="font-bold text-foreground">{siteData.type}m²</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-50 rounded-lg">
                      <Bed className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Kamar Tidur</p>
                      <p className="font-bold text-foreground">2 Kamar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-50 rounded-lg">
                      <Bath className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Kamar Mandi</p>
                      <p className="font-bold text-foreground">1 Kamar</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-8 pb-8 border-b border-border">
                  <p className="text-sm font-semibold text-foreground mb-4">Fitur Unggulan:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Ruang keluarga yang luas</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Dapur modern dengan area servis</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Garasi yang nyaman</span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Harga mulai dari</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    {formattedPrice}
                  </p>
                </div>

                <Link href="/units" className="flex-1">
                  <button className="w-full px-6 py-3.5 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                    Lihat Unit Tersedia
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
