import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Curriculum } from "@/components/curriculum"
import { Principles } from "@/components/principles"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { BuiltWithV0 } from "@/components/built-with-v0"

export default function Page() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Curriculum />
      <Principles />
      <FAQ />
      <CTA />
      <Footer />
      <MobileNav />
      <BuiltWithV0 />
    </main>
  )
}
