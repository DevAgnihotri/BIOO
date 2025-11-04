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
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-extralight leading-tight">
              Everything you are.
              <br />
              <span className="text-orange-500">In one simple link.</span>
            </h1>
            
            <p className="text-lg font-light text-white/70 leading-relaxed">
              Join millions using LinkTree for their link in bio. One link to share everything you create from Instagram, TikTok, Twitter, YouTube and more.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="yourname"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 font-light"
                />
                <button
                  onClick={createHandle}
                  className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-light"
                >
                  Claim your link
                </button>
              </div>
              <p className="text-sm font-light text-white/50">
                linktr.ee/<span className="text-blue-400">{text || "yourname"}</span>
              </p>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl border border-white/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto"></div>
                <div className="space-y-2">
                  <div className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                  <div className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                  <div className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors">
            <h3 className="text-2xl font-light mb-4">Share your links</h3>
            <p className="text-white/60 font-light">Add all your important links in one place and share them easily.</p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-light mb-4">Track your clicks</h3>
            <p className="text-white/60 font-light">See how many people are clicking on your links and content.</p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors">
            <h3 className="text-2xl font-light mb-4">Customize your page</h3>
            <p className="text-white/60 font-light">Make it yours with themes, colors, and custom backgrounds.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
