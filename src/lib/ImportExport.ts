import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';

async function importBookmarks() {
  const selected = await open({
    multiple: false,
    filters: [{ name: 'HTML', extensions: ['html'] }]
  });

  if (selected && typeof selected === 'string') {
    const html = await readTextFile(selected);
    // Use a DOMParser to find all <a> tags in the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = doc.querySelectorAll("a");
    
    const newItems = Array.from(links).map(link => ({
      id: crypto.randomUUID(),
      title: link.innerText,
      url: link.href,
      tags: [],
      category: "Imported"
    }));

    bookmarks.update(current => [...current, ...newItems]);
  }
}