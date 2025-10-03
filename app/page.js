import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid min-h-[100vh] grid-cols-2">
        <div className="flex justify-center items-center flex-col ml-[5vw] gap-4 bg-gray-800">
       
          <p className="text-shadow-white font-bold text-8xl">A link in bio built for you.</p>
          <p className="text-shadow-white text-2xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className = "flex justify-center items-center flex-col mr-[5vw] gap-4 bg-amber-700">

        </div>
      </section>
      <section className="bg-amber-950">

      </section>
    </main>
  );
}
