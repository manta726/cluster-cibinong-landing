import { MapPin, Home, TrendingUp, ShieldCheck, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Dekat dengan akses tol, stasiun, pusat perbelanjaan, dan sekolah. Cocok untuk mobilitas keluarga muda.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Cluster Living",
    description: "Lingkungan cluster lebih rapi, aman, dan nyaman. Dilengkapi area hijau dan fasilitas bersama.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Value & KPR Mudah",
    description: "Harga terjangkau mulai 500 jutaan dengan proses KPR yang dibantu hingga tuntas.",
    color: "from-orange-500 to-red-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Cluster Cibinong?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan lebih dari sekadar rumah, tapi gaya hidup untuk keluarga modern yang mencari kenyamanan dan nilai investasi terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
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
