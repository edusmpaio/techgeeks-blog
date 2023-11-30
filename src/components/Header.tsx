import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeSwitch } from './ThemeSwitch'
import { CircuitBoard } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-5">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-1">
              <CircuitBoard size={24} />
              <strong className="text-xl">techgeeks</strong>
            </div>
          </Link>

          <nav className="hidden items-center space-x-8 text-sm sm:flex">
            <Link
              href="/posts/news"
              className="text-foreground/60 hover:text-foreground/80"
            >
              Notícias
            </Link>
            <Link
              href="/posts/programming"
              className="text-foreground/60 hover:text-foreground/80"
            >
              Programação
            </Link>
            <Link
              href="/posts/games"
              className="text-foreground/60 hover:text-foreground/80"
            >
              Games
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button>Fazer Login</Button>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
