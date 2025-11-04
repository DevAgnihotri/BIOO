import Image from 'next/image'
import Link from 'next/link'
import clientPromise from "@/lib/mongodb"
import { notFound } from 'next/navigation'


export default async function Page({ params }) {
  const { handle } = await params

  const client = await clientPromise
  const db = client.db("linktreeDB")
  const collection = db.collection("links")

  const item = await collection.findOne({ handle })
  
  if(!item) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-xl w-full">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src={item.pic}
            alt={`${item.handle} avatar`}
            width={120}
            height={120}
            className="rounded-full object-cover mb-4 border-2 border-white/10"
          />
          <h1 className='text-2xl font-light text-white mb-2'>@{item.handle}</h1>
          {item.desc && (
            <p className='text-white/60 font-light text-center'>{item.desc}</p>
          )}
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {item.links.map((link, index) => (
            <Link 
              key={index} 
              href={link.link}
              className="block w-full px-8 py-5 bg-white/5 border border-white/10 rounded-xl text-center text-white font-light hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              {link.linktext}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Link href="/" className="text-sm font-light text-white/40 hover:text-blue-400 transition-colors">
            Create your own LinkTree
          </Link>
        </div>

      </div>
    </div>
  )
}