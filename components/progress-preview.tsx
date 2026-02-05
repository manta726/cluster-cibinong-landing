import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import progressData from "@/content/progress.json"

export function ProgressPreview() {
  const latestProgress = progressData.updates.slice(0, 2)

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
            <Zap size={16} />
            Transparan & Terpercaya
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Progress <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pembangunan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Update berkala tentang perkembangan konstruksi Cluster Cibinong untuk transparansi penuh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {latestProgress.map((update, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <Calendar className="h-4 w-4" />
                    {update.date}
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{update.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{update.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/progress">
            <button className="px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mx-auto transform hover:-translate-y-1">
              Lihat Semua Progress
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
