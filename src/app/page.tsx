import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notion } from '@/utils/api'
import Image from 'next/image'
import { calculatePostDate } from '@/utils/calculatePostDate'
import { calculateReadingTime } from '@/utils/calculateReadingTime'

export default async function Home() {
  const databaseId = 'f15652bb6bb446b287d62ee7bdb91fb3'
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  const posts = response.results as Post[]

  if (!posts) return null

  return (
    <main>
      <section>
        <div className="container py-28">
          <div className="mx-auto max-w-lg text-center md:max-w-xl">
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              Descubra o Mundo Tech em Primeira Mão
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-lg">
              Explore o universo da tecnologia com as últimas notícias, análises
              e tendências no blog TechGeeks.
            </p>
            <Button size="lg" className="md:text-lg">
              Comece a ler
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container pb-16">
          <strong className="mb-6 block text-2xl font-bold">
            Últimas postagens
          </strong>
          <div className="grid gap-9 md:grid-cols-2">
            {posts.map((post) => {
              const dateDiff = calculatePostDate(new Date(post.created_time))
              const readingTime = calculateReadingTime(
                post.properties.Conteúdo.rich_text[0].text.content,
              )
              const image = post.properties['Imagem Capa'].files[0]?.file.url
              return (
                <Link key={post.id} href="/">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
                    <div className="absolute w-full bg-zinc-900/40" />
                    {image && (
                      <Image src={image} alt="" width={700} height={450} />
                    )}
                  </div>

                  <strong className="mb-4 mt-8 block text-xl sm:max-md:text-2xl lg:text-2xl">
                    {post.properties.Nome.title[0].text.content}
                  </strong>
                  <p className="mb-11 line-clamp-2 leading-relaxed text-muted-foreground">
                    {post.properties.Conteúdo.rich_text[0].text.content}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    <span>
                      {readingTime < 1
                        ? 'Menos de 1 minuto'
                        : `${readingTime} minuto`}
                    </span>{' '}
                    •<span>há {dateDiff}</span>
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t py-8 md:py-0">
        <div className="container flex items-center justify-center md:h-24 md:justify-start">
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Blog da TechGeeks © 2023 • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
