import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import progressData from "@/content/progress.json"

export function ProgressPreview() {
  const latestProgress = progressData.updates.slice(0, 2)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Progress Pembangunan</h2>
        <p className="text-center text-muted-foreground mb-12">Update berkala untuk transparansi pembangunan</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {latestProgress.map((update, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {update.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                <p className="text-muted-foreground">{update.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/progress">
            <Button variant="outline" size="lg">
              Lihat Semua Progress
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
