import React from 'react'

export default function PostSkeleton() {
  return (
    <>
      <span className="aspect-[auto_700/364] h-[660px] w-full animate-pulse rounded-xl bg-gray-300" />
      <section className="min-w-5xl flex w-full flex-col">
        <span className="h-[500px] w-full animate-pulse rounded-xl bg-gray-300" />
      </section>
    </>
  )
}
