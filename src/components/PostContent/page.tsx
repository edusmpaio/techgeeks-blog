import React from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { NotionToMarkdown } from 'notion-to-md'
import { notion } from '@/utils/api'
import { redirect } from 'next/navigation'

export default async function PostContent({ slug }: { slug: string }) {
  const databaseId = process.env.NOTION_DATABASE_ID as string
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  const matchingPost = response.results[0] as Post

  if (!matchingPost) {
    redirect('/')
  }

  const imageLink = matchingPost.properties['Imagem Capa'].files[0]?.file.url

  const n2m = new NotionToMarkdown({ notionClient: notion })
  const postId = matchingPost.id

  const mdBlock = await n2m.pageToMarkdown(postId)
  const mdString = n2m.toMarkdownString(mdBlock)

  return (
    <>
      <div className="relative aspect-[auto_700/364] h-full min-h-[660px] w-full">
        <span className="absolute -z-10 h-full w-full animate-pulse rounded-xl bg-gray-300" />
        <Image
          src={imageLink}
          className="aspect-[auto_700/364] w-full rounded-xl"
          alt=""
          width={700}
          height={450}
        />
      </div>
      <section className="min-w-5xl flex w-full flex-col">
        <Markdown className="prose prose-lg w-full max-w-none lg:prose-xl prose-h1:text-3xl prose-h2:text-primary prose-h3:text-xl prose-p:text-muted-foreground prose-strong:text-muted-foreground prose-li:text-muted-foreground">
          {mdString.parent}
        </Markdown>
      </section>
    </>
  )
}
