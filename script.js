// Example JavaScript to toggle sidebar visibility (if needed)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch((error) => {
//         console.log('Service Worker registration failed:', error);
//       });
//   }
  
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then((registration) => {
      console.log("Service worker registration successful:", registration);
    })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });
}