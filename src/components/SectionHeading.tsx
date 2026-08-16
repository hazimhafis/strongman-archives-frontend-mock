import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function SectionHeading({
  overline,
  title,
  action,
  className,
}: {
  overline: string
  title: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-overline">{overline}</p>
          <h2 className="mt-2">{title}</h2>
        </div>
        {action}
      </div>
    </div>
  )
}
