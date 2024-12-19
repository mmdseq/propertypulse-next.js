// import mongoose from "mongoose"

// const connectDB = async () => {
//   if (mongoose.connection.readyState >= 1) return

//   return mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// }

// export default connectDB

// import { getServerSession } from "next-auth/next"
// import { NextResponse } from "next/server"

// export async function middleware(req) {
//   const session = await getServerSession(req)

//   // Check if the session exists; if not, redirect to the home page
//   if (!session && req.nextUrl.pathname.startsWith("/protected")) {
//     return NextResponse.redirect(new URL("/", req.url))
//   }

//   return NextResponse.next()
// }

// // Specify the paths to apply the middleware to
// export const config = {
//   matcher: ["/protected/:path*"],
// }

import mongoose from "mongoose"

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error // Re-throw the error to handle it where needed
  }
}

export default connectDB
