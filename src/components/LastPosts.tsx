import Link from 'next/link'
import Image from 'next/image'

import { notion } from '@/utils/api'
import { calculatePostDate } from '@/utils/calculatePostDate'
import { calculateReadingTime } from '@/utils/calculateReadingTime'
import { NotionToMarkdown } from 'notion-to-md'

export async function LastPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID as string
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  const posts = response.results as Post[]
  const n2m = new NotionToMarkdown({ notionClient: notion })

  if (!posts) return null

  return (
    <div className="grid gap-9 md:grid-cols-2">
      {posts.map(async (post) => {
        const postId = post.id
        const postMDBlock = await n2m.pageToMarkdown(postId)
        const postMDString = n2m.toMarkdownString(postMDBlock)
        const postContent = postMDString.parent || ''

        const dateDiff = calculatePostDate(new Date(post.created_time))
        const readingTime = calculateReadingTime(postMDString.parent)
        const image = post.properties['Imagem Capa'].files[0]?.file.url

        return (
          <Link key={post.id} href="/">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
              <div className="absolute h-full w-full bg-zinc-900/10" />
              {image && <Image src={image} alt="" width={700} height={450} />}
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
  )
}
