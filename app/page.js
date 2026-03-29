
"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

const topics = [
  { icon: "🛠️", label: "Dev Setup", color: "#FF6B35", desc: "Git, VS Code, WSL" },
  { icon: "🎯", label: "Placement Prep", color: "#4ECDC4", desc: "Aptitude + Coding rounds" },
  { icon: "📦", label: "Modern Tooling", color: "#A78BFA", desc: "Docker, npm, CI/CD" },
  { icon: "🧠", label: "CS Fundamentals", color: "#F59E0B", desc: "Visualized concepts" },
  { icon: "📄", label: "Resume & LinkedIn", color: "#34D399", desc: "Fresher templates" },
  { icon: "🤝", label: "Open Source", color: "#F472B6", desc: "Your first PR" },
  { icon: "🏢", label: "Industry Reality", color: "#60A5FA", desc: "What college skips" },
  { icon: "🤖", label: "AI-Era Skills", color: "#FB923C", desc: "Copilot, LLM basics" },
];

const featuredArticles = [
  { slug: "how-to-setup-git", tag: "Dev Setup", tagColor: "#FF6B35", title: "How to Set Up Git on Windows (The Right Way)", time: "8 min read", icon: "🛠️" },
  { slug: "campus-placement-rounds", tag: "Placement Prep", tagColor: "#4ECDC4", title: "What Actually Happens in a Campus Placement Round", time: "12 min read", icon: "🎯" },
  { slug: "commit-messages", tag: "Industry Reality", tagColor: "#60A5FA", title: "How to Write a Commit Message Your Team Won't Hate", time: "5 min read", icon: "🏢" },
  { slug: "first-open-source-pr", tag: "Open Source", tagColor: "#F472B6", title: "Your First Open Source PR: A Step-by-Step Walkthrough", time: "15 min read", icon: "🤝" },
  { slug: "what-happens-when-you-type-a-url", tag: "CS Fundamentals", tagColor: "#F59E0B", title: "What Actually Happens When You Type a URL", time: "10 min read", icon: "🧠" },
  { slug: "npm-explained", tag: "Modern Tooling", tagColor: "#A78BFA", title: "npm Explained for Absolute Beginners", time: "7 min read", icon: "📦" },
];

const stats = [
  { value: "120+", label: "Articles" },
  { value: "8", label: "Topic Tracks" },
  { value: "Free", label: "Forever" },
  { value: "No Ads", label: "Ever" },
];

export default function Homepage() {
  const [searchVal, setSearchVal] = useState("");
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const filtered = featuredArticles.filter(a =>
    a.title.toLowerCase().includes(searchVal.toLowerCase()) ||
    a.tag.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#F5F2EB",
      minHeight: "100vh",
      color: "#1A1A2E",
    }}>
      {/* Import Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F5F2EB; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important; }
        .topic-btn { transition: all 0.15s; cursor: pointer; }
        .topic-btn:hover { transform: translateY(-2px); }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; opacity: 0; }
        .search-input:focus { outline: none; border-color: #1A1A2E !important; }
        .nav-link { transition: color 0.15s; }
        .nav-link:hover { color: #FF6B35 !important; }
      `}</style>

      {/* NAV */}
      <nav style={{
        background: "#1A1A2E", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60, position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>📚</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "#F5F2EB", letterSpacing: "-0.02em" }}>
            DevDojo
          </span>
          <span style={{ background: "#FF6B35", color: "white", fontSize: 10, padding: "2px 7px", borderRadius: 20, fontWeight: 600, marginLeft: 4, letterSpacing: "0.05em" }}>BETA</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Topics", "Tracks", "Blog", "About"].map(n => (
            <span key={n} className="nav-link" style={{ color: "#A0A0C0", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{n}</span>
          ))}
          <button style={{ background: "#FF6B35", color: "white", border: "none", padding: "8px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
            Start Learning →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#1A1A2E", padding: "80px 32px 100px", position: "relative", overflow: "hidden" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #FF6B3522 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: "40%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #A78BFA18 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <div className="fade-up" style={{ animationDelay: "0.05s" }}>
            <span style={{ background: "#FF6B3520", color: "#FF6B35", fontSize: 13, padding: "6px 16px", borderRadius: 20, fontWeight: 600, border: "1px solid #FF6B3540", display: "inline-block", marginBottom: 24 }}>
              🎓 Built for Indian CS college students
            </span>
          </div>
          <h1 className="fade-up" style={{ animationDelay: "0.15s", fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#F5F2EB", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Learn what college<br />
            <span style={{ color: "#FF6B35" }}>forgot to teach you.</span>
          </h1>
          <p className="fade-up" style={{ animationDelay: "0.25s", color: "#8888A8", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Practical guides on dev setup, placement prep, open source, and industry skills — the stuff W3Schools and GFG never cover.
          </p>

          {/* Search Bar */}
          <div className="fade-up" style={{ animationDelay: "0.35s", position: "relative", maxWidth: 500, margin: "0 auto 48px" }}>
            <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 18, color: "#8888A8" }}>🔍</span>
            <input
              className="search-input"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search topics... e.g. 'Git', 'placement', 'resume'"
              style={{
                width: "100%", padding: "16px 20px 16px 50px",
                fontSize: 15, border: "2px solid #2A2A3E",
                borderRadius: 12, background: "#13131F", color: "#F5F2EB",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Stats */}
          <div className="fade-up" style={{ animationDelay: "0.45s", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#F5F2EB" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#6B6B8A", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div style={{ background: "#1A1A2E", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0,48 C360,0 1080,48 1440,0 L1440,48 Z" fill="#F5F2EB" />
        </svg>
      </div>

      {/* TOPIC GRID */}
      <section style={{ padding: "64px 32px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, letterSpacing: "-0.02em" }}>Browse by Topic</h2>
            <p style={{ color: "#6B6B8A", fontSize: 14, marginTop: 4 }}>8 tracks designed for college students</p>
          </div>
          <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>View all →</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {topics.map((t, i) => (
            <div
              key={t.label}
              className="topic-btn"
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              style={{
                background: activeIdx === i ? t.color : "white",
                border: `2px solid ${activeIdx === i ? t.color : "#E8E4DC"}`,
                borderRadius: 14, padding: "20px 18px",
                boxShadow: activeIdx === i ? `0 8px 24px ${t.color}44` : "0 2px 8px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: activeIdx === i ? "white" : "#1A1A2E", marginBottom: 4 }}>{t.label}</div>
              <div style={{ fontSize: 12, color: activeIdx === i ? "rgba(255,255,255,0.8)" : "#9999AA" }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ padding: "0 32px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, letterSpacing: "-0.02em" }}>
              {searchVal ? `Results for "${searchVal}"` : "Featured Articles"}
            </h2>
            <p style={{ color: "#6B6B8A", fontSize: 14, marginTop: 4 }}>{filtered.length} articles</p>
          </div>
          {!searchVal && <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Browse all →</span>}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9999AA" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>No results for "{searchVal}"</div>
            <div style={{ fontSize: 14, marginTop: 6 }}>Try a different keyword</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {filtered.map((a, i) => (
              <div key={i} className="card-hover" style={{
                background: "white", borderRadius: 16, padding: 24,
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #E8E4DC",
                borderTop: `4px solid ${a.tagColor}`
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ background: a.tagColor + "18", color: a.tagColor, fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 700, letterSpacing: "0.05em" }}>
                    {a.tag.toUpperCase()}
                  </span>
                  <span style={{ fontSize: 20 }}>{a.icon}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, marginBottom: 16, color: "#1A1A2E" }}>{a.title}</h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#9999AA" }}>⏱ {a.time}</span>
                <Link href={`/articles/${a.slug}`} style={{ fontSize: 12, color: a.tagColor, fontWeight: 600, textDecoration: "none" }}>Read →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "#1A1A2E", padding: "60px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🚀</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: "#F5F2EB", marginBottom: 12 }}>
            Ready to bridge the gap?
          </h2>
          <p style={{ color: "#8888A8", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            Join thousands of college students learning what the industry actually needs.
          </p>npm 
          <button style={{ background: "#FF6B35", color: "white", border: "none", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit" }}>
            Start for Free →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0D0D1A", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>📚</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#F5F2EB", fontSize: 16 }}>DevDojo</span>
        </div>
        <div style={{ fontSize: 12, color: "#6B6B8A" }}>Built for college students in India · Free forever</div>
        <div style={{ display: "flex", gap: 20 }}>
          {["GitHub", "Twitter", "Discord"].map(s => (
            <span key={s} style={{ fontSize: 12, color: "#6B6B8A", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}