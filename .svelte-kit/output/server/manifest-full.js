export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","svelte.svg","tauri.svg","vite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DfcppEoz.js",app:"_app/immutable/entry/app.Ds0fIt2S.js",imports:["_app/immutable/entry/start.DfcppEoz.js","_app/immutable/chunks/BkpGC-QU.js","_app/immutable/chunks/CXppdvkx.js","_app/immutable/chunks/0pz69QBQ.js","_app/immutable/entry/app.Ds0fIt2S.js","_app/immutable/chunks/CXppdvkx.js","_app/immutable/chunks/LPgFSd4K.js","_app/immutable/chunks/DWJ3NdWv.js","_app/immutable/chunks/0pz69QBQ.js","_app/immutable/chunks/D2uxtCFl.js","_app/immutable/chunks/D3dHuVIH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
