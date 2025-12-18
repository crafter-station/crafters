"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is it really free?",
      answer: "Yes. Completely free. No payment, no upsells.",
    },
    {
      question: "Do you guarantee a job?",
      answer:
        "No. We do not promise outcomes we can't control. We do help you build a real portfolio, real skills, and the habit of shipping.",
    },
    {
      question: "Do I need to be advanced?",
      answer: "No. Consistency matters more than experience.",
    },
    {
      question: "Can I work with a team?",
      answer: "Yes, if the scope stays realistic and everyone ships weekly.",
    },
    {
      question: "Can I build any project?",
      answer: "Yes, but we encourage products that are simple, useful, and trustworthy. Avoid another chatbot.",
    },
  ]

  return (
    <section id="faq" className="border-b border-border py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">FAQ</h2>

        <div className="mt-12 space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-foreground"
              >
                <span className="text-lg font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && <div className="pb-6 text-pretty text-muted-foreground">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
