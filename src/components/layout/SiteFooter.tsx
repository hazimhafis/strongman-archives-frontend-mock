import { Link } from "react-router-dom"

import { Container } from "@/components/Container"
import { SiteLogo } from "@/components/SiteLogo"

const footerLinks = [
  { to: "/athletes", label: "Athletes" },
  { to: "/news", label: "News" },
  { to: "/results", label: "Results" },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/60">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <SiteLogo />
          <p className="mt-4 text-sm text-muted-foreground">
            Contest results, athlete files, and world-title records — a modern
            archive of the strongest athletes.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-nav text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="border-t py-4">
        <p className="text-caption">
          © {new Date().getFullYear()} Strongman Archives. Mock frontend —
          athlete photos and flags from Strongman Archives.
        </p>
      </Container>
    </footer>
  )
}
