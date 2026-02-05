import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqData from "@/content/faq.json"
import { HelpCircle } from "lucide-react"

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
            <HelpCircle size={16} />
            Pertanyaan Umum
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Ada yang Ingin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ditanyakan?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah jawaban untuk pertanyaan yang sering diajukan tentang Cluster Cibinong
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 py-1 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Masih ada pertanyaan?</h3>
          <p className="text-muted-foreground mb-6">
            Tim kami siap membantu Anda dengan informasi lebih lengkap
          </p>
          <a href="https://wa.me/62812XXXXXXX" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/30 transform hover:-translate-y-1">
              Hubungi Tim Kami
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
