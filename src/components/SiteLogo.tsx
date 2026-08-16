import { Link } from "react-router-dom"

export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 text-foreground">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <span className="font-heading text-[11px] font-bold tracking-tight">
          SA
        </span>
      </span>
      {compact ? null : (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-sm font-semibold">Strongman</span>
          <span className="text-xs text-muted-foreground">Archives</span>
        </span>
      )}
    </Link>
  )
}
