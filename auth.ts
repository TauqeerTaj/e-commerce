import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentiaProvider from "next-auth/providers/credentials";
import { User } from "./models/userModel";
import { compare } from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentiaProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin("Invalid Credentials!");
        }
        //Database Connection
        const user = await User.findOne({ email }).select("+password");
        if (!user) throw new CredentialsSignin("User Not Found!");
        if (!user.password) throw new CredentialsSignin("User Not Found!");

        const isMatch = compare(password, user.password);

        if (!isMatch) throw new CredentialsSignin("User Not Found!");

        return { name: user.name, email: user.email, id: user._id };
      },
    }),
  ],
});
