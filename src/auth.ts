import Credentials from "next-auth/providers/credentials";
import clientPromise from "./lib/mongodb";
import bcrypt from "bcryptjs";

export const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials?: Record<string, string> | undefined){
        if (!credentials?.email || !credentials?.password) return null;
        const client = await clientPromise;
        const db = client.db("users");

        console.log("Authorizing user:", credentials?.email);
        console.log("Password", credentials?.password);
        

        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });
          console.log("Found user:", !!user);

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};
