self.addEventListener('install', function (event) {
    // 确保 Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成
    event.waitUntil(
        // 创建了叫做 v1 的新缓存
        caches.open('v1').then(function (cache) {
            cache.addAll([
                './index.html', // 相对于 sw.js 的路径 缓存 index.html
            ]);
        })
    );
});

/**
 * 缓存优先
 * @param {*} request 
 * @returns 
 */
const cacheFirst = async (request) => {
    // 从缓存中读取 respondWith表示拦截请求并返回自定义的响应
    const responseFromCache = await caches.match(request);
    console.log('responseFromCache', responseFromCache);
    if (responseFromCache) {
        return responseFromCache
    }
    // 如果缓存中没有，就从网络中请求
    const responseFromServer = await fetch(request);
    const cache = await caches.open(cacheName);
    // 将请求到的资源添加到缓存中
    cache.put(request, responseFromServer.clone());
    return responseFromServer;
}

self.addEventListener("fetch", (event) => {
    // 拦截请求
    console.log('caches match',);
    console.log('fetch', event.request.url);
    event.respondWith(cacheFirst(event.request));
});

const deleteCache = async (key) => {
    await caches.delete(key);
};

const deleteOldCaches = async () => {
    const cacheKeepList = ["v2"];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
    event.waitUntil(deleteOldCaches());
});


