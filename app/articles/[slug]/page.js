import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return [
    { slug: 'how-to-setup-git' },
    { slug: 'what-happens-when-you-type-a-url' },
    { slug: 'npm-explained' },
    { slug: 'campus-placement-rounds' },
    { slug: 'commit-messages' },
    { slug: 'first-open-source-pr' },
  ]
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />
}