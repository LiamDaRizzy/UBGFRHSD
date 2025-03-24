navigator.serviceWorker.register('/uv.serviceWorker.js', { scope: '/' }).then(() => {
    console.log("Service Worker Registered");
}).catch(err => {
    console.error("Service Worker Registration Failed", err);
});
