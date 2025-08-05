import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // escuche todas las IPs
    port: 5173,
    hmr: {
      host: "157.245.143.86", // IP pública del servidor
      protocol: "ws", // o 'wss' si usas HTTPS
      port: 5173,
    },
  },
  plugins: [react()],
});
