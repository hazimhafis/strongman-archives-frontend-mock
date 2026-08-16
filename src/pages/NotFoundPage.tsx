import { Link } from "react-router-dom"

import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        <p className="text-overline">404</p>
        <h1 className="mt-3 text-display">This file is missing.</h1>
        <p className="mt-4 text-body-lg text-muted-foreground">
          The page you asked for is not in the archive.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link to="/">Return home</Link>
        </Button>
      </Container>
    </section>
  )
}
