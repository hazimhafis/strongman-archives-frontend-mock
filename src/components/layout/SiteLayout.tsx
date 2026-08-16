import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
