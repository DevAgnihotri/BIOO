import Image from 'next/image'
import Link from 'next/link'
import clientPromise from "@/lib/mongodb"
import { notFound } from 'next/navigation'


export default async function Page({ params }) {
  const { handle } = await params

  const client = await clientPromise
  const db = client.db("biooDB")
  const collection = db.collection("links")

  const item = await collection.findOne({ handle })
  
  if(!item) {
    return notFound()
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl space-y-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_25px_60px_-40px_rgba(37,99,235,0.6)] backdrop-blur">
          <Image
            src={item.pic}
            alt={`${item.handle} avatar`}
            width={140}
            height={140}
            className="mx-auto mb-6 h-36 w-36 rounded-full border border-white/20 object-cover"
          />
          <h1 className='text-3xl font-semibold text-white'>@{item.handle}</h1>
          {item.desc ? (
            <p className='mt-4 text-base text-white/70'>{item.desc}</p>
          ) : (
            <p className='mt-4 text-base text-white/50'>Sharing moments, projects, and things worth discovering.</p>
          )}
        </div>

        <div className="space-y-4">
          {item.links.map((link, index) => (
            <Link 
              key={index} 
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full transform rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-center text-lg font-medium text-white transition-all hover:-translate-y-1 hover:border-orange-400/60 hover:bg-orange-400/15"
            >
              <span className="flex flex-col gap-1 text-white/90 group-hover:text-white">
                {link.linktext}
                <span className="text-xs font-light uppercase tracking-[0.3em] text-white/30 group-hover:text-blue-200">Tap to open</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center text-sm text-white/60 backdrop-blur">
          <span className="mr-2 text-white/80">✨</span>
          <Link href="/" className="font-medium text-blue-200 hover:text-blue-100">
            Build your own BIOO page
          </Link>
        </div>
      </div>
    </div>
  )
}