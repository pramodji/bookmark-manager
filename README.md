# Bookmark Manager

A modern, feature-rich bookmark manager built with SvelteKit.

## Features

- 📁 Organize bookmarks into customizable groups
- 🎨 Column-based layout (1-5 columns)
- 🔍 Search and filter by tags
- 🎯 Drag-and-drop reordering
- 📝 Add notes and tags to bookmarks
- 🖼️ Custom icons (SVG, URL, or upload)
- 🔄 Bulk icon changes with multi-select
- 📊 Widgets: Notes, Tasks, Stock, Weather, Calendar, Custom Embeds
- 💾 Dual persistence: localStorage + API sync
- 🌙 Dark mode support
- 📤 Import/Export (JSON, CSV)

## Setup

```bash
npm install
npm run dev
```

## API Server (Optional)

For syncing across devices, run the included API server:

```bash
node server.js
```

The app works offline using localStorage if the API is unavailable.
