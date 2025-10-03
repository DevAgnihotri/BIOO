1. first isko maine create next app kara

2. create component folder

3. first component navbar.js bnaya

4. page.js me jaake UI/UX design kra maine

5. layout js me Navbar component add kra hai

6. Databse lgaane ka time aagya to maine lib folder bnaya aur usme Mongodb.js ki file n code add kiya

7. mai abb env.local file bnaunga

8. mai abb generate folder bnaunga app folder ke andar aur usme page.js file iss file me use apni links enter karega ye wo form jisse wo linktree ki apni  links enter karega

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

phir thuderclient ko chalana mongodbcompass me jaake connect dbana tab data usme aa jayega.