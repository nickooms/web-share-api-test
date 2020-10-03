const $ = (selector) => document.querySelector(selector);

const { location } = window;

if (location.protocol === 'http:') {
  const requireHTTPS = $('#requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
  location.href = `https:${location.href.substring(5)}`;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
