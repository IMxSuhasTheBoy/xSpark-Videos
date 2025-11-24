import prisma from "@/vender/db";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma), // connect NextAuth.js to the Prisma database.
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt", // session management
  },
  secret: process.env.NEXTAUTH_SECRET, // secret key used for signing and verifying jwt tokens
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
