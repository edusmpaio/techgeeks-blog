import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: '/simpleLogo.png',
  title: 'Techgeeks',
  description: 'O seu blog sobre cultura tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="border-t py-8 md:py-0">
            <div className="container flex items-center justify-center md:h-24 md:justify-start">
              <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left">
                Blog da TechGeeks © 2023 • Todos os direitos reservados
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
