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
    <div className='min-h-screen bg-black text-white'>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <ToastContainer theme="dark" />
        
        <div className='space-y-12'>
          <div>
            <h1 className='text-4xl font-light mb-2'>Create your page</h1>
            <p className='text-white/60 font-light'>Set up your link in bio in 3 simple steps</p>
          </div>

          {/* Step 1 */}
          <div className="space-y-4">
            <h2 className='text-xl font-light'>Step 1: Choose your handle</h2>
            <input
              value={handle || ""}
              onChange={e => sethandle(e.target.value)}
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 font-light'
              type="text"
              placeholder='yourname'
            />
            <p className='text-sm font-light text-white/50'>
              Your link: linktr.ee/<span className="text-blue-400">{handle || "yourname"}</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <h2 className='text-xl font-light'>Step 2: Add your links</h2>
            <div className='space-y-3'>
              {links && links.map((item, index) => (
                <div key={index} className='flex gap-3'>
                  <input
                    value={item.linktext || ""}
                    onChange={e => handleChange(index, item.link, e.target.value)}
                    className='flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 font-light'
                    type="text"
                    placeholder='Link title'
                  />
                  <input
                    value={item.link || ""}
                    onChange={e => handleChange(index, e.target.value, item.linktext)}
                    className='flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 font-light'
                    type="text"
                    placeholder='https://...'
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={addLink} 
              className='px-6 py-3 bg-white/5 border border-white/10 text-white font-light rounded-lg hover:bg-white/10 transition-colors'
            >
              + Add another link
            </button>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <h2 className='text-xl font-light'>Step 3: Profile details</h2>
            <input
              value={pic || ""}
              onChange={e => setpic(e.target.value)}
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 font-light'
              type="text"
              placeholder='Profile picture URL'
            />
            <input
              value={desc || ""}
              onChange={e => setdesc(e.target.value)}
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 font-light'
              type="text"
              placeholder='Bio (optional)'
            />
            <button
              disabled={pic === "" || handle === "" || links[0].linktext === ""}
              onClick={submitLinks}
              className='w-full px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Create your page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
