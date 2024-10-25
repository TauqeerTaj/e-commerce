import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentiaProvider from "next-auth/providers/credentials"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }), CredentiaProvider({
    name: "Credentials",
    credentials: {
        email: {
            type: "email"
        },
        password: {
            type: "password"
        }
    },
    authorize: ({email, password}) => {
        console.log(email, password)  
    }
  })
],
})