const CACHE_NAME = "quinta-fr-v11";

// 1. Core App Shell (Lightweight - installs in <300ms)
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "./FR_LA QUINTA.html",
  "./icon-192.png",
  "./icon-512.png",
  "./quinta.geojson"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/quinta_fr/9.mp3"
];

const TILE_URLS = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3719/3419.png",
  "./tiles/13/3719/3420.png",
  "./tiles/13/3719/3421.png",
  "./tiles/13/3719/3422.png",
  "./tiles/13/3719/3423.png",
  "./tiles/13/3720/3419.png",
  "./tiles/13/3720/3420.png",
  "./tiles/13/3720/3421.png",
  "./tiles/13/3720/3422.png",
  "./tiles/13/3720/3423.png",
  "./tiles/13/3721/3419.png",
  "./tiles/13/3721/3420.png",
  "./tiles/13/3721/3421.png",
  "./tiles/13/3721/3422.png",
  "./tiles/13/3721/3423.png",
  "./tiles/13/3722/3419.png",
  "./tiles/13/3722/3420.png",
  "./tiles/13/3722/3421.png",
  "./tiles/13/3722/3422.png",
  "./tiles/13/3722/3423.png",
  "./tiles/14/7439/6839.png",
  "./tiles/14/7439/6840.png",
  "./tiles/14/7439/6841.png",
  "./tiles/14/7439/6842.png",
  "./tiles/14/7439/6843.png",
  "./tiles/14/7439/6844.png",
  "./tiles/14/7440/6839.png",
  "./tiles/14/7440/6840.png",
  "./tiles/14/7440/6841.png",
  "./tiles/14/7440/6842.png",
  "./tiles/14/7440/6843.png",
  "./tiles/14/7440/6844.png",
  "./tiles/14/7441/6839.png",
  "./tiles/14/7441/6840.png",
  "./tiles/14/7441/6841.png",
  "./tiles/14/7441/6842.png",
  "./tiles/14/7441/6843.png",
  "./tiles/14/7441/6844.png",
  "./tiles/14/7442/6839.png",
  "./tiles/14/7442/6840.png",
  "./tiles/14/7442/6841.png",
  "./tiles/14/7442/6842.png",
  "./tiles/14/7442/6843.png",
  "./tiles/14/7442/6844.png",
  "./tiles/14/7443/6839.png",
  "./tiles/14/7443/6840.png",
  "./tiles/14/7443/6841.png",
  "./tiles/14/7443/6842.png",
  "./tiles/14/7443/6843.png",
  "./tiles/14/7443/6844.png",
  "./tiles/15/14881/13681.png",
  "./tiles/15/14881/13682.png",
  "./tiles/15/14881/13683.png",
  "./tiles/15/14881/13684.png",
  "./tiles/15/14882/13681.png",
  "./tiles/15/14882/13682.png",
  "./tiles/15/14882/13683.png",
  "./tiles/15/14882/13684.png",
  "./tiles/15/14883/13681.png",
  "./tiles/15/14883/13682.png",
  "./tiles/15/14883/13683.png",
  "./tiles/15/14883/13684.png",
  "./tiles/15/14884/13681.png",
  "./tiles/15/14884/13682.png",
  "./tiles/15/14884/13683.png",
  "./tiles/15/14884/13684.png",
  "./tiles/16/29763/27363.png",
  "./tiles/16/29763/27364.png",
  "./tiles/16/29763/27365.png",
  "./tiles/16/29763/27366.png",
  "./tiles/16/29763/27367.png",
  "./tiles/16/29763/27368.png",
  "./tiles/16/29764/27363.png",
  "./tiles/16/29764/27364.png",
  "./tiles/16/29764/27365.png",
  "./tiles/16/29764/27366.png",
  "./tiles/16/29764/27367.png",
  "./tiles/16/29764/27368.png",
  "./tiles/16/29765/27363.png",
  "./tiles/16/29765/27364.png",
  "./tiles/16/29765/27365.png",
  "./tiles/16/29765/27366.png",
  "./tiles/16/29765/27367.png",
  "./tiles/16/29765/27368.png",
  "./tiles/16/29766/27363.png",
  "./tiles/16/29766/27364.png",
  "./tiles/16/29766/27365.png",
  "./tiles/16/29766/27366.png",
  "./tiles/16/29766/27367.png",
  "./tiles/16/29766/27368.png",
  "./tiles/16/29767/27363.png",
  "./tiles/16/29767/27364.png",
  "./tiles/16/29767/27365.png",
  "./tiles/16/29767/27366.png",
  "./tiles/16/29767/27367.png",
  "./tiles/16/29767/27368.png",
  "./tiles/17/59528/54728.png",
  "./tiles/17/59528/54729.png",
  "./tiles/17/59528/54730.png",
  "./tiles/17/59528/54731.png",
  "./tiles/17/59528/54732.png",
  "./tiles/17/59528/54733.png",
  "./tiles/17/59528/54734.png",
  "./tiles/17/59529/54728.png",
  "./tiles/17/59529/54729.png",
  "./tiles/17/59529/54730.png",
  "./tiles/17/59529/54731.png",
  "./tiles/17/59529/54732.png",
  "./tiles/17/59529/54733.png",
  "./tiles/17/59529/54734.png",
  "./tiles/17/59530/54728.png",
  "./tiles/17/59530/54729.png",
  "./tiles/17/59530/54730.png",
  "./tiles/17/59530/54731.png",
  "./tiles/17/59530/54732.png",
  "./tiles/17/59530/54733.png",
  "./tiles/17/59530/54734.png",
  "./tiles/17/59531/54728.png",
  "./tiles/17/59531/54729.png",
  "./tiles/17/59531/54730.png",
  "./tiles/17/59531/54731.png",
  "./tiles/17/59531/54732.png",
  "./tiles/17/59531/54733.png",
  "./tiles/17/59531/54734.png",
  "./tiles/17/59532/54728.png",
  "./tiles/17/59532/54729.png",
  "./tiles/17/59532/54730.png",
  "./tiles/17/59532/54731.png",
  "./tiles/17/59532/54732.png",
  "./tiles/17/59532/54733.png",
  "./tiles/17/59532/54734.png",
  "./tiles/17/59533/54728.png",
  "./tiles/17/59533/54729.png",
  "./tiles/17/59533/54730.png",
  "./tiles/17/59533/54731.png",
  "./tiles/17/59533/54732.png",
  "./tiles/17/59533/54733.png",
  "./tiles/17/59533/54734.png",
  "./tiles/17/59534/54728.png",
  "./tiles/17/59534/54729.png",
  "./tiles/17/59534/54730.png",
  "./tiles/17/59534/54731.png",
  "./tiles/17/59534/54732.png",
  "./tiles/17/59534/54733.png",
  "./tiles/17/59534/54734.png",
  "./tiles/18/119058/109457.png",
  "./tiles/18/119058/109458.png",
  "./tiles/18/119058/109459.png",
  "./tiles/18/119058/109460.png",
  "./tiles/18/119058/109461.png",
  "./tiles/18/119058/109462.png",
  "./tiles/18/119058/109463.png",
  "./tiles/18/119058/109464.png",
  "./tiles/18/119058/109465.png",
  "./tiles/18/119058/109466.png",
  "./tiles/18/119059/109457.png",
  "./tiles/18/119059/109458.png",
  "./tiles/18/119059/109459.png",
  "./tiles/18/119059/109460.png",
  "./tiles/18/119059/109461.png",
  "./tiles/18/119059/109462.png",
  "./tiles/18/119059/109463.png",
  "./tiles/18/119059/109464.png",
  "./tiles/18/119059/109465.png",
  "./tiles/18/119059/109466.png",
  "./tiles/18/119060/109457.png",
  "./tiles/18/119060/109458.png",
  "./tiles/18/119060/109459.png",
  "./tiles/18/119060/109460.png",
  "./tiles/18/119060/109461.png",
  "./tiles/18/119060/109462.png",
  "./tiles/18/119060/109463.png",
  "./tiles/18/119060/109464.png",
  "./tiles/18/119060/109465.png",
  "./tiles/18/119060/109466.png",
  "./tiles/18/119061/109457.png",
  "./tiles/18/119061/109458.png",
  "./tiles/18/119061/109459.png",
  "./tiles/18/119061/109460.png",
  "./tiles/18/119061/109461.png",
  "./tiles/18/119061/109462.png",
  "./tiles/18/119061/109463.png",
  "./tiles/18/119061/109464.png",
  "./tiles/18/119061/109465.png",
  "./tiles/18/119061/109466.png",
  "./tiles/18/119062/109457.png",
  "./tiles/18/119062/109458.png",
  "./tiles/18/119062/109459.png",
  "./tiles/18/119062/109460.png",
  "./tiles/18/119062/109461.png",
  "./tiles/18/119062/109462.png",
  "./tiles/18/119062/109463.png",
  "./tiles/18/119062/109464.png",
  "./tiles/18/119062/109465.png",
  "./tiles/18/119062/109466.png",
  "./tiles/18/119063/109457.png",
  "./tiles/18/119063/109458.png",
  "./tiles/18/119063/109459.png",
  "./tiles/18/119063/109460.png",
  "./tiles/18/119063/109461.png",
  "./tiles/18/119063/109462.png",
  "./tiles/18/119063/109463.png",
  "./tiles/18/119063/109464.png",
  "./tiles/18/119063/109465.png",
  "./tiles/18/119063/109466.png",
  "./tiles/18/119064/109457.png",
  "./tiles/18/119064/109458.png",
  "./tiles/18/119064/109459.png",
  "./tiles/18/119064/109460.png",
  "./tiles/18/119064/109461.png",
  "./tiles/18/119064/109462.png",
  "./tiles/18/119064/109463.png",
  "./tiles/18/119064/109464.png",
  "./tiles/18/119064/109465.png",
  "./tiles/18/119064/109466.png",
  "./tiles/18/119065/109457.png",
  "./tiles/18/119065/109458.png",
  "./tiles/18/119065/109459.png",
  "./tiles/18/119065/109460.png",
  "./tiles/18/119065/109461.png",
  "./tiles/18/119065/109462.png",
  "./tiles/18/119065/109463.png",
  "./tiles/18/119065/109464.png",
  "./tiles/18/119065/109465.png",
  "./tiles/18/119065/109466.png",
  "./tiles/18/119066/109457.png",
  "./tiles/18/119066/109458.png",
  "./tiles/18/119066/109459.png",
  "./tiles/18/119066/109460.png",
  "./tiles/18/119066/109461.png",
  "./tiles/18/119066/109462.png",
  "./tiles/18/119066/109463.png",
  "./tiles/18/119066/109464.png",
  "./tiles/18/119066/109465.png",
  "./tiles/18/119066/109466.png",
  "./tiles/18/119067/109457.png",
  "./tiles/18/119067/109458.png",
  "./tiles/18/119067/109459.png",
  "./tiles/18/119067/109460.png",
  "./tiles/18/119067/109461.png",
  "./tiles/18/119067/109462.png",
  "./tiles/18/119067/109463.png",
  "./tiles/18/119067/109464.png",
  "./tiles/18/119067/109465.png",
  "./tiles/18/119067/109466.png"
];

// 1. INSTALL: Instant installation of core app shell
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching core app shell...");
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("[SW] App shell pre-cache warning:", err);
      });
    })
  );
});

// 2. ACTIVATE: Clean old caches, claim clients & run parallel background pre-cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );

  // Background caching of all audio files & map tiles (non-blocking)
  preCacheOfflineContent();
});

// Message listener for skip waiting
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fast parallel batch precaching function
async function preCacheOfflineContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    console.log("[SW] Starting background precache for tiles and audio...");

    // Helper for fast parallel batch fetch
    async function fetchBatch(urls, batchSize) {
      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (url) => {
            try {
              const req = url.endsWith(".mp3") ? new Request(url, { method: "GET" }) : url;
              const res = await fetch(req);
              if (res && res.status === 200) {
                await cache.put(url, res);
              }
            } catch (err) {
              // Silently ignore individual tile/audio network glitches
            }
          })
        );
      }
    }

    // Pre-cache all audio MP3 files (3 at a time)
    await fetchBatch(AUDIO_URLS, 3);
    // Pre-cache all map tile PNGs (15 at a time)
    await fetchBatch(TILE_URLS, 15);

    console.log("[SW] Background precache complete! Notifying app...");

    // Notify all open client tabs/windows
    const clientsList = await self.clients.matchAll();
    for (const client of clientsList) {
      client.postMessage({ type: "CACHE_COMPLETE" });
    }
  } catch (err) {
    console.warn("[SW] Background precache warning:", err);
  }
}

// 3. FETCH: Smart Cache-First for Assets/Tiles + HTTP Range Request Handler for Audios
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Audio Range Request Handler for HTML5 Audio (iOS & Android)
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Cache-First strategy for Map Tiles & App Assets
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (netRes && netRes.status === 200) {
          const resToCache = netRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        }
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
