<script lang="ts">
  import { bookmarks, loadBookmarks, saveBookmarks } from './lib/bookmarkStore';
  import { onMount } from 'svelte';
  import { Plus, Search, Download, Upload, ExternalLink, Trash2 } from 'lucide-svelte';

  let searchQuery = "";
  let newTitle = "";
  let newUrl = "";

  onMount(loadBookmarks);

  // Simple add function
  function addBookmark() {
    if (!newUrl) return;
    bookmarks.update(current => {
      const updated = [...current, { 
        id: crypto.randomUUID(), 
        title: newTitle || newUrl, 
        url: newUrl, 
        tags: [], 
        category: "Uncategorized" 
      }];
      saveBookmarks(updated);
      return updated;
    });
    newTitle = ""; newUrl = "";
  }

  // Filter bookmarks based on search
  $: filtered = $bookmarks.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.url.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<main class="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
  <div class="max-w-4xl mx-auto">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold tracking-tight">MarkKeeper</h1>
      <div class="flex gap-2">
        <button class="flex items-center gap-2 px-3 py-1.5 border rounded-lg bg-white hover:bg-slate-100 transition shadow-sm">
          <Upload size={16} /> Import
        </button>
        <button class="flex items-center gap-2 px-3 py-1.5 border rounded-lg bg-white hover:bg-slate-100 transition shadow-sm">
          <Download size={16} /> Export
        </button>
      </div>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="md:col-span-2 relative">
        <Search class="absolute left-3 top-2.5 text-slate-400" size={18} />
        <input 
          bind:value={searchQuery}
          placeholder="Search your bookmarks..." 
          class="w-full pl-10 pr-4 py-2 bg-white border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        />
      </div>
      <div class="flex gap-2">
        <input bind:value={newUrl} placeholder="URL" class="w-full px-3 py-2 bg-white border rounded-xl outline-none" />
        <button on:click={addBookmark} class="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          <Plus />
        </button>
      </div>
    </section>

    <div class="grid grid-cols-1 gap-3">
      {#each filtered as bookmark}
        <div class="group flex items-center justify-between p-4 bg-white border rounded-xl hover:shadow-md transition">
          <div class="flex flex-col">
            <span class="font-semibold text-slate-800">{bookmark.title}</span>
            <span class="text-sm text-slate-500 truncate max-w-xs">{bookmark.url}</span>
          </div>
          <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition">
            <a href={bookmark.url} target="_blank" class="text-slate-400 hover:text-blue-600">
              <ExternalLink size={20} />
            </a>
            <button class="text-slate-400 hover:text-red-600">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>