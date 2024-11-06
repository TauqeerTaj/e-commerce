import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
//lib
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from '@/lib/auth'

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase()
                const userCollection = client.db().collections('users')
                const user = await userCollection.findOne({ email: credentials.email })
                if (!user) throw new Error('No user found!')
                const isValid = await verifyPassword(credentials.password, user.password)
                if (!isValid) throw new Error('Invalid Credentials!')
                client.close()
                return { email: user.email }
            }
        })
    ]
})