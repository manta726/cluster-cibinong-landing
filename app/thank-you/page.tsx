import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import siteData from "@/content/site.json"

export const metadata = {
  title: "Terima Kasih - Cluster Cibinong",
  description: "Terima kasih telah menghubungi kami",
}

export default function ThankYouPage() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappPrefill)}`

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Terima Kasih!</h1>
          <p className="text-muted-foreground mb-6">
            Data Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk informasi lebih
            lanjut.
          </p>
          <div className="space-y-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full" size="lg">
                Chat Langsung via WhatsApp
              </Button>
            </a>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Kembali ke Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
