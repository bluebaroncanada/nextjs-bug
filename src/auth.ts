import IdentityServer4 from "next-auth/providers/identity-server4"
import "next-auth/jwt"
import NextAuth from "next-auth";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    IdentityServer4({
      id: "identity-server4",
      name: "IdentityServer4",
      issuer:  "https://foo",
      clientId: "myaccount",
      clientSecret: process.env.AUTH_SECRET,
      authorization: { params: { scope: "openid profile offline_access" } },
      client: { token_endpoint_auth_method: "client_secret_post" },
    })
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
})



