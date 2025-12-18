import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Linkedin } from "lucide-react"
import { V0Logo } from "@/components/logos/v0"
import { GithubLogo } from "@/components/logos/github"
import { TwitterLogo } from "@/components/logos/twitter"

export function Hero() {
  return (
    <section className="mt-[60px] lg:mt-[180px] min-h-[530px] relative lg:h-[calc(100vh-300px)]">
      <div className="fixed top-0 left-0 right-0 h-screen -z-10 dotted-bg [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col">
          <Button
            variant="outline"
            className="w-fit rounded-full border-border bg-transparent px-3 py-1 text-xs font-medium text-foreground hover:bg-accent"
          >
            <Globe className="mr-1.5 h-3 w-3" />
            <span className="text-muted-foreground">latam/acc</span>
            <span className="mx-2 text-border">·</span>
            Applications open
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>

          <h1 className="mt-6 md:mt-10 max-w-[640px] text-[#878787] leading-tight text-[24px] md:text-[36px] font-medium font-serif">
            Build something real. Ship it.{" "}
            <span className="text-foreground">Repeat.</span>
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="h-11 px-5 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
              Apply / Join
            </Button>
            <Button variant="outline" className="h-11 px-5 border-border bg-transparent hover:bg-accent">
              View Curriculum
            </Button>
          </div>

          <p className="text-xs text-[#707070] mt-4 font-mono">Completely free. No upsells. No hidden agenda.</p>

          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span>Supported by</span>
            <a href="https://v0.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <V0Logo className="h-8" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://x.com/CrafterStation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <TwitterLogo className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/crafter-station"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubLogo className="h-5 w-5 [&_path]:fill-current" mode="light" />
            </a>
            <a
              href="https://linkedin.com/company/crafter-station"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://chat.whatsapp.com/LDLugaQtGknIKoAGXb3m61"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="WhatsApp Community"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
