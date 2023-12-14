import { notion } from '@/utils/api'
import { calculatePostDate } from '@/utils/calculatePostDate'
import { calculateReadingTime } from '@/utils/calculateReadingTime'
import Image from 'next/image'
import Link from 'next/link'
import { NotionToMarkdown } from 'notion-to-md'
import React from 'react'

export default async function FeaturedPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID as string
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Destaque',
      checkbox: {
        equals: true,
      },
    },
  })
  const posts = response.results as Post[]
  const n2m = new NotionToMarkdown({ notionClient: notion })

  if (!posts || posts.length < 1) return null

  return (
    <div>
      <strong className="mb-10 block text-2xl font-bold">
        Postagens em Destaque
      </strong>
      <div className="grid gap-9 md:grid-cols-2">
        {posts.map(async (post) => {
          const postId = post.id
          const postSlug = post.properties.Slug.formula.string

          const postMDBlock = await n2m.pageToMarkdown(postId)
          const postMDString = n2m.toMarkdownString(postMDBlock)
          const postContent = postMDString.parent || ''

          const dateDiff = calculatePostDate(new Date(post.created_time))
          const readingTime = calculateReadingTime(postMDString.parent)
          const image = post.properties['Imagem Capa'].files[0]?.file.url

          return (
            <Link key={`featured ${post.id}`} href={`/post/${postSlug}`}>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
                <div className="absolute h-full w-full bg-zinc-900/10" />
                {image && (
                  <Image
                    unoptimized
                    src={image}
                    alt=""
                    width={700}
                    height={450}
                  />
                )}
              </div>
              <div className="mt-8 flex flex-col justify-between">
                <strong className="mb-2 block text-xl sm:max-md:text-2xl lg:text-2xl">
                  {post.properties.Nome.title[0].text.content}
                </strong>
                <p className="mb-11 line-clamp-2 leading-relaxed text-muted-foreground">
                  {postContent}
                </p>

                <p className="mt-auto text-sm text-muted-foreground/80">
                  <span>
                    {readingTime < 1
                      ? 'Menos de 1 min de leitura'
                      : `${readingTime} min de leitura`}
                  </span>{' '}
                  • <span>há {dateDiff}</span>
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
