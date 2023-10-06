import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section>
        <div className="container py-28">
          <div className="mx-auto max-w-lg text-center md:max-w-xl">
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              Descubra o Mundo Tech em Primeira Mão
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-lg">
              Explore o universo da tecnologia com as últimas notícias, análises
              e tendências no blog TechGeeks.
            </p>
            <Button size="lg" className="md:text-lg">
              Comece a ler
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container pb-16">
          <strong className="mb-6 block text-2xl font-bold">
            Últimas postagens
          </strong>
          <div className="grid gap-9 md:grid-cols-2">
            <Link href="/">
              <div className="aspect-video w-full rounded-lg bg-zinc-900" />

              <strong className="mb-4 mt-8 block text-xl sm:max-md:text-2xl lg:text-2xl">
                A Revolução da Inteligência Artificial: O Que Esperar em 2024
              </strong>
              <p className="mb-11 line-clamp-2 leading-relaxed text-muted-foreground">
                Descubra as tendências da IA para o próximo ano e seu impacto em
                várias indústrias.
              </p>
              <p className="text-sm text-muted-foreground/80">
                <span>5 min de leitura</span> • <span>há 2 dias</span>
              </p>
            </Link>

            <Link href="/">
              <div className="aspect-video w-full rounded-lg bg-zinc-900" />

              <strong className="mb-4 mt-8 block text-xl sm:max-md:text-2xl lg:text-2xl">
                Os Avanços da Realidade Aumentada em Aplicações do Cotidiano
              </strong>
              <p className="mb-11 line-clamp-2 leading-relaxed text-muted-foreground">
                Explore como a realidade aumentada está mudando nossas vidas
                diárias e o futuro tecnológico
              </p>
              <p className="text-sm text-muted-foreground/80">
                <span>3 min de leitura</span> • <span>há 15 horas</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 md:py-0">
        <div className="container flex items-center justify-center md:h-24 md:justify-start">
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Blog da TechGeeks © 2023 • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
