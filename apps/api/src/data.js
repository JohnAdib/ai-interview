export function createStore() {
  let nextId = 4;
  const entries = [
    { id: 1, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", read: false },
    { id: 2, title: "Invisible Cities", author: "Italo Calvino", read: true },
    { id: 3, title: "Kindred", author: "Octavia E. Butler", read: false },
  ];
  return {
    list: () => entries,
    add: ({ title, author }) => {
      const entry = { id: nextId++, title, author, read: false };
      entries.push(entry);
      return entry;
    },
  };
}
