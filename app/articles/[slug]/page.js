"use client";
import { useState, use, useEffect } from "react";
import Link from "next/link";

const sidebarLinks = [
  { slug: "how-to-setup-git", title: "Setting Up Git", tag: "Dev Setup", color: "#FF6B35" },
  { slug: "what-happens-when-you-type-a-url", title: "What Happens at a URL", tag: "CS Fundamentals", color: "#F59E0B" },
  { slug: "npm-explained", title: "npm for Beginners", tag: "Modern Tooling", color: "#A78BFA" },
];

// Renders markdown text into styled HTML elements
function renderMarkdown(content) {
  if (!content) return null;
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={i} style={{ background: "#1A1A2E", borderRadius: 10, overflow: "hidden", border: "1px solid #2A2A3E", margin: "16px 0" }}>
          <div style={{ background: "#13131F", padding: "8px 16px", display: "flex", gap: 6, borderBottom: "1px solid #2A2A3E" }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
          </div>
          <pre style={{ padding: 20, margin: 0, overflowX: "auto" }}>
            <code style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", fontSize: 13, color: "#E8E8F0", lineHeight: 1.7 }}>
              {codeLines.join('\n')}
            </code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const text = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      elements.push(
        <blockquote key={i} style={{ background: "#FFF8F5", borderLeft: "4px solid #FF6B35", padding: "14px 18px", borderRadius: "0 8px 8px 0", margin: "20px 0" }}>
          <p style={{ margin: 0, fontSize: 15, color: "#3A3A5C", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: text }} />
        </blockquote>
      );
      i++; continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: "36px 0 14px", color: "#1A1A2E" }}>
          {line.slice(3)}
        </h2>
      );
      i++; continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{ fontSize: 17, fontWeight: 700, margin: "24px 0 10px", color: "#1A1A2E" }}>
          {line.slice(4)}
        </h3>
      );
      i++; continue;
    }

    // Bullet list
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const text = lines[i].slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        items.push(<li key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "#3A3A5C", marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: text }} />);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} style={{ paddingLeft: 24, marginBottom: 16 }}>{items}</ul>);
      continue;
    }

    // Horizontal rule
    if (line.startsWith('---')) {
      elements.push(<hr key={i} style={{ border: "none", borderTop: "1px solid #E8E4DC", margin: "32px 0" }} />);
      i++; continue;
    }

    // Empty line
    if (line.trim() === '') { i++; continue; }

    // Regular paragraph
    const text = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#FF6B35;text-decoration:none;border-bottom:1px solid #FF6B3544">$1</a>')
      .replace(/`([^`]+)`/g, '<code style="background:#1A1A2E;color:#FF6B35;padding:2px 7px;border-radius:5px;font-size:13px;font-family:monospace">$1</code>');

    elements.push(
      <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: "#3A3A5C", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: text }} />
    );
    i++;
  }

  return elements;
}

export default function ArticlePage({ params }) {
  const { slug } = use(params);
  const [article, setArticle] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/article/${slug}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setArticle(data))
      .catch(() => setNotFound(true));
  }, [slug]);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#F5F2EB", minHeight: "100vh", color: "#1A1A2E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .sidebar-link { transition: all 0.15s; text-decoration: none; display: block; }
        .sidebar-link:hover { background: #F0EDE6 !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: "#1A1A2E", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: 22 }}>📚</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "#F5F2EB" }}>DevDojo</span>
        </Link>
        <Link href="/" style={{ color: "#A0A0C0", fontSize: 14, textDecoration: "none" }}>← Back to home</Link>
      </nav>

      <div style={{ display: "flex", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* SIDEBAR */}
        <aside style={{ width: 240, flexShrink: 0, paddingTop: 40, paddingRight: 24, position: "sticky", top: 60, alignSelf: "flex-start", height: "calc(100vh - 60px)", overflowY: "auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "#9999AA", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Articles</div>
          {sidebarLinks.map(link => (
            <Link key={link.slug} href={`/articles/${link.slug}`} className="sidebar-link"
              style={{ padding: "10px 12px", borderRadius: 8, marginBottom: 4, background: slug === link.slug ? "#1A1A2E" : "transparent" }}>
              <div style={{ fontSize: 11, color: slug === link.slug ? link.color : "#9999AA", fontWeight: 700, marginBottom: 2 }}>{link.tag}</div>
              <div style={{ fontSize: 13, color: slug === link.slug ? "white" : "#1A1A2E", fontWeight: slug === link.slug ? 600 : 400, lineHeight: 1.4 }}>{link.title}</div>
            </Link>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, paddingTop: 40, paddingBottom: 80, minWidth: 0 }}>
          {notFound && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
              <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Article not found</h1>
              <Link href="/" style={{ color: "#FF6B35", textDecoration: "none" }}>← Back to homepage</Link>
            </div>
          )}

          {!article && !notFound && (
            <div style={{ padding: "80px 0", textAlign: "center", color: "#9999AA", fontSize: 15 }}>
              Loading article...
            </div>
          )}

          {article && (
            <div>
              {/* Article Header */}
              <div style={{ marginBottom: 40 }}>
                <span style={{ background: (article.meta?.tagColor || "#FF6B35") + "18", color: article.meta?.tagColor || "#FF6B35", fontSize: 12, padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>
                  {(article.meta?.tag || "Article").toUpperCase()}
                </span>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, lineHeight: 1.2, marginTop: 16, marginBottom: 16 }}>
                  {article.meta?.title}
                </h1>
                {article.meta?.intro && (
                  <p style={{ fontSize: 18, color: "#6B6B8A", lineHeight: 1.7, borderLeft: `4px solid ${article.meta?.tagColor || "#FF6B35"}`, paddingLeft: 16 }}>
                    {article.meta.intro}
                  </p>
                )}
                <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                  <span style={{ fontSize: 12, color: "#9999AA" }}>⏱ {article.meta?.readTime}</span>
                  <span style={{ fontSize: 12, color: "#9999AA" }}>📅 {article.meta?.lastUpdated}</span>
                </div>
                <div style={{ height: 1, background: "#E8E4DC", marginTop: 24 }} />
              </div>

              {/* Rendered MDX content */}
              <div>{renderMarkdown(article.content)}</div>

              {/* Footer nav */}
              <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid #E8E4DC", display: "flex", justifyContent: "space-between" }}>
                <Link href="/" style={{ textDecoration: "none", color: "#6B6B8A", fontSize: 14 }}>← Back to all articles</Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}