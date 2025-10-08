"use client"
import Image from "next/image";
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  const createHandle = async () => {
    if (!text) return

    // Check if handle exists in database
    const response = await fetch(`/api/check?handle=${text}`)
    const data = await response.json()

    if (data.exists) {
      alert("Handle already exists! Please choose another one.")
    } else {
      // Handle doesn't exist, redirect to generate page
      router.push(`/generate?handle=${text}`)
    }
  }

  return (
    <main>
      <section className="grid min-h-[100vh] grid-cols-2">
        <div className="flex justify-center items-center flex-col ml-[3vw] gap-4 bg-gray-800">
       
          <p className="text-shadow-white font-bold text-8xl max-w-[40vw]">A link in bio built for you.</p>
          <p className="text-shadow-white text-2xl max-w-[40vw]">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        
        <form className="flex items-center gap-4">
          <label htmlFor="handle" className="sr-only">Handle</label>
          <input
            id="handle"
            name="handle"
            type="text"
            value = {text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Enter your handle"
            className="rounded-md px-4 py-3 w-[28vw] max-w-full bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={()=> createHandle()}
            className="bg-amber-400 text-black font-bold px-6 py-3 rounded-md hover:opacity-90"
          >
            claim your handle
          </button>
        </form>
        </div>
        <div className = "flex justify-center items-center flex-col mr-[3vw] gap-4 bg-amber-700">

        </div>
      </section>
      <section className="bg-amber-950">

      </section>
    </main>
  );
}
