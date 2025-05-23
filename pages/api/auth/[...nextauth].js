import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//lib
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

export default NextAuth({
  // session: {
  //     jwt: true
  // },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const userCollection = await client.db().collection("users");
        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found!");
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid Credentials!");
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Attach `id` to the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Attach `id` to the session object
      }
      return session;
    },
  },
});
