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
        async jwt({ token, account }) {
            if (account?.provider === "google") {
                return { ...token, accessToken: account.access_token }
            }

            // const newAccount = account ?
            // {
            //    ...token,
            //    access_token: account.access_token,
            //    expires_at: account.expires_at,
            //    refresh_token: account.refresh_token
            // } : account

            // return token
            // else if (Date.now() < token.expires_at * 1000) {
            //     return token
            // }


            // ユーザーが存在する場合
            // if (user) {
            //     token.id = user.id;
            //     token.accessToken = newAccount?.access_token;
            // }

            // // トークンが存在する場合（サインイン後）
            // if (account?.provider === "google") {
            //     token.accessToken = account.access_token;
            // }

            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: token.accessToken
            };
        }
    },
    debug: true
})