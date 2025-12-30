import { UnitCard } from "@/components/unit-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import unitsData from "@/content/units.json"

export const metadata = {
  title: "Daftar Unit - Cluster Cibinong",
  description: "Lihat daftar unit yang tersedia di Cluster Cibinong",
}

export default function UnitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Daftar Unit</h1>
        <p className="text-muted-foreground mb-8">Pilih unit impian Anda di Cluster Cibinong</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitsData.units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  )
}
