import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import progressData from "@/content/progress.json"

export function ProgressList() {
  return (
    <div className="space-y-6">
      {progressData.updates.map((update, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              {update.date}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{update.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{update.summary}</p>
            <div className="grid grid-cols-2 gap-4">
              {update.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img || "/placeholder.svg"}
                  alt={`Progress ${update.title} ${imgIndex + 1}`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
