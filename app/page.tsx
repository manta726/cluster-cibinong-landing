import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TypeSection } from "@/components/type-section"
import { MapSection } from "@/components/map-section"
import { ProgressPreview } from "@/components/progress-preview"
import { Faq } from "@/components/faq"
import { LeadForm } from "@/components/lead-form"
import { StickyWA } from "@/components/sticky-wa"
import siteData from "@/content/site.json"

export const metadata = {
  title: "Cluster Cibinong - Rumah Nyaman Mulai 500 Jutaan",
  description:
    "Cluster nyaman di Cibinong dengan tipe 40 fungsional untuk keluarga muda. Mulai 500 jutaan dengan fasilitas lengkap dan proses KPR mudah.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TypeSection />
      <MapSection />
      <ProgressPreview />
      <Faq />
      <LeadForm />
      <StickyWA phone={siteData.whatsappNumber} />
    </>
  )
}
