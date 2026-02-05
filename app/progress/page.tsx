import { ProgressList } from "@/components/progress-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Progress Pembangunan - Cluster Cibinong",
  description: "Update progress pembangunan Cluster Cibinong secara berkala",
}

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Progress Pembangunan</h1>
        <p className="text-muted-foreground mb-8">Update berkala progress pembangunan Cluster Cibinong</p>
        <ProgressList />
      </div>
    </div>
  )
}
