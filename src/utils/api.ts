import { Client } from '@notionhq/client'

// Initializing a client with SupportedFetch
export const notion = new Client({
  auth: process.env.NOTION_TOKEN as string,
})
