import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    pages: {
        signIn: "/login",
        error: "/error"
    },
    callbacks: {
        async jwt({token, account}) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({session, token}) {
            return {
                ...session,
                accessToken: token.accessToken
            }
        },
        async redirect({url, baseUrl}) {
            console.log(url);
            console.log(baseUrl);
            if (url === `${baseUrl}/api/auth/callback/google/:`) {
                return `${baseUrl}/dashboard`;
            } else {
                return baseUrl;
            }
        }
    },
    // default off: debug mode
})

export { handler as GET, handler as POST}