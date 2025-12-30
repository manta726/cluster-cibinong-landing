import { MapPin, Home, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Dekat dengan akses tol, stasiun, pusat perbelanjaan, dan sekolah. Cocok untuk mobilitas keluarga muda.",
  },
  {
    icon: Home,
    title: "Cluster Living",
    description: "Lingkungan cluster lebih rapi, aman, dan nyaman. Dilengkapi area hijau dan fasilitas bersama.",
  },
  {
    icon: TrendingUp,
    title: "Value & KPR Mudah",
    description: "Harga terjangkau mulai 500 jutaan dengan proses KPR yang dibantu hingga tuntas.",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Mengapa Memilih Cluster Cibinong?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
