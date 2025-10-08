import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const { links, handle, pic, desc } = body

    // Validate required fields
    if (!handle || !links || links.length === 0) {
      return Response.json(
        { success: false, message: "Handle and at least one link are required" },
        { status: 400 }
      )
    }

    // Connect to MongoDB and save data
    const client = await clientPromise
    const db = client.db("linktreeDB") // You can change the database name
    const collection = db.collection("links")

    // Check if handle already exists
    const existingUser = await collection.findOne({ handle })
    if (existingUser) {
      return Response.json(
        { success: false, message: "Handle already taken. Please choose another one." },
        { status: 409 }
      )
    }

    // Insert the new document
    const result = await collection.insertOne({
      handle,
      links,
      pic,
      desc,
      createdAt: new Date()
    })

    console.log("Data saved to MongoDB:", result.insertedId)

    return Response.json({
      success: true,
      message: "Your Bittree has been created successfully!",
      data: { handle, links, pic, desc, id: result.insertedId }
    })
  } catch (error) {
    console.error("Error in /api/add:", error)
    return Response.json(
      { success: false, message: "Server error: " + error.message },
      { status: 500 }
    )
  }
}
