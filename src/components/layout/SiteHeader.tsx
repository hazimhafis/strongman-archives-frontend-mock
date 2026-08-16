import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import { SiteLogo } from "@/components/SiteLogo"
import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import {
  DrawerContent,
  HeaderDrawer,
} from "@/components/ui/responsive-header"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/athletes", label: "Athletes" },
  { to: "/results", label: "Results" },
  { to: "/records", label: "Records" },
]

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "text-nav rounded-md px-2.5 py-2 transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
              className,
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
  const [headerOpen, setHeaderOpen] = useState(false)
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setHeaderOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="relative flex h-full items-center justify-between gap-4">
        <SiteLogo />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <NavLinks />
        </nav>
        <HeaderDrawer
          open={headerOpen}
          setOpen={setHeaderOpen}
          drawerBtn={() => (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        >
          <DrawerContent>
            {!isDesktop && (
              <div className="absolute bottom-1 left-0 flex w-full justify-center">
                <div className="my-4 h-[0.30rem] w-16 shrink-0 rounded-full bg-muted-foreground" />
              </div>
            )}
            <div className="mx-auto w-full max-w-[1280px] px-4 pb-6 md:px-8 lg:px-20">
              <div className="flex items-center border-b py-2">
                <SiteLogo />
              </div>
              <nav className="flex flex-col gap-1 py-2">
                <NavLinks
                  onNavigate={() => setHeaderOpen(false)}
                  className="px-0 py-2.5"
                />
              </nav>
            </div>
          </DrawerContent>
        </HeaderDrawer>
      </Container>
    </header>
  )
}
