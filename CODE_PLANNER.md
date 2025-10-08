1. first isko maine create next app kara

2. create component folder

3. first component navbar.js bnaya

4. page.js me jaake UI/UX design kra maine

5. layout js me Navbar component add kra hai

6. Databse lgaane ka time aagya to maine lib folder bnaya aur usme Mongodb.js ki file n code add kiya

7. mai abb env.local file bnaunga

8. mai abb generate folder bnaunga app folder ke andar aur usme page.js file iss file me user apni links enter karega ye wo form jisse wo linktree ki apni  links enter karega

9. abb route.js bnegi jaake .. api/generate waale folder mein

uska abhi iss time ye code thaa 

yaha se uthaya tha "https://nextjs.org/docs/app/api-reference/file-conventions/route"

export async function POST(request) {
    const body = await request.json()
    console.log(body)
    return Response.json({ message: 'Hello World', received: body })
}

phir thuder client se test kra hmne isse
 
link :- "http://localhost:3000/api/generate" 
top left me GET ko POST kiya
body me JSON ka thoda data diya kuch bhi aur bss hogya kaam

abb client promise import kra hai mongo see...

import clientPromise from "@/lib/mongodb"

const client = await clientPromise;
const db = client.db("linktree")
const collection = db.collection("links")

const result = await collection.insertOne(body)

phir thuderclient ko chalana mongodbcompass me jaake connect dbana tab data usme aa jayega mongodb mein.

10. abb maine react-toastify donwload kiya notifications ke liye

11. phir app/generate/page.js mein post reqest lgaayi hai iske liye (kuch aisi dikhti hai)

const url = "https://example.com/api/add";

const data = {
  link: "https://site.com",
  linktext: "My link",
  handle: "user123"
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));

12.  page.js me build issue aa raha tha ki "build fails because useSearchParams is used directly in the page. For production, move that hook out of the page and pass search params via the Server Component page props." to maine simply kya kiya ki.. ek genrateclient ki file bna ke sara code usme daal diya aur use page.js me import kra diya 1:13:00 min se explained

13. ek add name ki api bnaayi api folder mein

14. abb maine ek input box aur ek button add kra theek abb
    handle create hona hai ok so app/page.js mein ye code add kra ek handle create krne ka usestate text se uss handle ke name ka input leinge.

    `import { useState } from "react"
    import { useRouter } from "next/router";

    export default function Home() {

      const [text, setText] = useState("")
      const router = useRouter()
      const createTree = () => {

        router.push(`/generate/handle?=${text}`)
      }`

      kuch aisa kra theek abb isse kaam ho raha tha phir thoda checks lgaye ki handle db me an ho to isliye api me check create kiya... uska code wahi ka whai hai...
      thoda ise bhi miodify kr diya...

      neeche code me input box me
      `value = {text}  onChange={(e)=> setText(e.target.value)}` kar diya tha aur claim handle mein ` onClick={()=> createHandle()}`.

15. abb kuch bss jaake handle bnana hai to..
    ek folder bnaya [handle] karke theek usme phir mainee add kiya hai page.js file
    phir seedha saadha code hai zyada dimag dahi nahi hai usme 
    abb databse se jab bhi content nikalna dallna ho to simply do..

    import clientPromise from "@/lib/mongodb"

    const client = await clientPromise
    const db = client.db("linktreeDB")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle })

    abb item.handle ya item.link kul mila ke item. karo aur kaam nikaal lo...

    ha links ko externally import karne me issue aa raha tha to next.config.mjs me code add kiya hai.

    yahi hai aur kya bn gaya app

16. final git commit of the existing project is 