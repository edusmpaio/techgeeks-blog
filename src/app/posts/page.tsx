import { LastPosts } from '@/components/LastPosts/page'
import LastPostsSkeleton from '@/components/LastPosts/skeleton'
import { Suspense } from 'react'

export default function Post() {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="pb-16">
          <div className="flex items-center justify-center py-20">
            <strong className="mb-10 block text-2xl font-bold md:text-4xl">
              Todas as postagens
            </strong>
          </div>

          <Suspense fallback={<LastPostsSkeleton />}>
            <LastPosts />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
