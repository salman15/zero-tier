import "dotenv/config";
import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

try {
  /**
   * Configure proxy middleware
   */
  const jsonPlaceholderProxy = createProxyMiddleware({
    target: process.env.ZT_API_URL,
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    headers: {
      Authorization: `token ${process.env.ACCESS_TOKEN}`,
    },
  });

  console.log("Starting server...");
  const app = express();
  app.use(cors());
  app.use("/", jsonPlaceholderProxy);
  app.listen(3000);

  console.log("Server listening on port 3000");
} catch (error) {
  console.log("An error occurred while starting the server");
  console.error(error);
}
