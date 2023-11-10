'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
      }}
      className="rounded-md p-2 hover:bg-accent"
    >
      <Sun className="h-5 w-5 text-primary dark:hidden" />
      <Moon className="hidden h-5 w-5 text-primary dark:block" />
    </button>
  )
}
