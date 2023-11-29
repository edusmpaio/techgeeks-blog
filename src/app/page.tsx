import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import LastPostsSkeleton from '@/components/LastPosts/skeleton'
import { LastPosts } from '@/components/LastPosts/page'
import FeaturedPosts from '@/components/FeaturedPosts/page'
import FeaturedPostsSkeleton from '@/components/FeaturedPosts/skeleton'
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
            <Button size="lg" className="md:text-lg" asChild>
              <Link href="/posts">Comece a ler</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col gap-24 pb-16">
          <Suspense fallback={<FeaturedPostsSkeleton />}>
            <FeaturedPosts key="Featured Posts" />
          </Suspense>

          <div>
            <strong className="mb-10 block text-2xl font-bold">
              Últimas postagens
            </strong>

            <Suspense fallback={<LastPostsSkeleton />}>
              <LastPosts />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
