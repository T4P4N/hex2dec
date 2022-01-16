"serviceWorker" in navigator &&
  window.addEventListener("load", () =>
    navigator.serviceWorker
      .register("sw.js", { scope: "/" })
      .then((e) => console.log("Service Worker registered"))
      .catch((e) => "SW registration failed")
  );
// export default function swDev() {
//   let swUrl = `${process.env.PUBLIC_URL === '.'? '' : process.env.PUBLIC_URL}/sw.js`;
//   console.log(swUrl)
//   navigator.serviceWorker.register(swUrl).then((response) => {
//     console.log("Res: ", response, 'scope: ',response.scope);
//   });
// }
// https://www.youtube.com/watch?v=eZt2TgWXF0Q&list=PL8p2I9GklV44oDSE3j-E-OkvxFkz5a1d8&index=71
// Shit only works when you're using localhost to browse.
// port forward before running dev server
