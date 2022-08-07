import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import getConfig from "next/config";

// import Adaptars from "next-auth/adapters";
const { publicRuntimeConfig } = getConfig();

//env files might not be read here // next js error // ? fix if error
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: publicRuntimeConfig.GOOGLE_CLIENT_ID,
//       clientSecret: publicRuntimeConfig.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// });

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
const options = {
  providers: [
    GitHubProvider({
      // clientId: publicRuntimeConfig.GITHUB_CLIENT_ID,
      // clientSecret: publicRuntimeConfig.GITHUB_CLIENT_SECRET,
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  // adapter: PrismaAdapter(prisma),
  // secret: "random_string",

  // @ts-ignore
  // adapter: Adaptars.Prisma.Adapter({ prisma }),
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account.provider === "google") {
  //       return profile.email_verified && profile.email.endsWith("@example.com")
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   },
  // }
};
