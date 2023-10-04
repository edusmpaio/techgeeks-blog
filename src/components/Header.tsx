'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const postCategories = [
  {
    id: 1,
    title: 'Programação',
    subtitle: 'Desenvolvimento de Software',
  },
  {
    id: 2,
    title: 'Notícias em tecnologia',
    subtitle: 'Veja as notícias mais recentes',
  },
  {
    id: 3,
    title: 'Games',
    subtitle: 'Videogames e eSports',
  },
]

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-5">
        <Link href="/">
          <strong className="text-xl">techgeeks</strong>
        </Link>

        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-52 p-1 pb-[6px] pr-[6px]">
                    {postCategories.map((category) => {
                      return (
                        <a
                          key={category.id}
                          href="#"
                          className="block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <li className="text-sm leading-none">
                            <p>{category.title}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {category.subtitle}
                            </p>
                          </li>
                        </a>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button>Fazer Login</Button>
        </div>
      </div>
    </header>
  )
}
