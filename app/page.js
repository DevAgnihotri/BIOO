"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  
  const createHandle = async () => {
    if (!text) return

    const response = await fetch(`/api/check?handle=${text}`)
    const data = await response.json()

    if (data.exists) {
      alert("Handle already exists! Please choose another one.")
    } else {
      router.push(`/generate?handle=${text}`)
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 py-20 md:py-28">
      <section className="grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="space-y-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Human-first link hub
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your world, distilled into one human-friendly link.
          </h1>

          <p className="max-w-xl text-lg font-light text-white/70 sm:text-xl">
            Share the work you care about, spotlight what&rsquo;s new, and greet your community with a page that feels like you. BIOO makes it effortless.
          </p>

          <div className="space-y-4">
            <label className="text-sm font-medium text-white/70" htmlFor="handle-input">
              Claim your handle in seconds
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-lg focus-within:border-orange-400/80">
                <span className="text-sm text-white/40">bioo.one/</span>
                <input
                  id="handle-input"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value.trim())}
                  placeholder="yourname"
                  className="flex-1 bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>
              <button
                onClick={createHandle}
                className="rounded-2xl bg-orange-400 px-6 py-4 text-base font-semibold text-black shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Generate my link
              </button>
            </div>
            <p className="text-sm text-white/50">You can update this anytime. No credit card required.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span className="text-sm">Loved by creators</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🧡</span>
              <span className="text-sm">Designed for humans first</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_-40px_rgba(251,146,60,0.6)] backdrop-blur">
            <div className="space-y-5">
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-orange-400/80 to-blue-500/80 p-[3px]">
                <div className="h-full w-full rounded-full bg-neutral-950/80"></div>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-neutral-950/70 px-6 py-4 text-white/80">
                  “BIOO helped me grow a curious, kind community across platforms.”
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/60 px-6 py-4 text-white/60">
                  Weekly analytics digest · Smart scheduling · Personalized themes
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-5">
                  <p className="text-xs uppercase tracking-widest text-white/40">This week</p>
                  <p className="mt-2 text-2xl font-semibold text-white">+3,842</p>
                  <p className="text-sm text-blue-300">Profile Visits</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-5">
                  <p className="text-xs uppercase tracking-widest text-white/40">Top link</p>
                  <p className="mt-2 text-lg font-medium text-white">“Studio tour”</p>
                  <p className="text-sm text-orange-300">57% click-through</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Share more than links. Share context.</h2>
          <p className="max-w-2xl text-lg text-white/60">
            Curate collections, spotlight launches, and help people understand why it matters. Your BIOO page keeps everything warm, clear, and on-brand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Guided storytelling",
              copy: "Organize by moments, not just platforms, so visitors instantly understand what to tap first.",
              accent: "from-orange-400/40 to-orange-400/0",
            },
            {
              title: "Trusted analytics",
              copy: "See what resonates in real time with clean, human-friendly insights you actually want to read.",
              accent: "from-blue-400/40 to-blue-400/0",
            },
            {
              title: "Effortless styling",
              copy: "Start with thoughtful templates, then dial in colors, typography, and textures that feel personal.",
              accent: "from-white/30 to-white/0",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors backdrop-blur`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950/70 text-lg">
                  {index === 0 ? "💬" : index === 1 ? "📊" : "🎨"}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{feature.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 px-8 py-14 backdrop-blur">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to greet your audience with a friendly hello?</h2>
            <p className="max-w-xl text-base text-white/70">
              Pick a template, drop in your must-click moments, and you&rsquo;re live. BIOO is your warm welcome across every platform.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={createHandle}
              className="rounded-full bg-orange-400 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/40 transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
            >
              Start building
            </button>
            <button
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/80 transition-colors hover:border-blue-400 hover:text-white"
              onClick={() => router.push("/generate")}
            >
              Preview templates
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
