interface User {
  object: string
  id: string
}

interface File {
  name: string
  type: string
  file: {
    url: string
    expiry_time: string
  }
}

interface RichText {
  type: string
  text: {
    content: string
    link: null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null
}

interface Title {
  type: string
  text: {
    content: string
    link: null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null
}

interface Post {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: User
  last_edited_by: User
  cover: null
  icon: null
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  properties: {
    Status: {
      id: string
      type: string
      select: null
    }
    'Imagem Capa': {
      id: string
      type: string
      files: File[]
    }
    Conteúdo: {
      id: string
      type: string
      rich_text: RichText[]
    }
    Nome: {
      id: string
      type: string
      title: Title[]
    }
  }
  url: string
  public_url: null
}