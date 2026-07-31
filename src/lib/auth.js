import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { jwt } from "better-auth/plugins";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  user: {
    changeEmail: {
      enabled: true,
      updateEmailWithoutVerification: true,
    },
  },
    trustedOrigins: [
    "http://localhost:3000",
    // "https://your-domain.com",
    "https://tahdith-shop-jg.vercel.app",
  ],
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt',
      maxAge: 60*24*30,
    }
  },

   plugins: [jwt() ,nextCookies()], 
});
