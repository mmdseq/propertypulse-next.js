import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      await connectDB()

      const existingUser = await User.findOne({ email: user.email })

      // Create user if it doesn't exist
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          username: user.name?.slice(0, 20) || "",
          image: user.image,
        })
      }

      return true
    },
    async session({ session, token }) {
      //   session.user.id = token.id // Include user id in the session
      //   return session

      // 1. Get user from database
      const user = await User.findOne({ email: session.user.email })
      // 2. Assign the user id to the session
      session.user.id = user._id.toString()
      // 3. return session
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
