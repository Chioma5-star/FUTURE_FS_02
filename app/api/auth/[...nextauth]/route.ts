import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "Chioma",
          email: "chiomaosanebi5@gmail.com",
          password: "$2a$10$QPoT0vgyRAKgrxzQ9k/.SeGQuNHhY6KnlICkaHivksv7bdfSkc2ti", 
        };

        const isValid =
          credentials?.email === user.email &&
          (await compare(credentials.password, user.password));

        if (isValid) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
