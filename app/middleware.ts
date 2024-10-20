import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ["/sign-in", "/sign-up"]
});

export const config = {
    matche: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trcp)(.*)"],
};