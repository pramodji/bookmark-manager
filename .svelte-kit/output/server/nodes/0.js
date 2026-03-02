

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.y5k4E45w.js","_app/immutable/chunks/DWJ3NdWv.js","_app/immutable/chunks/CXppdvkx.js","_app/immutable/chunks/D3dHuVIH.js"];
export const stylesheets = ["_app/immutable/assets/0.Y_0odEGB.css"];
export const fonts = [];
