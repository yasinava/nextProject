import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import users from "@/models/users";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connect();

        try {
          const user = await users.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              console.log(user);
              return user;
            } else {
              throw new Error("your password valid");
            }
          } else {
            throw new Error("You Have Not Email");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});
export { handler as GET, handler as POST };
