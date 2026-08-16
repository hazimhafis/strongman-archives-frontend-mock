import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"

import { SiteLogo } from "@/components/SiteLogo"
import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/athletes", label: "Athletes" },
  { to: "/results", label: "Results" },
  { to: "/records", label: "Records" },
]

function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            cn(
              "text-nav rounded-md px-2.5 py-2 transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="relative flex h-full items-center justify-between gap-4">
        <SiteLogo />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <NavLinks />
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-44">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.to} asChild>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className="aria-[current=page]:text-primary"
                >
                  {item.label}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </header>
  )
}
