import { type DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {}
    interface Account {}
    interface Session {
        accessToken?: string;
    } DefaultSession["user"];
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
    }
}