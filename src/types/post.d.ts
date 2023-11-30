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
    Destaque: {
      id: string
      type: string
      checkbox: boolean
    }
    Status: {
      id: string
      type: string
      select: null
    }
    tags: {
      id: string
      type: string
      multi_select: [
        {
          id: string
          name: string
          color: string
        },
      ]
    }
    Slug: {
      id: string
      type: string
      formula: {
        type: string
        string: string
      }
    }
    'Imagem Capa': {
      id: string
      type: string
      files: File[]
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
