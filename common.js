const $ = (selector) => document.querySelector(selector);

if (window.location.protocol === 'http:') {
  const requireHTTPS = $('#requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
  window.location.href = `https:${window.location.href.substring(5)}`;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
