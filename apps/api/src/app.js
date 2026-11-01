import { createServer } from "node:http";
import { createStore } from "./data.js";

export function createApp(store = createStore()) {
  return createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") { res.writeHead(204).end(); return; }
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/entries" && req.method === "GET") {
      res.end(JSON.stringify(store.list())); return;
    }
    if (req.url === "/entries" && req.method === "POST") {
      let body = "";
      for await (const chunk of req) body += chunk;
      try {
        const entry = store.add(JSON.parse(body));
        res.writeHead(201).end(JSON.stringify(entry));
      } catch { res.writeHead(400).end(JSON.stringify({ error: "Invalid JSON" })); }
      return;
    }
    res.writeHead(404).end(JSON.stringify({ error: "Not found" }));
  });
}
