import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [ Google({
        authorization: {params: {access_type: "offline", prompt: "consent"}}
    }) ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ account, profile }) {
            const res = await fetch("http://localhost:3000/api/v1/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: account?.access_token,
                    email: profile?.email,
                    name: profile?.name,
                    image: profile?.picture
                })
            })

            if (res.ok) {
                return true;
            } else {
                return false;
            }
        },
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: token.accessToken
            }
        }
    },
    debug: true
})