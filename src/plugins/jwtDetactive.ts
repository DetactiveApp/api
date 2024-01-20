import jwt from "@elysiajs/jwt";

export const jwtDetactive = jwt({
  name: "jwt",
  iss: "Detactive.de",
  secret: process.env.JWT_KEY!,
  exp: "7d",
});
