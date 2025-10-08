import clientPromise from "@/lib/mongodb"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const handle = searchParams.get('handle')

    if (!handle) {
      return Response.json(
        { exists: false, message: "No handle provided" },
        { status: 400 }
      )
    }

    // Connect to MongoDB and check if handle exists
    const client = await clientPromise
    const db = client.db("linktreeDB")
    const collection = db.collection("links")

    const existingUser = await collection.findOne({ handle })

    return Response.json({
      exists: !!existingUser,
      handle
    })
  } catch (error) {
    console.error("Error in /api/check:", error)
    return Response.json(
      { exists: false, error: "Server error" },
      { status: 500 }
    )
  }
}
