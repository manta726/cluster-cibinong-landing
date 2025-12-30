import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqData from "@/content/faq.json"

export function Faq() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-center text-muted-foreground mb-12">
          Jawaban untuk pertanyaan umum seputar Cluster Cibinong
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqData.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
