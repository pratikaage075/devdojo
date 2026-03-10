import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  const files = fs.readdirSync(articlesDir)
  
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf8')
      const { data } = matter(fileContent)
      return { slug, ...data }
    })
}

export function getArticleBySlug(slug) {
  const filePath = path.join(articlesDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { slug, meta: data, content }
}
```

---

## Step 6 — Install `gray-matter`

This package reads the `---` frontmatter (the title, tag etc.) at the top of MDX files:
```
npm install gray-matter