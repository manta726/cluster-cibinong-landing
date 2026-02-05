import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Square, Bed, Bath } from "lucide-react"
import siteData from "@/content/site.json"

interface Unit {
  id: string
  name: string
  type: string
  landSize: number
  buildingSize: number
  bedrooms: number
  bathrooms: number
  price: number
  status: "available" | "booked"
}

interface UnitCardProps {
  unit: Unit
}

export function UnitCard({ unit }: UnitCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(unit.price)

  const waLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya tertarik dengan unit ${unit.name} (${unit.type})`,
  )}`

  return (
    <Card className={unit.status === "booked" ? "opacity-75" : ""}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{unit.name}</h3>
            <p className="text-sm text-muted-foreground">{unit.type}</p>
          </div>
          <Badge variant={unit.status === "available" ? "default" : "secondary"}>
            {unit.status === "available" ? "Tersedia" : "Terbooking"}
          </Badge>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Square className="h-4 w-4" />
            <span>
              LT: {unit.landSize}m² / LB: {unit.buildingSize}m²
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4" />
              <span>{unit.bedrooms} KT</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4" />
              <span>{unit.bathrooms} KM</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-2xl font-bold text-primary">{formattedPrice}</p>
        </div>

        {unit.status === "available" ? (
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Tanya Unit Ini</Button>
          </a>
        ) : (
          <Button className="w-full" disabled>
            Unit Terbooking
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
