import React, { Suspense } from 'react'
import PostContent from '@/components/PostContent/page'
import PostSkeleton from '@/components/PostContent/skeleton'

interface PostProps {
  params: {
    slug: string
  }
}

export default function Post({ params }: PostProps) {
  const { slug } = params

  const getPostName = (slug: string) => {
    return decodeURIComponent(
      slug.split('-').slice(0, -1).join().replaceAll(',', ' '),
    )
  }

  return (
    <main className="container flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-10">
      <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
        {getPostName(slug)}
      </h1>
      <Suspense fallback={<PostSkeleton />}>
        <PostContent slug={slug} />
      </Suspense>
    </main>
  )
}
