import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import LastPostsSkeleton from '@/components/LastPosts/skeleton'
import { LastPosts } from '@/components/LastPosts/page'

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

          <Suspense fallback={<LastPostsSkeleton />}>
            <LastPosts />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
