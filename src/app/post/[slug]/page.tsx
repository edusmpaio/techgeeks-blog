import { notion } from '@/utils/api'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { NotionToMarkdown } from 'notion-to-md'
import Markdown from 'react-markdown'
import React from 'react'

interface PostProps {
  params: {
    slug: string
  }
}

export default async function Post({ params }: PostProps) {
  const { slug } = params
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

  const title = matchingPost.properties.Nome.title[0].text.content
  const imageLink = matchingPost.properties['Imagem Capa'].files[0]?.file.url
  const postCreatedAt = matchingPost.created_time

  const n2m = new NotionToMarkdown({ notionClient: notion })
  const postId = matchingPost.id

  const mdBlock = await n2m.pageToMarkdown(postId)
  const mdString = n2m.toMarkdownString(mdBlock)

  return (
    <main className="container flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-10">
      <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
        {title}
      </h1>
      <Image
        src={imageLink}
        className="relative aspect-[auto_700/364] w-full rounded-xl"
        alt=""
        width={700}
        height={450}
      />
      <section className="min-w-5xl flex w-full flex-col">
        <Markdown className="prose prose-lg w-full max-w-none lg:prose-xl prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl">
          {mdString.parent}
        </Markdown>
      </section>
    </main>
  )
}
