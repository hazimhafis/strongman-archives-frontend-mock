import { createContext, type ReactNode, useState } from "react"
import { Drawer as VaulHeader } from "vaul"

import { useMediaQuery } from "@/hooks/useMediaQuery"

interface DrawerContextProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined)

interface HeaderDrawerProps {
  children: ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
  drawerBtn?: (() => ReactNode) | null
}

export function HeaderDrawer({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  drawerBtn,
}: HeaderDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen =
    controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <VaulHeader.Root
        open={open}
        direction="top"
        onOpenChange={setOpen}
        dismissible={!isDesktop}
      >
        {drawerBtn ? (
          <VaulHeader.Trigger asChild>{drawerBtn()}</VaulHeader.Trigger>
        ) : null}
        <VaulHeader.Portal>
          <VaulHeader.Overlay
            className="fixed inset-0 z-50 bg-background/50 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />
          <VaulHeader.Content className="fixed top-0 left-0 z-50 h-fit w-full border-b bg-card py-3">
            <VaulHeader.Title className="sr-only">
              Site navigation
            </VaulHeader.Title>
            {children}
          </VaulHeader.Content>
        </VaulHeader.Portal>
      </VaulHeader.Root>
    </DrawerContext.Provider>
  )
}

export function DrawerContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}
