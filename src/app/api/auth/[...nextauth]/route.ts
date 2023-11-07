import NextAuth from "next-auth/";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/scripts/user";

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
            async authorize(credentials, req) {
                // TODO: Add logic here to look up the user from the credentials supplied
                return null
            }
          })
    ],
})

export { handler as GET, handler as POST };