import { Button } from '@/components/ui/button'
import { LastPosts } from '@/components/LastPosts'

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
          <strong className="mb-10 block text-2xl font-bold">
            Últimas postagens
          </strong>

          <LastPosts />
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
