import { Posts } from '@/components/Posts/page'
import PostsSkeleton from '@/components/Posts/skeleton'
import { Suspense } from 'react'

export const revalidate = 120

export default function Post() {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="pb-16">
          <div className="flex items-center py-10">
            <strong className="block text-2xl font-bold md:text-3xl">
              Todas as postagens
            </strong>
          </div>

          <Suspense fallback={<PostsSkeleton />}>
            <Posts />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
