import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
//@ts-ignore
import path from "path";
// https://vite.dev/config/
//@ts-ignore

const root = path.resolve(__dirname, "src");
config();
export default defineConfig({
  base: "/movies",
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3010,
    host: "0.0.0.0",
  },
});
