"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteData from "@/content/site.json"

interface StickyWAProps {
  phone: string
}

export function StickyWA({ phone }: StickyWAProps) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(siteData.whatsappPrefill)}`

  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button size="lg" className="rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  )
}
