// 最简化的离线缓存兵卒
self.addEventListener('install', (e) => {
  console.log('[GemiLi] 后勤兵就位');
});
self.addEventListener('fetch', (e) => {
  // 拦截请求，目前先直接放行，保证 PWA 安装机制生效即可
});
