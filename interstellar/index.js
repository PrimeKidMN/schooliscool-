const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("/sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let Beartag = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/ws/";
      BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: Beartag });
      let url = input.value.trim();
      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;
      sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
      location.href = "./go.html";
    });
});

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
