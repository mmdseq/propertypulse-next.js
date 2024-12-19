export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // Routes that require authentication
    "/properties/add",
    "/profile",
    "/properties/saved",
    "/messages",
    "/protected",
  ],
}
