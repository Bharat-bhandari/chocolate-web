import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/UserModel";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      try {
        // 1. Connect to database
        await connectDB();

        // 2. Check if user exists
        const userExists = await User.findOne({ email: profile.email });

        // 3. If not, then add user to database
        if (!userExists) {
          // Truncate user name if too long
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
          });
        }

        // 4. Return true to allow sign in
        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        // Return false to deny sign in
        return false;
      }
    },

    // Modifies the session Object
    async session({ session }) {
      try {
        // 1. Get the user from database
        const user = await User.findOne({ email: session.user.email });

        // 2. Assign the user id to the session
        session.user.id = user._id.toString();

        // 3. Return session
        const newSession = {
          ...session,
          user: {
            ...session.user,
            role: user.role,
          },
        };
        return newSession;
      } catch (error) {
        console.error("Error during session callback:", error);
        // Return an empty session
        return {};
      }
    },
  },
};
