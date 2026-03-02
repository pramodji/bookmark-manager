import { writable } from 'svelte/store';
import { readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  tags: string[];
  category: string;
}

export const bookmarks = writable<Bookmark[]>([]);

// Load from local storage (JSON file)
export async function loadBookmarks() {
  try {
    const content = await readTextFile('bookmarks.json', { dir: BaseDirectory.AppData });
    bookmarks.set(JSON.parse(content));
  } catch (e) {
    bookmarks.set([]); // File doesn't exist yet
  }
}

// Save to local storage
export async function saveBookmarks(data: Bookmark[]) {
  await writeTextFile('bookmarks.json', JSON.stringify(data), { dir: BaseDirectory.AppData });
}