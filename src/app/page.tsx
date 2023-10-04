import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <section>
        <div className="container py-20">
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
        <div className="container">
          <strong className="font-bold">Últimas postagens</strong>
        </div>
      </section>
    </main>
  )
}
