import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// The API address can be overridden with VITE_API_URL in apps/web/.env.local.
const api = import.meta.env.VITE_API_URL || "http://localhost:4101";
function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  async function load() {
    try {
      const response = await fetch(`${api}/entries`);
      if (!response.ok) throw new Error();
      setEntries(await response.json()); setError("");
    } catch { setError("Could not load the reading list. Check the API connection."); }
  }
  useEffect(() => { load(); }, []);
  async function add(event) {
    event.preventDefault();
    await fetch(`${api}/entries`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, author }) });
    setTitle(""); setAuthor(""); await load();
  }
  return <main><p className="eyebrow">A small shared collection</p><h1>Reading Room</h1><p>Keep a list of books you would like to read.</p>
    <form onSubmit={add}><label>Title<input value={title} onChange={e => setTitle(e.target.value)} /></label><label>Author<input value={author} onChange={e => setAuthor(e.target.value)} /></label><button>Add book</button></form>
    {error && <p role="alert">{error}</p>}<ul>{entries.map(entry => <li key={entry.id}><strong>{entry.title}</strong><span>{entry.author}</span><small>{entry.read ? "Read" : "To read"}</small></li>)}</ul>
  </main>;
}
createRoot(document.getElementById("root")).render(<App />);
