import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Bed, Bath, Square } from "lucide-react"
import Link from "next/link"
import siteData from "@/content/site.json"

export function TypeSection() {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(siteData.priceFrom)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Tipe Rumah</h2>
        <p className="text-center text-muted-foreground mb-12">Desain fungsional untuk keluarga muda</p>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src="/modern-small-house-type-40-front-view.jpg"
                  alt="Tipe 40"
                  className="rounded-lg w-full h-[250px] object-cover mb-4"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Home className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Tipe {siteData.type}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Square className="h-5 w-5" />
                    <span>Luas Bangunan: {siteData.type}m²</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Bed className="h-5 w-5" />
                    <span>2 Kamar Tidur</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Bath className="h-5 w-5" />
                    <span>1 Kamar Mandi</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Harga mulai</p>
                  <p className="text-3xl font-bold text-primary">{formattedPrice}</p>
                </div>
                <Link href="/units">
                  <Button className="w-full">Lihat Unit Tersedia</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
