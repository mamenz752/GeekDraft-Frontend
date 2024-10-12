import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            authorization: {params: {access_type: "offline", prompt: "consent"}}
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            const res = await fetch("http://localhost:8000/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user?.email,
                    name: user?.name,
                    provider: account?.provider,
                })
            });
            const data = await res.json();
            return data.success;
        },
    },
    debug: true
})