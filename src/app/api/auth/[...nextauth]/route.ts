import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUser } from "@/scripts/user"
import { compare } from "bcryptjs"
import { User } from "@prisma/client"

const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Account",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "asian@gmail.com" },
              password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials) return null
                const user = await getUser(credentials.email) as User
                if(!user) throw new Error("No hay un usuario con ese email")
                if(await compare(credentials.password, user.password)) return user
                else throw new Error("Contraseña incorrecta")
            }
          })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token.user = user
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user as User
            return session
        }
    },
    pages: {
        signIn: "/login",
    },
})

export { handler as GET, handler as POST }