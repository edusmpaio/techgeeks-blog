import { Posts } from '@/components/Posts/page'
import PostsSkeleton from '@/components/Posts/skeleton'
import React, { Suspense } from 'react'

export const revalidate = 120

export default function NewsPage() {
  return (
    <section className="min-h-[790px]">
      <div className="container flex flex-col">
        <div className="pb-16">
          <div className="flex items-center py-10">
            <strong className="block text-2xl font-bold md:text-3xl">
              # Notícias
            </strong>
          </div>

          <Suspense fallback={<PostsSkeleton />}>
            <Posts tags="news" />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
