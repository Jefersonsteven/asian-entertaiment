import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@prisma/client"
import { createUser, getUser, updateUser } from "@/scripts/user"
import comparePassword from "@/scripts/comparePassword"

const handler = NextAuth ({
    providers: [
        GoogleProvider({
            name: "Google",
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Account",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "asian@gmail.com" },
              password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                if(!credentials) return null
                const user = await getUser(credentials.email) as User
                if(!user) throw new Error("No hay un usuario con ese email")
                if(await comparePassword(credentials.password, user.password)) return user
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
        },
        signIn: async ({ account, user }) => {
            if(user && account?.provider === "google" && user?.email) {
                const userResponse = await getUser(user.email) as User
                if(userResponse && await comparePassword(user.id, userResponse.password)) return true
                const newUser = await createUser(user.email, user.id)
                if(newUser) {
                    const updatedUser = await updateUser(user.email, {
                        name: user.name ?? '',
                        photo: user.image ?? '',
                    })
                    if(updatedUser) return true
                }
                return false
            }
            return true
        }
    },
    pages: {
        signIn: "/login",
    },
})

export { handler as GET, handler as POST }