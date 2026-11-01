import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";

test("lists and creates reading entries", async (t) => {
  const server = createApp().listen(0, "127.0.0.1");
  await new Promise(resolve => server.once("listening", resolve));
  t.after(() => server.close());
  const url = `http://127.0.0.1:${server.address().port}/entries`;
  const initial = await (await fetch(url)).json();
  assert.equal(initial.length, 3);
  const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: "A book", author: "A writer" }) });
  assert.equal(response.status, 201);
  assert.equal((await response.json()).title, "A book");
  assert.equal((await (await fetch(url)).json()).length, 4);
});
