import { createOpenApiDocument } from "@CivicLens/api";
import { auth } from "@CivicLens/auth";
import { env } from "@CivicLens/env/server";
import { apiReference } from "@scalar/express-api-reference";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { type Request } from "express";

const app = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.all("/api/auth{/*path}", toNodeHandler(auth));

app.use(express.json());
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

function nodeHeadersToHeaders(headers: Request["headers"]) {
  const webHeaders = new Headers();
  for (const [key, value] of Object.entries(headers)) {
    if (Array.isArray(value)) {
      for (const item of value) webHeaders.append(key, item);
    } else if (typeof value === "string") {
      webHeaders.set(key, value);
    }
  }
  return webHeaders;
}

app.get("/private", async (req, res) => {
  const session = await auth.api.getSession({
    headers: nodeHeadersToHeaders(req.headers),
  });
  if (!session) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  res.status(200).json({
    message: "This is private",
    user: session.user,
  });
});

app.get("/openapi.json", (_req, res) => {
  res.status(200).json(createOpenApiDocument());
});
app.use("/docs", apiReference({ spec: { url: "/openapi.json" } }));

app.get("/", (_req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
