# Bookmark Manager

A modern, feature-rich bookmark manager built with SvelteKit.

## Features

### Bookmark Management
- 📁 Organize bookmarks into customizable groups
- ⭐ Mark bookmarks as favorites with star icon
- 🔍 Search and filter by tags or favorites
- 🎯 Drag-and-drop reordering for bookmarks and groups
- 📝 Add notes, descriptions, and tags to bookmarks
- 🖼️ Custom icons (SVG, URL, or upload)
- 🔄 Bulk icon changes with multi-select (Ctrl/Cmd + Click)
- 📋 Right-click context menu for quick actions
- 🔗 Duplicate bookmarks
- 📄 Description field for website details

### Layout & Organization
- 🎨 Column-based layout (1-5 columns)
- 📊 Assign groups to specific columns
- 🔀 Reorder groups via drag-and-drop
- 📏 Compact mode for space efficiency
- 🎭 Collapsible groups
- 🔤 Sort bookmarks alphabetically (asc/desc) or manually

### Widgets
- 📝 **Notes Widget** - Quick note-taking
- ✅ **Tasks Widget** - Task management with priorities, due dates, and details
  - Add/Edit tasks via popup modal
  - Priority levels (Low, Medium, High) with color coding
  - Due date tracking with overdue indicators
  - Task details and descriptions
- 📈 **Stock Quote** - Embed stock charts
- 🌤️ **Weather** - Weather information
- 📅 **Calendar** - Google Calendar embed
- 📰 **RSS Feed** - Display RSS/Atom feeds (up to 10 items)
- 🎬 **Custom Embed** - Embed any iframe content
- Drag-and-drop widget reordering
- Collapsible widgets

### UI & Customization
- 🌙 Dark mode support
- 🎨 5 accent color themes (Blue, Emerald, Purple, Rose, Amber)
- 🕐 Large clock display with colored glow effect
- 🔒 Edit mode toggle for safe browsing
- 👁️ Toggle tag visibility
- 🎯 Clean, modern interface with rounded corners
- ⚡ Smooth animations and transitions

### Data Management
- 💾 Dual persistence: localStorage + API sync
- 📤 Export to JSON
- 📥 Import from JSON or CSV
- 🔄 Real-time sync status indicator
- 💿 Offline-first architecture

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

## Recent Enhancements

- ⭐ Favorite bookmarks with star icon and filter
- 📰 RSS feed widget for news and blog updates
- 📄 Description field for bookmark metadata
- ✅ Task modal popup for easier task entry
- 🕐 Improved clock styling with custom font and glow effect
- 🎨 Removed title bar text for cleaner look
- 🔧 Multiple UI refinements and bug fixes
