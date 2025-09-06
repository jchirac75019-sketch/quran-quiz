if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('SW enregistré:', reg.scope))
      .catch(err => console.log('Erreur SW:', err));
  });
}
