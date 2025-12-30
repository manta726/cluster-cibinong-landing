import siteData from "@/content/site.json"

export function MapSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Lokasi</h2>
        <p className="text-center text-muted-foreground mb-8">Lokasi strategis di Cibinong dengan akses mudah</p>
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={siteData.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
