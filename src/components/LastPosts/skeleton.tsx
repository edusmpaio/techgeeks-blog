import React from 'react'

export default function LastPostsSkeleton() {
  const numberOfSkeletons = 4
  return (
    <div className="grid gap-9 md:grid-cols-2">
      {[...Array(numberOfSkeletons)].map((n) => (
        <div className="w-full" key={n}>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
            <div className="absolute h-full w-full bg-zinc-900/10" />
          </div>

          <div className="mt-4 flex w-full flex-col justify-between">
            <span className="h-36 w-full animate-pulse rounded-xl bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  )
}
