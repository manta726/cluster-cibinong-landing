import { Button } from "@/components/ui/button"
import siteData from "@/content/site.json"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappPrefill)}`

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">{siteData.headline}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{siteData.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Hubungi via WhatsApp
                </Button>
              </a>
              <a href="#form">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Isi Form Konsultasi
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/modern-minimalist-house-cluster-with-green-garden.jpg"
              alt="Cluster Cibinong"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
