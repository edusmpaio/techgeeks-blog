'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-5">
        <Link href="/">
          <strong className="text-xl">techgeeks</strong>
        </Link>

        <nav className="hidden space-x-6 text-sm sm:block">
          <a href="#" className="text-foreground/60 hover:text-foreground/80">
            Programação
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground/80">
            Notícias
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground/80">
            Games
          </a>
        </nav>

        <Button>Fazer Login</Button>
      </div>
    </header>
  )
}
