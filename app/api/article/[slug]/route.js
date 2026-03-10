import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(request, { params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return Response.json({ meta: data, content })
}