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


  return <div className="flex min-h-screen bg-amber-700 justify-center items-center">
    <div className="photo flex flex-col items-center justify-center">
        <Image
            src={item.pic}
            alt={`${item.handle} avatar`}
            width={150}
            height={150}
            className="rounded-full object-cover"
        />
  <span className='font-bold py-4 text-white'>@{item.handle}</span>
        <div className="links ">
            {item.links.map((item,index) => {
                return (
                    <div
                        key={index}
                        className="rounded-md bg-amber-100 shadow-lg flex items-center justify-center text-center mb-4 w-72"
                    >
                        <Link href={item.link} className="block w-full px-6 py-3">
                            <span className="text-black font-semibold">{item.linktext}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
    </div>
}