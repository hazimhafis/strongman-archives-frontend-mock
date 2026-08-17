import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Container } from "@/components/Container"
import { RecordTable } from "@/components/RecordTable"
import { SectionHeading } from "@/components/SectionHeading"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  eventRecordCategories,
  getEventRecords,
  wsmRecords,
  type EventRecordCategoryId,
} from "@/data/records"

export function RecordsPage() {
  const [category, setCategory] = useState<EventRecordCategoryId>("all")
  const filtered = useMemo(() => getEventRecords(category), [category])

  return (
    <div>
      <section className="py-16">
        <Container>
          <SectionHeading
            overline="World's Strongest Man"
            title="WSM records"
          />
          <RecordTable records={wsmRecords} />
        </Container>
      </section>

      <section className="bg-muted/50 py-16">
        <Container>
          <SectionHeading overline="Implements" title="Event records" />
          <RecordTable
            records={filtered}
            paginate
            toolbar={
              <FilterSelect
                value={category}
                onChange={(value) =>
                  setCategory(value as EventRecordCategoryId)
                }
                options={eventRecordCategories.map((item) => ({
                  value: item.id,
                  label: item.label,
                }))}
              />
            }
          />
        </Container>
      </section>
    </div>
  )
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}) {
  const selected = options.find((option) => option.value === value)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="relative inline-flex h-11 items-center rounded-lg border-0 bg-background pr-10 pl-4 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {selected?.label}
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
