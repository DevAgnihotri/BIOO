"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function GenerateClient({ initialHandle = "" }) {
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(initialHandle)
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) => (i === index ? { link, linktext } : item))
    )
  }

  const addLink = () => setLinks(links.concat([{ link: "", linktext: "" }]))

  const submitLinks = async () => {
    const raw = JSON.stringify({ links, handle, pic, desc })
    try {
      const r = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: raw,
      })
      const result = await r.json()
      if (result.success) {
        toast.success(result.message)
        setLinks([{ link: "", linktext: "" }])
        setpic("")
        sethandle("")
      } else {
        toast.error(result.message || "Something went wrong")
      }
    } catch (e) {
      toast.error("Network error")
    }
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] bg-transparent text-white'>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 md:py-28">
        <ToastContainer theme="dark" />

        <div className='space-y-4 text-center md:text-left'>
          <span className='inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70'>
            Craft your LinkTree
          </span>
          <h1 className='text-4xl font-semibold leading-tight text-white sm:text-5xl'>Shape a page that feels like a warm hello.</h1>
          <p className='max-w-2xl text-base text-white/60 sm:text-lg'>We&rsquo;ll guide you through the essentials—handle, links, and a human bio. Add personality along the way.</p>
        </div>

        <div className='grid gap-10 md:grid-cols-2'>
          <div className='space-y-10'>
            <div className='space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
              <h2 className='text-lg font-semibold text-white'>Step 1 · Your handle</h2>
              <p className='text-sm text-white/60'>This is the doorway to your world. Keep it simple and recognisable.</p>
              <div className='rounded-2xl border border-white/15 bg-neutral-950/70 px-5 py-4 focus-within:border-orange-400/70'>
                <div className='flex items-center gap-2 text-sm text-white/40'>linktr.ee/
                  <input
                    value={handle || ""}
                    onChange={e => sethandle(e.target.value)}
                    className='flex-1 bg-transparent text-lg text-white placeholder:text-white/30 focus:outline-none'
                    type="text"
                    placeholder='yourname'
                  />
                </div>
              </div>
              <p className='text-xs text-white/50'>We&rsquo;ll check availability before we publish.</p>
            </div>

            <div className='space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
              <h2 className='text-lg font-semibold text-white'>Step 3 · Profile details</h2>
              <p className='text-sm text-white/60'>A friendly face and a sentence about what you&rsquo;re up to makes a big difference.</p>
              <div className='space-y-4'>
                <input
                  value={pic || ""}
                  onChange={e => setpic(e.target.value)}
                  className='w-full rounded-2xl border border-white/15 bg-neutral-950/70 px-5 py-4 text-white placeholder:text-white/30 focus:border-orange-400/70 focus:outline-none'
                  type="text"
                  placeholder='Profile picture URL'
                />
                <textarea
                  value={desc || ""}
                  onChange={e => setdesc(e.target.value)}
                  className='h-32 w-full resize-none rounded-2xl border border-white/15 bg-neutral-950/70 px-5 py-4 text-white placeholder:text-white/30 focus:border-orange-400/70 focus:outline-none'
                  placeholder='A short bio or welcome message'
                />
              </div>
            </div>
          </div>

          <div className='space-y-10'>
            <div className='space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
              <h2 className='text-lg font-semibold text-white'>Step 2 · Add your links</h2>
              <p className='text-sm text-white/60'>Spotlight launches, playlists, shop drops—whatever fits your story right now.</p>
              <div className='space-y-5'>
                {links && links.map((item, index) => (
                  <div key={index} className='space-y-3 rounded-2xl border border-white/15 bg-neutral-950/70 p-4'>
                    <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40'>
                      Link {index + 1}
                      <span>{item.link ? "Active" : "Draft"}</span>
                    </div>
                    <input
                      value={item.linktext || ""}
                      onChange={e => handleChange(index, item.link, e.target.value)}
                      className='w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400/70 focus:outline-none'
                      type="text"
                      placeholder='Link title (e.g. Shop, Newsletter, Latest video)'
                    />
                    <input
                      value={item.link || ""}
                      onChange={e => handleChange(index, e.target.value, item.linktext)}
                      className='w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400/70 focus:outline-none'
                      type="text"
                      placeholder='https://'
                    />
                  </div>
                ))}
              </div>
              <button 
                onClick={addLink} 
                className='w-full rounded-2xl border border-dashed border-white/25 px-4 py-4 text-sm font-medium text-white/70 transition-colors hover:border-white/50 hover:text-white'
              >
                + Add another link
              </button>
            </div>

            <div className='space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10 p-6 text-center backdrop-blur'>
              <p className='text-sm text-white/70'>Everything look good? We&rsquo;ll save and publish your page instantly. You can return anytime to tweak copy, colors, or your lineup.</p>
              <button
                disabled={pic === "" || handle === "" || links[0].linktext === ""}
                onClick={submitLinks}
                className='w-full rounded-2xl bg-orange-400 px-10 py-4 text-base font-semibold text-black shadow-md shadow-orange-500/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none'
              >
                Create my LinkTree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
