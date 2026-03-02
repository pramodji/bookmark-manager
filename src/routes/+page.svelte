<script lang="ts">
	import { 
		Plus, Search, Bookmark as BookmarkIcon, Trash2, Edit2, 
		GripVertical, Settings, X, Moon, Sun, Lock, Unlock,
		FileSpreadsheet, Download, Upload, LayoutList, List, Filter, EyeOff,
		SortAsc, SortDesc, Database, ChevronRight, Code, Copy, CopyPlus, FileUp, Star
	} from 'lucide-svelte';
	import { onMount } from 'svelte';

    const API_URL = 'http://localhost:3000/db';

	// --- 1. STATE ---
	interface Bookmark { 
		id: string; title: string; url: string; group: string; position: number;
		tags?: string[]; notes?: string; icon?: string; favorite?: boolean; description?: string;
	}

	interface Widget {
		id: string; title: string; type: string; content: string; column: number; collapsed: boolean; position: number;
	}

	let bookmarks = $state<Bookmark[]>([]);
	let groups = $state<string[]>([]);
	let widgets = $state<Widget[]>([]);
	let appTitle = $state("Dashboard");
    let syncStatus = $state<"loading" | "synced" | "offline">("loading");
    let time = $state(new Date());
    
    let collapsedGroups = $state<Record<string, boolean>>({});
    let groupWidgets = $state<Record<string, string>>({});
    let groupSortDirections = $state<Record<string, 'none' | 'asc' | 'desc'>>({});
    let groupColumns = $state<Record<string, number>>({});
    let groupColors = $state<Record<string, string>>({});

	let searchQuery = $state("");
	let selectedTag = $state<string | null>(null);
	let showFavoritesOnly = $state(false);
	let isSettingsOpen = $state(false);
	let isEditMode = $state(false);
	let isDarkMode = $state(false);
    let showTags = $state(false); 
    let compactMode = $state(true);
	let accentColor = $state("blue");
	let bgColor = $state("slate");
	let cardColor = $state("white");
	let hoverColor = $state("blue"); 
	let columnInputs = $state<Record<string, string>>({}); 
	let draggedId = $state<null | string>(null);
    let draggedGroup = $state<null | string>(null);
	let draggedWidget = $state<null | string>(null);
    let newGroupName = $state("");
    let widgetEditTarget = $state<string | null>(null);
    let editingGroupName = $state<string | null>(null);
    let tempGroupName = $state("");
    let draggedSettingsGroup = $state<string | null>(null);
    let addGroupAfter = $state<string | null>(null);
    let newSubGroupName = $state<Record<string, string>>({});
    let selectedBookmarks = $state<Set<string>>(new Set());
    let bulkIconModal = $state(false);
    let bulkIcon = $state("");
	let isWidgetModalOpen = $state(false);
	let widgetType = $state("");
	let widgetTitle = $state("");
	let widgetContent = $state("");
	let widgetColumn = $state(1);
	let editWidgetId = $state<string | null>(null);
	let isTaskModalOpen = $state(false);
	let taskWidgetId = $state<string | null>(null);
	let taskText = $state("");
	let taskDetails = $state("");
	let taskPriority = $state("none");
	let taskDueDate = $state("");
	let editTaskId = $state<string | null>(null);
	let feedCache = $state<Record<string, any>>({});

	let isEditModalOpen = $state(false);
	let activeBookmark = $state<Bookmark | null>(null);
	let contextMenu = $state<{ x: number, y: number, show: boolean, target: Bookmark | null }>({ x: 0, y: 0, show: false, target: null });

	let tempTitle = $state(""), tempUrl = $state(""), tempTags = $state(""), tempNotes = $state(""), tempIcon = $state(""), tempDescription = $state("");

	const themeMap: Record<string, string> = {
		blue: "#2563eb", emerald: "#10b981", purple: "#8b5cf6", rose: "#f43f5e", amber: "#f59e0b",
		red: "#ef4444", orange: "#f97316", yellow: "#eab308", lime: "#84cc16", cyan: "#06b6d4"
	};

	const bgColorMap: Record<string, {light: string, dark: string}> = {
		slate: {light: "bg-slate-50", dark: "dark:bg-slate-950"},
		gray: {light: "bg-gray-50", dark: "dark:bg-gray-950"},
		neutral: {light: "bg-neutral-50", dark: "dark:bg-neutral-950"},
		stone: {light: "bg-stone-50", dark: "dark:bg-stone-950"},
		zinc: {light: "bg-zinc-50", dark: "dark:bg-zinc-950"}
	};

	const cardColorMap: Record<string, {light: string, dark: string}> = {
		white: {light: "bg-white", dark: "dark:bg-slate-900"},
		slate: {light: "bg-slate-100", dark: "dark:bg-slate-800"},
		gray: {light: "bg-gray-100", dark: "dark:bg-gray-800"},
		neutral: {light: "bg-neutral-100", dark: "dark:bg-neutral-800"}
	};

	const hoverColorMap: Record<string, {light: string, dark: string}> = {
		blue: {light: "hover:ring-blue-300", dark: "dark:hover:ring-blue-700"},
		emerald: {light: "hover:ring-emerald-300", dark: "dark:hover:ring-emerald-700"},
		purple: {light: "hover:ring-purple-300", dark: "dark:hover:ring-purple-700"},
		rose: {light: "hover:ring-rose-300", dark: "dark:hover:ring-rose-700"},
		amber: {light: "hover:ring-amber-300", dark: "dark:hover:ring-amber-700"},
		red: {light: "hover:ring-red-300", dark: "dark:hover:ring-red-700"},
		orange: {light: "hover:ring-orange-300", dark: "dark:hover:ring-orange-700"},
		yellow: {light: "hover:ring-yellow-300", dark: "dark:hover:ring-yellow-700"},
		lime: {light: "hover:ring-lime-300", dark: "dark:hover:ring-lime-700"},
		cyan: {light: "hover:ring-cyan-300", dark: "dark:hover:ring-cyan-700"}
	};

	const widgetTemplates: Record<string, string> = {
		'stock': '<iframe src="https://www.tradingview.com/widgetembed/?symbol=NASDAQ:AAPL" style="width:100%;height:300px;border:none;"></iframe>',
		'weather': '<iframe src="https://wttr.in/?format=v2" style="width:100%;height:200px;border:none;background:white;"></iframe>',
		'calendar': '<iframe src="https://calendar.google.com/calendar/embed" style="width:100%;height:400px;border:none;"></iframe>',
		'notes': '<textarea placeholder="Your notes here..." style="width:100%;height:200px;padding:12px;border:1px solid #e2e8f0;border-radius:12px;outline:none;resize:vertical;"></textarea>',
		'tasks': '[]',
		'rss': '',
		'embed': '<div style="padding:12px;text-align:center;color:#94a3b8;">Paste your embed code in settings</div>'
	};

    const isSVG = (str: string) => str?.trim().startsWith('<svg') || str?.trim().startsWith('<i ');

	// --- 2. LIFECYCLE ---
	onMount(async () => {
        const timer = setInterval(() => { time = new Date(); }, 1000);
		isDarkMode = localStorage.getItem('mk_dark') === 'true';
		accentColor = localStorage.getItem('mk_accent') || "blue";
		bgColor = localStorage.getItem('mk_bg') || "slate";
		cardColor = localStorage.getItem('mk_card') || "white";
		hoverColor = localStorage.getItem('mk_hover') || "blue";

		await loadData();
        window.addEventListener('click', () => { contextMenu.show = false; });
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                document.querySelector('input[placeholder="Search bookmarks..."]')?.focus();
            }
        });
        return () => { clearInterval(timer); };
	});

    $effect(() => {
        document.title = appTitle;
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    });

	// --- 3. DATA PERSISTENCE ---
	async function loadData() {
        syncStatus = "loading";
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error();
            const data = await res.json();
            bookmarks = (data.bookmarks || []).sort((a: Bookmark, b: Bookmark) => a.position - b.position);
            groups = data.groups || ["General"];
            groupSortDirections = data.sorts || {};
            collapsedGroups = data.collapsed || {};
            groupWidgets = data.widgets || {};
            groupColumns = data.columns || {};
            groupColors = data.groupColors || {};
			widgets = data.standaloneWidgets || [];
            syncStatus = "synced";
            console.log('Loaded from API:', { groups, bookmarks, widgets });
        } catch (e) {
            syncStatus = "offline";
            groups = JSON.parse(localStorage.getItem('mk_groups') || '["General"]');
            groupSortDirections = JSON.parse(localStorage.getItem('mk_sorts') || '{}');
            collapsedGroups = JSON.parse(localStorage.getItem('mk_collapsed') || '{}');
            groupWidgets = JSON.parse(localStorage.getItem('mk_widgets') || '{}');
            groupColumns = JSON.parse(localStorage.getItem('mk_columns') || '{}');
            groupColors = JSON.parse(localStorage.getItem('mk_groupColors') || '{}');
			widgets = JSON.parse(localStorage.getItem('mk_standaloneWidgets') || '[]');
            bookmarks = JSON.parse(localStorage.getItem('mk_bookmarks') || '[]').sort((a: any, b: any) => a.position - b.position);
            console.log('Loaded from localStorage:', { groups, bookmarks, widgets });
        }
	}

	async function syncData() {
		localStorage.setItem('mk_groups', JSON.stringify(groups));
		localStorage.setItem('mk_bookmarks', JSON.stringify(bookmarks));
        localStorage.setItem('mk_sorts', JSON.stringify(groupSortDirections));
        localStorage.setItem('mk_collapsed', JSON.stringify(collapsedGroups));
        localStorage.setItem('mk_widgets', JSON.stringify(groupWidgets));
        localStorage.setItem('mk_columns', JSON.stringify(groupColumns));
        localStorage.setItem('mk_groupColors', JSON.stringify(groupColors));
		localStorage.setItem('mk_standaloneWidgets', JSON.stringify(widgets));
        localStorage.setItem('mk_accent', accentColor);
        localStorage.setItem('mk_bg', bgColor);
        localStorage.setItem('mk_card', cardColor);
        localStorage.setItem('mk_hover', hoverColor);
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookmarks, groups, sorts: groupSortDirections, collapsed: collapsedGroups, widgets: groupWidgets, columns: groupColumns, appTitle, standaloneWidgets: widgets, groupColors })
            });
            syncStatus = res.ok ? "synced" : "offline";
        } catch (e) { syncStatus = "offline"; }
	}

	// --- 4. CORE LOGIC ---
    
    // Logic to move a Bookmark to a new group/position
    function handleDrop(targetGroup: string, targetIndex: number) {
		if (!draggedId) return;
        
        // Reset sort for target group to manual when moving items
        groupSortDirections[targetGroup] = 'none';

		const movedItem = bookmarks.find(b => b.id === draggedId);
		if (!movedItem) return;

        // Filter out the moved item from everywhere else
		let otherBookmarks = bookmarks.filter(b => b.id !== draggedId);
        
        // Find items already in the target group
		let itemsInTarget = otherBookmarks.filter(b => b.group === targetGroup).sort((a,b) => a.position - b.position);
        
        // Update the group name of the moved item
        const updatedItem = { ...movedItem, group: targetGroup };

        // Insert into the target array at specific index
		itemsInTarget.splice(targetIndex, 0, updatedItem);

        // Reconstruct the full list and re-index positions
        const rest = otherBookmarks.filter(b => b.group !== targetGroup);
        bookmarks = [...rest, ...itemsInTarget].map((b, i) => ({...b, position: i}));
		
        draggedId = null; 
        syncData();
	}

    // Logic to reorder Groups
    function handleGroupDrop(targetGroupName: string, event?: DragEvent) {
        if (!draggedGroup || draggedGroup === targetGroupName) return;

        const fromIndex = groups.indexOf(draggedGroup);
        const toIndex = groups.indexOf(targetGroupName);
        const updatedGroups = [...groups];
        updatedGroups.splice(fromIndex, 1);
        
        // Determine if dropping before or after based on mouse position
        let insertIndex = toIndex;
        if (event) {
            const target = event.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            const midpoint = rect.top + rect.height / 2;
            if (event.clientY > midpoint) {
                // Drop after
                insertIndex = toIndex >= fromIndex ? toIndex : toIndex + 1;
            } else {
                // Drop before
                insertIndex = toIndex > fromIndex ? toIndex - 1 : toIndex;
            }
        } else {
            insertIndex = toIndex;
        }
        
        updatedGroups.splice(insertIndex, 0, draggedGroup);
        groups = updatedGroups;
        draggedGroup = null;
        syncData();
    }

    function handleImportJSON(file: File) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const content = ev.target?.result;
                if (typeof content !== 'string') return;
                const data = JSON.parse(content);
                if (data.bookmarks) bookmarks = data.bookmarks;
                if (data.groups) groups = data.groups;
                if (data.sorts) groupSortDirections = data.sorts;
                if (data.collapsed) collapsedGroups = data.collapsed;
                if (data.widgets) groupWidgets = data.widgets;
                syncData();
                alert("Import Successful");
            } catch (err) { alert("Invalid JSON file"); }
        };
        reader.readAsText(file);
    }

    function handleCSVImport(file: File) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            const content = ev.target?.result;
            if (typeof content !== 'string') return;
            const lines = content.split('\n');
            const newBookmarks: Bookmark[] = [];
            lines.forEach(line => {
                const parts = line.split(',');
                if (parts.length >= 2) {
                    const title = parts[0].trim();
                    const url = parts[1].trim();
                    if (title && url) {
                        newBookmarks.push({
                            id: crypto.randomUUID(),
                            title: title,
                            url: url.startsWith('http') ? url : `https://${url}`,
                            group: groups[0] || "General",
                            position: bookmarks.length + newBookmarks.length
                        });
                    }
                }
            });
            bookmarks = [...bookmarks, ...newBookmarks];
            syncData();
            alert(`Imported ${newBookmarks.length} items.`);
        };
        reader.readAsText(file);
    }

    function handleIconUpload(file: File) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            tempIcon = ev.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    function handleBulkIconUpload(file: File) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            bulkIcon = ev.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    function applyBulkIcon() {
        if (!bulkIcon || selectedBookmarks.size === 0) return;
        bookmarks = bookmarks.map(b => selectedBookmarks.has(b.id) ? {...b, icon: bulkIcon} : b);
        selectedBookmarks.clear();
        bulkIconModal = false;
        bulkIcon = "";
        syncData();
    }

    function duplicateBookmark(bookmark: Bookmark) {
        const newBM = { ...bookmark, id: crypto.randomUUID(), position: bookmarks.length };
        bookmarks = [...bookmarks, newBM];
        syncData();
        contextMenu.show = false;
    }

    async function copyToClipboard(text: string) {
        await navigator.clipboard.writeText(text);
        contextMenu.show = false;
    }

    function toggleCollapse(groupName: string) {
        collapsedGroups[groupName] = !collapsedGroups[groupName];
        syncData();
    }

    function toggleSort(groupName: string) {
        const current = groupSortDirections[groupName] || 'none';
        groupSortDirections[groupName] = current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';
        syncData();
    }

    function addBookmarkToGroup(group: string) {
        const url = columnInputs[group];
        if (!url) return;
        const fullUrl = url.startsWith('http') ? url : `https://${url}`;
        const newBookmark = { 
            id: crypto.randomUUID(), title: url.split('/')[2] || url, 
            url: fullUrl, 
            group, position: bookmarks.length, tags: [], notes: "", icon: "", description: "" 
        };
        bookmarks = [...bookmarks, newBookmark];
        columnInputs[group] = "";
        syncData();
        openEditModal(newBookmark);
    }

    function renameGroup(oldName: string, newName: string) {
        if (!newName || newName === oldName) return;
        groups = groups.map(g => g === oldName ? newName : g);
        bookmarks = bookmarks.map(b => b.group === oldName ? {...b, group: newName} : b);
        if (groupSortDirections[oldName]) {
            groupSortDirections[newName] = groupSortDirections[oldName];
            delete groupSortDirections[oldName];
        }
        if (collapsedGroups[oldName]) {
            collapsedGroups[newName] = collapsedGroups[oldName];
            delete collapsedGroups[oldName];
        }
        if (groupWidgets[oldName]) {
            groupWidgets[newName] = groupWidgets[oldName];
            delete groupWidgets[oldName];
        }
        if (groupColumns[oldName] !== undefined) {
            groupColumns[newName] = groupColumns[oldName];
            delete groupColumns[oldName];
        }
        if (groupColors[oldName]) {
            groupColors[newName] = groupColors[oldName];
            delete groupColors[oldName];
        }
        syncData();
    }

    function deleteGroup(groupName: string) {
        const count = bookmarks.filter(b => b.group === groupName).length;
        if (count > 0 && !confirm(`Delete "${groupName}" and its ${count} bookmark(s)?`)) return;
        groups = groups.filter(g => g !== groupName);
        bookmarks = bookmarks.filter(b => b.group !== groupName);
        delete groupSortDirections[groupName];
        delete collapsedGroups[groupName];
        delete groupWidgets[groupName];
        delete groupColumns[groupName];
        delete groupColors[groupName];
        syncData();
    }

    function reorderGroupInSettings(targetGroup: string, position: 'before' | 'after') {
        if (!draggedSettingsGroup || draggedSettingsGroup === targetGroup) return;
        const fromIndex = groups.indexOf(draggedSettingsGroup);
        const toIndex = groups.indexOf(targetGroup);
        const updatedGroups = [...groups];
        updatedGroups.splice(fromIndex, 1);
        const insertIndex = position === 'after' ? (toIndex >= fromIndex ? toIndex : toIndex + 1) : (toIndex > fromIndex ? toIndex - 1 : toIndex);
        updatedGroups.splice(insertIndex, 0, draggedSettingsGroup);
        groups = updatedGroups;
        draggedSettingsGroup = null;
        syncData();
    }

    function addGroupAfterTarget(targetGroup: string, newName: string) {
        if (!newName) return;
        const targetIndex = groups.indexOf(targetGroup);
        const updatedGroups = [...groups];
        updatedGroups.splice(targetIndex + 1, 0, newName);
        groups = updatedGroups;
        newSubGroupName[targetGroup] = "";
        addGroupAfter = null;
        syncData();
    }

	function addWidget() {
		if (!widgetTitle || !widgetType) return;
		const newWidget: Widget = {
			id: crypto.randomUUID(),
			title: widgetTitle,
			type: widgetType,
			content: widgetContent || widgetTemplates[widgetType] || '',
			column: widgetColumn,
			collapsed: false,
			position: widgets.length
		};
		widgets = [...widgets, newWidget];
		widgetTitle = ""; widgetContent = ""; widgetType = ""; widgetColumn = 1;
		isWidgetModalOpen = false;
		syncData();
	}

	function updateWidgetContent(id: string, newContent: string) {
		widgets = widgets.map(w => w.id === id ? {...w, content: newContent} : w);
		syncData();
	}

	function openWidgetSettings(id: string) {
		const widget = widgets.find(w => w.id === id);
		if (!widget) return;
		editWidgetId = id;
		widgetTitle = widget.title;
		widgetType = widget.type;
		widgetContent = widget.content;
		widgetColumn = widget.column;
		isWidgetModalOpen = true;
	}

	function saveWidgetChanges() {
		if (!editWidgetId) return addWidget();
		widgets = widgets.map(w => w.id === editWidgetId ? {...w, title: widgetTitle, content: widgetContent, column: widgetColumn} : w);
		widgetTitle = ""; widgetContent = ""; widgetType = ""; widgetColumn = 1; editWidgetId = null;
		isWidgetModalOpen = false;
		syncData();
	}

	function renderWidget(id: string, content: string) {
		const container = document.getElementById(`widget-${id}`);
		if (!container) return;
		container.innerHTML = '';
		const temp = document.createElement('div');
		temp.innerHTML = content;
		const scripts = temp.querySelectorAll('script');
		container.appendChild(temp);
		scripts.forEach(oldScript => {
			const newScript = document.createElement('script');
			Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
			newScript.textContent = oldScript.textContent;
			oldScript.parentNode?.replaceChild(newScript, oldScript);
		});
	}

	$effect(() => {
		widgets.forEach(w => {
			if (w.type === 'embed' && !w.collapsed) {
				setTimeout(() => renderWidget(w.id, w.content), 100);
			}
		});
	});

	function deleteWidget(id: string) {
		widgets = widgets.filter(w => w.id !== id);
		syncData();
	}

	function toggleWidgetCollapse(id: string) {
		widgets = widgets.map(w => w.id === id ? {...w, collapsed: !w.collapsed} : w);
		syncData();
	}

	function handleWidgetDrop(targetCol: number, targetPos: number) {
		if (!draggedWidget) return;
		const widget = widgets.find(w => w.id === draggedWidget);
		if (!widget || widget.id === widgets.find((w, i) => w.column === targetCol && i === targetPos)?.id) return;
		const otherWidgets = widgets.filter(w => w.id !== draggedWidget);
		const colWidgets = otherWidgets.filter(w => w.column === targetCol).sort((a, b) => a.position - b.position);
		const updatedWidget = {...widget, column: targetCol};
		colWidgets.splice(targetPos, 0, updatedWidget);
		const rest = otherWidgets.filter(w => w.column !== targetCol);
		widgets = [...rest, ...colWidgets].map((w, i) => ({...w, position: i}));
		draggedWidget = null;
		syncData();
	}

	// --- 5. DERIVED ---
    let allTags = $derived(Array.from(new Set(bookmarks.flatMap(b => b.tags || []))).sort());

    let columnGroups = $derived.by(() => {
        const cols: Record<number, string[]> = {};
        groups.forEach(g => {
            const col = groupColumns[g] ?? 1;
            if (!cols[col]) cols[col] = [];
            cols[col].push(g);
        });
        return cols;
    });

	let columnWidgets = $derived.by(() => {
		const cols: Record<number, Widget[]> = {};
		widgets.forEach(w => {
			if (!cols[w.column]) cols[w.column] = [];
			cols[w.column].push(w);
		});
		Object.keys(cols).forEach(col => {
			cols[Number(col)].sort((a, b) => a.position - b.position);
		});
		return cols;
	});

    let usedColumns = $derived.by(() => {
        const groupCols = Object.keys(columnGroups).map(Number);
        const widgetCols = Object.keys(columnWidgets).map(Number);
        const allCols = [...new Set([...groupCols, ...widgetCols])];
        return allCols.length > 0 ? allCols.sort((a, b) => a - b) : [1];
    });

	let filteredBookmarks = $derived(bookmarks.filter(b => {
		const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.notes?.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTag = !selectedTag || b.tags?.includes(selectedTag);
		const matchesFavorite = !showFavoritesOnly || b.favorite;
		return matchesSearch && matchesTag && matchesFavorite;
	}));

    function getGroupBookmarks(groupName: string) {
        let items = filteredBookmarks.filter(b => b.group === groupName);
        const dir = groupSortDirections[groupName] || 'none';
        if (dir === 'asc') return items.sort((a, b) => a.title.localeCompare(b.title));
        if (dir === 'desc') return items.sort((a, b) => b.title.localeCompare(a.title));
        return items.sort((a, b) => a.position - b.position);
    }

    function openEditModal(bookmark: Bookmark) {
		activeBookmark = bookmark;
		tempTitle = bookmark.title; tempUrl = bookmark.url;
		tempTags = bookmark.tags?.join(", ") || "";
        tempNotes = bookmark.notes || "";
		tempIcon = bookmark.icon || "";
		tempDescription = bookmark.description || "";
		isEditModalOpen = true;
        contextMenu.show = false;
	}

	function savePopupChanges() {
		if (activeBookmark) {
			const tagArray = tempTags.split(",").map(t => t.trim()).filter(t => t !== "");
			bookmarks = bookmarks.map(b => b.id === activeBookmark!.id ? { 
                ...b, title: tempTitle, url: tempUrl, tags: tagArray, notes: tempNotes, icon: tempIcon, description: tempDescription
            } : b);
			syncData(); isEditModalOpen = false;
		}
	}

	function openTaskModal(widgetId: string, task?: any) {
		taskWidgetId = widgetId;
		if (task) {
			editTaskId = task.id;
			taskText = task.text;
			taskDetails = task.details || "";
			taskPriority = task.priority || "none";
			taskDueDate = task.dueDate || "";
		} else {
			editTaskId = null;
			taskText = "";
			taskDetails = "";
			taskPriority = "none";
			taskDueDate = "";
		}
		isTaskModalOpen = true;
	}

	function saveTaskChanges() {
		if (!taskWidgetId || !taskText.trim()) return;
		const widget = widgets.find(w => w.id === taskWidgetId);
		if (!widget) return;
		const tasks = (() => { try { return JSON.parse(widget.content || '[]'); } catch { return []; } })();
		if (editTaskId) {
			const newTasks = tasks.map(t => t.id === editTaskId ? {...t, text: taskText, details: taskDetails, priority: taskPriority, dueDate: taskDueDate} : t);
			updateWidgetContent(taskWidgetId, JSON.stringify(newTasks));
		} else {
			const newTasks = [...tasks, {id: crypto.randomUUID(), text: taskText, details: taskDetails, priority: taskPriority, dueDate: taskDueDate, done: false}];
			updateWidgetContent(taskWidgetId, JSON.stringify(newTasks));
		}
		isTaskModalOpen = false;
	}

	async function fetchRSSFeed(url: string) {
		if (feedCache[url]) return feedCache[url];
		try {
			const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
			const data = await res.json();
			if (data.status === 'ok') {
				feedCache[url] = data;
				return data;
			}
		} catch (e) { console.error('RSS fetch error:', e); }
		return null;
	}
</script>

<div class="h-screen w-screen flex flex-col {bgColorMap[bgColor].light} {bgColorMap[bgColor].dark} text-slate-800 dark:text-slate-100 transition-colors font-light" style="--brand: {themeMap[accentColor]}">
	
	<header class="h-14 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center px-4 justify-between shrink-0 z-20 shadow-sm">
		<div class="flex items-center gap-4 flex-1">
			<div class="flex items-center gap-2 font-bold uppercase tracking-tighter text-sm" style="color: var(--brand)">
				<BookmarkIcon size={20} fill="currentColor" fill-opacity="0.2" />
			</div>
            
            <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all
                {syncStatus === 'synced' ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20' : 
                 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20'}">
                <Database size={10} /> <span>{syncStatus}</span>
            </div>

            <button onclick={() => isEditMode = !isEditMode} class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all {isEditMode ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}">
                {#if isEditMode}<Unlock size={14}/> Unlock{:else}<Lock size={14}/> Lock{/if}
            </button>
            <button onclick={() => showTags = !showTags} class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all {showTags ? 'bg-blue-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}">
                {#if showTags}<EyeOff size={14}/>{:else}<LayoutList size={14}/>{/if} Tags
            </button>
            <button onclick={() => showFavoritesOnly = !showFavoritesOnly} class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all {showFavoritesOnly ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}">
                <Star size={14} class="{showFavoritesOnly ? '' : 'fill-none'}" /> Favorites
            </button>
            {#if selectedBookmarks.size > 0}
                <button onclick={() => bulkIconModal = true} class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-green-500 text-white shadow-lg">
                    <Upload size={14}/> Icon ({selectedBookmarks.size})
                </button>
            {/if}
		</div>

		<div class="flex items-center gap-2 flex-[2] justify-center">
            <div class="relative w-[500px] flex items-center gap-2">
                <div class="relative flex-1">
                    <Search class="absolute left-4 top-3 text-slate-400" size={16} />
                    <input bind:value={searchQuery} placeholder="Search bookmarks..." class="w-full pl-12 pr-10 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20" />
					{#if !searchQuery}
						<span class="absolute right-3 top-3 text-[10px] text-slate-400 font-mono">Ctrl+B</span>
					{:else}
						<button onclick={() => searchQuery = ""} class="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors">
							<X size={16} />
						</button>
					{/if}
                </div>
                {#if allTags.length > 0}
                    <select bind:value={selectedTag} class="px-3 py-3 text-xs bg-slate-100 dark:bg-slate-800 border-none rounded-2xl outline-none">
                        <option value={null}>All Tags</option>
                        {#each allTags as tag}
                            <option value={tag}>{tag}</option>
                        {/each}
                    </select>
                {/if}
            </div>
        </div>

		<div class="flex items-center gap-6 flex-1 justify-end">
            <div class="text-3xl font-light text-slate-400 dark:text-slate-500 tabular-nums" style="font-family: 'Segoe UI', system-ui, sans-serif; text-shadow: 0 0 10px rgba(var(--brand-rgb), 0.3), 0 0 20px rgba(var(--brand-rgb), 0.2);">
                {time.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <button onclick={() => isSettingsOpen = true} class="p-2 text-slate-400 hover:text-slate-600"><Settings size={20}/></button>
		</div>
	</header>

	<main class="flex-1 p-6 overflow-y-auto grid gap-8 items-start content-start" style="grid-template-columns: repeat({usedColumns.length}, minmax(0, 1fr));">
		{#each usedColumns as colNum}
			<div class="flex flex-col gap-8">
			{#each (columnGroups[Number(colNum)] || []) as group, idx}
			<section class="flex flex-col min-h-[40px] relative" 
                ondragover={(e) => { if (!draggedWidget) e.preventDefault(); }} 
                ondrop={(e) => {
                    if (draggedGroup) handleGroupDrop(group, e);
                    else if (draggedId) handleDrop(group, getGroupBookmarks(group).length);
                }}>
				
                <div class="flex items-center justify-between mb-3 px-1 group-header" 
                    draggable={isEditMode} 
                    ondragstart={() => (draggedGroup = group)}
                    ondragover={(e) => { if (!draggedWidget) e.preventDefault(); }}
                    ondrop={(e) => { e.stopPropagation(); if (draggedGroup) handleGroupDrop(group, e); }}>
                    
                    <div class="flex items-center gap-3">
                        <button onclick={() => toggleCollapse(group)} class="flex items-center gap-2 group/title">
                            <ChevronRight size={12} class="text-slate-400 transition-transform duration-200 {collapsedGroups[group] ? '' : 'rotate-90'}" />
                            <h2 class="text-[11px] font-black uppercase tracking-[0.2em] group-hover/title:text-slate-600 transition-colors" style="color: {groupColors[group] ? themeMap[groupColors[group]] : '#94a3b8'}">{group}</h2>
                        </button>
                        <span class="text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{getGroupBookmarks(group).length}</span>
                        
                        <button onclick={() => toggleSort(group)} class="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg">
                            {#if groupSortDirections[group] === 'asc'} <SortAsc size={14} class="text-blue-500" />
                            {:else if groupSortDirections[group] === 'desc'} <SortDesc size={14} class="text-blue-500" />
                            {:else} <SortAsc size={14} class="text-slate-300" /> {/if}
                        </button>

                        {#if isEditMode}
                            <button onclick={() => widgetEditTarget = group} class="text-slate-300 hover:text-blue-500 transition-colors">
                                <Code size={13} />
                            </button>
                            <button onclick={() => { if(confirm(`Delete ${group}?`)) { groups = groups.filter(g => g !== group); syncData(); }}} class="text-slate-300 hover:text-red-500 transition-colors">
                                <Trash2 size={13} />
                            </button>
                        {/if}
                    </div>
				</div>

				<div class="{cardColorMap[cardColor].light} {cardColorMap[cardColor].dark} rounded-[1.5rem] shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden divide-y dark:divide-slate-800 transition-all duration-300 hover:ring-2 {hoverColorMap[hoverColor].light} {hoverColorMap[hoverColor].dark} {collapsedGroups[group] ? 'max-h-0 opacity-0 invisible' : 'max-h-[2000px] opacity-100 visible'}">
                    {#if isEditMode}
						<div class="p-3 bg-slate-50 dark:bg-slate-800/50 flex gap-2">
							<input bind:value={columnInputs[group]} list="url-suggestions" placeholder="Quick add URL..." class="flex-1 text-sm p-3 bg-white dark:bg-slate-900 rounded-xl border dark:border-slate-700 outline-none" onkeydown={(e) => e.key === 'Enter' && addBookmarkToGroup(group)} />
							<button onclick={() => addBookmarkToGroup(group)} class="text-white px-4 rounded-xl" style="background-color: var(--brand)"><Plus size={18}/></button>
						</div>
					{/if}

                    {#each getGroupBookmarks(group) as b, i (b.id)}
						<div 
							class="bookmark-row group flex items-center gap-2.5 {compactMode ? 'py-1.5 px-3' : 'p-3.5'} hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer {selectedBookmarks.has(b.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}" 
							draggable={isEditMode} 
                            ondragstart={() => (draggedId = b.id)} 
                            ondrop={(e) => { e.stopPropagation(); handleDrop(group, i); }}
							onclick={(e) => {
                                if (e.ctrlKey || e.metaKey) {
                                    const newSet = new Set(selectedBookmarks);
                                    if (newSet.has(b.id)) newSet.delete(b.id); else newSet.add(b.id);
                                    selectedBookmarks = newSet;
                                } else if (isEditMode) openEditModal(b); else window.open(b.url.startsWith('http') ? b.url : `https://${b.url}`);
                            }}
							oncontextmenu={(e) => { 
                                e.preventDefault(); 
                                const menuHeight = 180;
                                const menuWidth = 192;
                                const x = e.clientX + menuWidth > window.innerWidth ? window.innerWidth - menuWidth : e.clientX;
                                const y = e.clientY + menuHeight > window.innerHeight ? window.innerHeight - menuHeight : e.clientY;
                                contextMenu = { x, y, show: true, target: b }; 
                            }}
						>
							<GripVertical size={14} class="text-slate-300 {isEditMode ? 'opacity-100' : 'opacity-0'} shrink-0" />
							<button onclick={(e) => { e.stopPropagation(); bookmarks = bookmarks.map(bm => bm.id === b.id ? {...bm, favorite: !bm.favorite} : bm); syncData(); }} class="shrink-0">
								<Star size={14} class="{b.favorite ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} hover:text-amber-400 transition-colors" />
							</button>
                            <div class="w-4 h-4 flex items-center justify-center shrink-0">
                                {#if b.icon && isSVG(b.icon)}
                                    <div class="w-full h-full flex items-center justify-center text-slate-400">{@html b.icon}</div>
                                {:else}
                                    <img src={b.icon || `https://www.google.com/s2/favicons?domain=${b.url}`} alt="" class="w-full h-full object-contain grayscale-[0.3] group-hover:grayscale-0 transition-all" />
                                {/if}
                            </div>
							<div class="flex-1 truncate">
                                <div class="text-[13px] font-medium truncate text-slate-700 dark:text-slate-200 leading-tight">{b.title}</div>
                                {#if showTags && b.tags?.length}
                                    <div class="flex gap-1 mt-1">
                                        {#each b.tags as tag}<span class="text-[9px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-500">{tag}</span>{/each}
                                    </div>
                                {/if}
                            </div>
						</div>
					{/each}

                    {#if groupWidgets[group]}
                        <div class="p-4 bg-slate-50/50 dark:bg-slate-800/20 border-t dark:border-slate-800 overflow-hidden">
                            {@html groupWidgets[group]}
                        </div>
                    {/if}
				</div>

                {#if isEditMode && draggedGroup && draggedGroup !== group}
                    <div 
                        class="h-8 mt-2 rounded-lg border-2 border-dashed border-blue-400 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[9px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider opacity-0 hover:opacity-100 transition-opacity"
                        ondragover={(e) => { e.preventDefault(); e.stopPropagation(); e.currentTarget.style.opacity = '1'; }}
                        ondragleave={(e) => { e.currentTarget.style.opacity = '0'; }}
                        ondrop={(e) => { 
                            e.stopPropagation(); 
                            const fromIndex = groups.indexOf(draggedGroup!);
                            const toIndex = groups.indexOf(group);
                            const updatedGroups = [...groups];
                            updatedGroups.splice(fromIndex, 1);
                            // Always insert after the target group
                            const insertIndex = fromIndex < toIndex ? toIndex : toIndex + 1;
                            updatedGroups.splice(insertIndex, 0, draggedGroup!);
                            groups = updatedGroups;
                            draggedGroup = null;
                            syncData();
                        }}
                    >
                        Drop here to place underneath
                    </div>
                {/if}
			</section>
			{/each}

			{#each (columnWidgets[Number(colNum)] || []) as widget, widgetIdx}
			<section class="flex flex-col" 
				ondragover={(e) => { if (draggedWidget) e.preventDefault(); }}
				ondrop={(e) => {
					if (draggedWidget) handleWidgetDrop(Number(colNum), widgetIdx);
				}}>
				<div class="flex items-center justify-between mb-3 px-1 group-header"
					draggable={isEditMode}
					ondragstart={() => (draggedWidget = widget.id)}
					ondragover={(e) => { if (draggedWidget) e.preventDefault(); }}
					ondrop={(e) => { e.stopPropagation(); if (draggedWidget) handleWidgetDrop(Number(colNum), widgetIdx); }}>
					<button onclick={() => toggleWidgetCollapse(widget.id)} class="flex items-center gap-2 group/title">
						<ChevronRight size={12} class="text-slate-400 transition-transform duration-200 {widget.collapsed ? '' : 'rotate-90'}" />
						<h2 class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover/title:text-slate-600 transition-colors">{widget.title}</h2>
					</button>
					{#if isEditMode}
						<div class="flex items-center gap-2">
							<button onclick={() => openWidgetSettings(widget.id)} class="text-slate-300 hover:text-blue-500 transition-colors">
								<Settings size={13} />
							</button>
							<button onclick={() => deleteWidget(widget.id)} class="text-slate-300 hover:text-red-500 transition-colors">
								<Trash2 size={13} />
							</button>
						</div>
					{/if}
				</div>
				<div class="{cardColorMap[cardColor].light} {cardColorMap[cardColor].dark} rounded-[1.5rem] shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden transition-all duration-300 {widget.collapsed ? 'max-h-0 opacity-0 invisible' : 'max-h-[2000px] opacity-100 visible'}">
					<div class="p-4" id="widget-{widget.id}">
						{#if widget.type === 'notes'}
							<textarea value={widget.content.match(/placeholder="([^"]*)"/)?.[0] ? '' : widget.content} oninput={(e) => updateWidgetContent(widget.id, e.currentTarget.value)} placeholder="Your notes here..." class="w-full h-[200px] p-3 border border-slate-200 dark:border-slate-700 rounded-xl outline-none resize-vertical bg-transparent"></textarea>
						{:else if widget.type === 'tasks'}
							{@const tasks = (() => { try { return JSON.parse(widget.content || '[]'); } catch { return []; } })()}
							<div class="space-y-2">
								<button onclick={() => openTaskModal(widget.id)} class="p-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-1 text-[11px] font-medium">
									<Plus size={14} /> Add
								</button>
								<div class="space-y-1 max-h-[300px] overflow-y-auto">
									{#each tasks as task}
										{@const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.done}
										<div class="flex items-start gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group border-l-2 {task.priority === 'high' ? 'border-red-500' : task.priority === 'medium' ? 'border-amber-500' : task.priority === 'low' ? 'border-blue-500' : 'border-transparent'}" onclick={() => isEditMode && openTaskModal(widget.id, task)}>
											<input type="checkbox" checked={task.done} onchange={(e) => {
												e.stopPropagation();
												const newTasks = tasks.map(t => t.id === task.id ? {...t, done: e.currentTarget.checked} : t);
												updateWidgetContent(widget.id, JSON.stringify(newTasks));
											}} class="w-4 h-4 mt-0.5 cursor-pointer" />
											<div class="flex-1 flex flex-col gap-1 cursor-pointer">
												<span class="text-sm {task.done ? 'line-through text-slate-400' : ''}">{task.text}</span>
												{#if task.details}
													<span class="text-[11px] text-slate-500">{task.details}</span>
												{/if}
												{#if task.dueDate}
													<span class="text-[10px] {isOverdue ? 'text-red-500 font-semibold' : 'text-slate-400'}">{new Date(task.dueDate).toLocaleDateString()}</span>
												{/if}
											</div>
											<button onclick={(e) => {
												e.stopPropagation();
												const newTasks = tasks.filter(t => t.id !== task.id);
												updateWidgetContent(widget.id, JSON.stringify(newTasks));
											}} class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity">
												<X size={14} />
											</button>
										</div>
									{/each}
								</div>
							</div>
						{:else if widget.type === 'rss'}
							{#await fetchRSSFeed(widget.content)}
								<div class="text-center text-slate-400 text-sm py-4">Loading feed...</div>
							{:then feed}
								{#if feed && feed.items}
									<div class="space-y-2 max-h-[400px] overflow-y-auto">
										{#each feed.items.slice(0, 10) as item}
											<a href={item.link} target="_blank" class="block p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
												<div class="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">{item.title}</div>
												<div class="text-[10px] text-slate-400 mt-1">{new Date(item.pubDate).toLocaleDateString()}</div>
											</a>
										{/each}
									</div>
								{:else}
									<div class="text-center text-red-400 text-sm py-4">Failed to load feed</div>
								{/if}
							{/await}
						{:else if widget.type === 'embed'}
							<!-- Rendered by renderWidget function -->
						{:else}
							{@html widget.content}
						{/if}
					</div>
				</div>
			</section>
			{/each}
			</div>
		{/each}
	</main>

	<datalist id="url-suggestions">
		{#each bookmarks as b}
			<option value={b.url}>{b.title}</option>
		{/each}
	</datalist>

	{#if isSettingsOpen}
		<div class="fixed inset-0 z-[100] flex justify-end">
			<div class="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick={() => isSettingsOpen = false}></div>
			<div class="relative w-80 bg-white dark:bg-slate-900 h-full p-8 shadow-2xl border-l dark:border-slate-800 overflow-y-auto space-y-8">
				<div class="flex justify-between items-center border-b dark:border-slate-800 pb-4">
					<h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Settings</h3>
					<button onclick={() => isSettingsOpen = false}><X/></button>
				</div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Manage Groups</label>
                    <div class="flex gap-2 mb-3">
                        <input bind:value={newGroupName} placeholder="New Group Name..." class="flex-1 bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs outline-none" onkeydown={(e) => {if(e.key === 'Enter' && newGroupName) { groups = [...groups, newGroupName]; newGroupName = ""; syncData(); }}} />
                        <button onclick={() => { if(newGroupName) { groups = [...groups, newGroupName]; newGroupName = ""; syncData(); }}} class="p-3 bg-blue-500 text-white rounded-xl"><Plus size={16}/></button>
                    </div>
                    <div class="space-y-2 max-h-48 overflow-y-auto">
                        {#each groups as group, idx}
                            <div 
                                class="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg group/item cursor-move relative"
                                draggable={editingGroupName !== group}
                                ondragstart={() => draggedSettingsGroup = group}
                                ondragover={(e) => e.preventDefault()}
                                ondrop={(e) => {
                                    e.stopPropagation();
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const midpoint = rect.top + rect.height / 2;
                                    reorderGroupInSettings(group, e.clientY > midpoint ? 'after' : 'before');
                                }}
                            >
                                <GripVertical size={12} class="text-slate-300 shrink-0" />
                                {#if editingGroupName === group}
                                    <input bind:value={tempGroupName} class="flex-1 bg-white dark:bg-slate-900 px-2 py-1 rounded text-xs outline-none" onkeydown={(e) => { if(e.key === 'Enter') { renameGroup(group, tempGroupName); editingGroupName = null; } else if(e.key === 'Escape') { editingGroupName = null; }}} />
                                    <button onclick={() => { renameGroup(group, tempGroupName); editingGroupName = null; }} class="p-1 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded"><Edit2 size={14}/></button>
                                {:else}
                                    <span class="flex-1 text-xs px-2">{group}</span>
                                    <select bind:value={groupColors[group]} onchange={() => syncData()} class="text-[10px] px-1 py-0.5 bg-white dark:bg-slate-900 rounded border dark:border-slate-700">
                                        <option value="">Default</option>
                                        {#each Object.keys(themeMap) as color}
                                            <option value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>
                                        {/each}
                                    </select>
                                    <select bind:value={groupColumns[group]} onchange={() => syncData()} class="text-[10px] px-1 py-0.5 bg-white dark:bg-slate-900 rounded border dark:border-slate-700">
                                        {#each Array.from({length: 5}, (_, i) => i + 1) as col}
                                            <option value={col}>Col {col}</option>
                                        {/each}
                                    </select>
                                    <button onclick={() => addGroupAfter = group} class="p-1 text-slate-400 hover:text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity" title="Add group below"><Plus size={14}/></button>
                                    <button onclick={() => { editingGroupName = group; tempGroupName = group; }} class="p-1 text-slate-400 hover:text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><Edit2 size={14}/></button>
                                    <button onclick={() => deleteGroup(group)} class="p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><Trash2 size={14}/></button>
                                {/if}
                            </div>
                            {#if addGroupAfter === group}
                                <div class="flex items-center gap-2 ml-6 p-2 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-500">
                                    <input bind:value={newSubGroupName[group]} placeholder="New group name..." class="flex-1 px-2 py-1 rounded text-xs outline-none bg-slate-50 dark:bg-slate-800" onkeydown={(e) => { if(e.key === 'Enter') addGroupAfterTarget(group, newSubGroupName[group]); else if(e.key === 'Escape') addGroupAfter = null; }} />
                                    <button onclick={() => addGroupAfterTarget(group, newSubGroupName[group])} class="p-1 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded"><Plus size={14}/></button>
                                    <button onclick={() => addGroupAfter = null} class="p-1 text-slate-400 hover:text-red-500 rounded"><X size={14}/></button>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Accent Color</label>
                    <div class="flex gap-2 flex-wrap">
                        {#each Object.keys(themeMap) as color}
                            <button 
                                onclick={() => { accentColor = color; syncData(); }} 
                                class="w-10 h-10 rounded-full border-2 {accentColor === color ? 'border-white dark:border-slate-900 ring-2 ring-offset-2 ring-slate-400' : 'border-transparent'}" 
                                style="background-color: {themeMap[color]};"
                                title={color.charAt(0).toUpperCase() + color.slice(1)}
                            ></button>
                        {/each}
                    </div>
                </div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Background</label>
                    <select bind:value={bgColor} onchange={() => syncData()} class="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs outline-none">
                        <option value="slate">Slate</option>
                        <option value="gray">Gray</option>
                        <option value="neutral">Neutral</option>
                        <option value="stone">Stone</option>
                        <option value="zinc">Zinc</option>
                    </select>
                </div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Card Style</label>
                    <select bind:value={cardColor} onchange={() => syncData()} class="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs outline-none">
                        <option value="white">White</option>
                        <option value="slate">Slate</option>
                        <option value="gray">Gray</option>
                        <option value="neutral">Neutral</option>
                    </select>
                </div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Hover Border</label>
                    <div class="flex gap-2 flex-wrap">
                        {#each Object.keys(themeMap) as color}
                            <button 
                                onclick={() => { hoverColor = color; syncData(); }} 
                                class="w-10 h-10 rounded-full border-2 {hoverColor === color ? 'border-white dark:border-slate-900 ring-2 ring-offset-2 ring-slate-400' : 'border-transparent'}" 
                                style="background-color: {themeMap[color]};"
                                title={color.charAt(0).toUpperCase() + color.slice(1)}
                            ></button>
                        {/each}
                    </div>
                </div>

				<div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Manage Widgets</label>
					<button onclick={() => isWidgetModalOpen = true} class="w-full flex items-center justify-between p-4 bg-blue-500 text-white rounded-2xl text-xs font-medium hover:bg-blue-600">
                        <span>Add Widget</span> <Plus size={16}/>
                    </button>
					<div class="space-y-2 max-h-48 overflow-y-auto">
						{#each widgets as widget}
							<div class="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg group/item">
								<span class="flex-1 text-xs px-2">{widget.title}</span>
								<span class="text-[9px] text-slate-400">Col {widget.column}</span>
								<button onclick={() => openWidgetSettings(widget.id)} class="p-1 text-slate-400 hover:text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><Settings size={14}/></button>
								<button onclick={() => deleteWidget(widget.id)} class="p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><Trash2 size={14}/></button>
							</div>
						{/each}
					</div>
                </div>

                <div class="space-y-4 pt-4 border-t dark:border-slate-800">
                    <label class="text-[10px] font-bold uppercase text-slate-400 block">Imports & Exports</label>
                    <div class="flex flex-col gap-2">
                        <label class="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs hover:bg-slate-100 font-medium cursor-pointer">
                            <span>Import JSON</span> <FileUp size={16}/>
                            <input type="file" accept=".json" class="hidden" onchange={(e) => e.currentTarget.files && handleImportJSON(e.currentTarget.files[0])} />
                        </label>
                        <label class="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs hover:bg-slate-100 font-medium cursor-pointer">
                            <span>Import CSV</span> <FileSpreadsheet size={16}/>
                            <input type="file" accept=".csv" class="hidden" onchange={(e) => e.currentTarget.files && handleCSVImport(e.currentTarget.files[0])} />
                        </label>
                        <button onclick={() => {
                            const data = { groups, bookmarks, sorts: groupSortDirections, collapsed: collapsedGroups, widgets: groupWidgets, columns: groupColumns, groupColors };
                            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                            const a = document.createElement('a'); 
                            a.href = URL.createObjectURL(blob); 
                            a.download = 'backup.json'; 
                            a.click();
                        }} class="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs hover:bg-slate-100 font-medium">
                            <span>Export JSON</span> <Download size={16}/>
                        </button>
                    </div>
                </div>
			</div>
		</div>
	{/if}

    {#if contextMenu.show}
		<div class="fixed z-[200] bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border dark:border-slate-800 py-1.5 w-48 text-[11px]" style="top: {contextMenu.y}px; left: {contextMenu.x}px;" onclick={(e) => e.stopPropagation()}>
			<button onclick={() => openEditModal(contextMenu.target!)} class="w-full text-left px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 transition-colors"><Edit2 size={14} class="text-blue-500"/> Edit Properties</button>
			<button onclick={() => { bookmarks = bookmarks.map(b => b.id === contextMenu.target!.id ? {...b, favorite: !b.favorite} : b); syncData(); contextMenu.show = false; }} class="w-full text-left px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 transition-colors"><Star size={14} class="text-amber-500"/> {contextMenu.target?.favorite ? 'Unfavorite' : 'Favorite'}</button>
            <button onclick={() => duplicateBookmark(contextMenu.target!)} class="w-full text-left px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 transition-colors"><CopyPlus size={14} class="text-emerald-500"/> Duplicate</button>
            <button onclick={() => copyToClipboard(contextMenu.target!.url)} class="w-full text-left px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 transition-colors"><Copy size={14} class="text-amber-500"/> Copy URL</button>
			<button onclick={() => { bookmarks = bookmarks.filter(b => b.id !== contextMenu.target!.id); syncData(); contextMenu.show = false; }} class="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-500 flex items-center gap-3 transition-colors"><Trash2 size={14}/> Delete</button>
		</div>
	{/if}

    {#if isEditModalOpen}
		<div class="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			<div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] p-10 space-y-4 shadow-2xl overflow-y-auto max-h-[90vh]">
                <div class="flex justify-between border-b dark:border-slate-800 pb-4">
				    <h3 class="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Properties</h3>
                    <button onclick={() => isEditModalOpen = false}><X size={20}/></button>
                </div>
				<div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Title</label>
                    <input bind:value={tempTitle} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">URL</label>
                    <input bind:value={tempUrl} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Icon</label>
                    <div class="flex gap-2">
                        <input bind:value={tempIcon} placeholder="SVG code or URL" class="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                        <label class="px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center">
                            <Upload size={16} />
                            <input type="file" accept="image/*" class="hidden" onchange={(e) => e.currentTarget.files && handleIconUpload(e.currentTarget.files[0])} />
                        </label>
                    </div>
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Tags</label>
                    <input bind:value={tempTags} placeholder="tag1, tag2, tag3" class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Description</label>
                    <textarea bind:value={tempDescription} placeholder="Website description..." class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none resize-none" rows="2"></textarea>
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Notes</label>
                    <textarea bind:value={tempNotes} placeholder="Add notes..." class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none resize-none" rows="3"></textarea>
                </div>
				<button onclick={savePopupChanges} class="w-full py-4 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-xl mt-4" style="background-color: var(--brand)">Update</button>
			</div>
		</div>
	{/if}

    {#if bulkIconModal}
		<div class="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			<div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] p-10 space-y-4 shadow-2xl">
                <div class="flex justify-between border-b dark:border-slate-800 pb-4">
				    <h3 class="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Bulk Icon Change</h3>
                    <button onclick={() => { bulkIconModal = false; bulkIcon = ""; }}><X size={20}/></button>
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Icon for {selectedBookmarks.size} bookmarks</label>
                    <div class="flex gap-2">
                        <input bind:value={bulkIcon} placeholder="SVG code or URL" class="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                        <label class="px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center">
                            <Upload size={16} />
                            <input type="file" accept="image/*" class="hidden" onchange={(e) => e.currentTarget.files && handleBulkIconUpload(e.currentTarget.files[0])} />
                        </label>
                    </div>
                </div>
				<button onclick={applyBulkIcon} class="w-full py-4 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-xl mt-4" style="background-color: var(--brand)">Apply to Selected</button>
			</div>
		</div>
	{/if}

	{#if isWidgetModalOpen}
		<div class="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			<div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] p-10 space-y-4 shadow-2xl">
                <div class="flex justify-between border-b dark:border-slate-800 pb-4">
				    <h3 class="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{editWidgetId ? 'Edit' : 'Add'} Widget</h3>
                    <button onclick={() => { isWidgetModalOpen = false; editWidgetId = null; widgetTitle = ""; widgetContent = ""; widgetType = ""; }}><X size={20}/></button>
                </div>
				<div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Title</label>
                    <input bind:value={widgetTitle} placeholder="Widget title..." class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
                </div>
				{#if !editWidgetId}
				<div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Type</label>
                    <select bind:value={widgetType} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none">
						<option value="">Select type...</option>
						<option value="stock">Stock Quote</option>
						<option value="weather">Weather</option>
						<option value="calendar">Calendar</option>
						<option value="notes">Notes</option>
						<option value="tasks">Tasks</option>
						<option value="rss">RSS Feed</option>
						<option value="embed">Custom Embed</option>
					</select>
                </div>
				{/if}
				<div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Column</label>
                    <select bind:value={widgetColumn} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none">
						{#each Array.from({length: 5}, (_, i) => i + 1) as col}
                            <option value={col}>Column {col}</option>
                        {/each}
					</select>
                </div>
				{#if widgetType === 'embed' || widgetType === 'rss' || editWidgetId}
				<div class="space-y-1">
                    <label class="text-[9px] font-bold uppercase text-slate-400 ml-2">{widgetType === 'rss' ? 'RSS Feed URL' : 'Content'}</label>
                    <textarea bind:value={widgetContent} placeholder={widgetType === 'rss' ? 'https://example.com/feed.xml' : 'Paste iframe or embed code...'} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none resize-none" rows="4"></textarea>
                </div>
				{/if}
				<button onclick={saveWidgetChanges} class="w-full py-4 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-xl mt-4" style="background-color: var(--brand)">{editWidgetId ? 'Update' : 'Add'} Widget</button>
			</div>
		</div>
	{/if}

	{#if isTaskModalOpen}
		<div class="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			<div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] p-10 space-y-4 shadow-2xl">
				<div class="flex justify-between border-b dark:border-slate-800 pb-4">
					<h3 class="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{editTaskId ? 'Edit' : 'Add'} Task</h3>
					<button onclick={() => isTaskModalOpen = false}><X size={20}/></button>
				</div>
				<div class="space-y-1">
					<label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Task</label>
					<input bind:value={taskText} placeholder="Task name..." class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
				</div>
				<div class="space-y-1">
					<label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Details</label>
					<textarea bind:value={taskDetails} placeholder="Add details..." class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none resize-none" rows="3"></textarea>
				</div>
				<div class="space-y-1">
					<label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Priority</label>
					<select bind:value={taskPriority} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none">
						<option value="none">None</option>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				<div class="space-y-1">
					<label class="text-[9px] font-bold uppercase text-slate-400 ml-2">Due Date</label>
					<input type="date" bind:value={taskDueDate} class="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-[13px] outline-none" />
				</div>
				<button onclick={saveTaskChanges} class="w-full py-4 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-xl mt-4" style="background-color: var(--brand)">{editTaskId ? 'Update' : 'Add'} Task</button>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(body) { margin: 0; padding: 0; overflow: hidden; font-family: 'Century Gothic', sans-serif; }
    .bookmark-row { border-left: 3px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .bookmark-row:hover { border-left: 3px solid var(--brand); transform: scale(1.02); }
    .group-header { cursor: grab; }
    .group-header:active { cursor: grabbing; }
    ::-webkit-scrollbar { display: none; }
</style>