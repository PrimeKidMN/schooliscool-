function encodeUrl(str){
  if (!str) return str;
  return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
}

function openUV(url){
  /*var uv = document.createElement("iframe");
  var wlh = window.location.hostname;
  uv.src = "https://u." + (wlh.startsWith("www") ? wlh.substring(4) : wlh) + "?open=" + encodeUrl(url);
  uv.style.display = "none";
  document.body.appendChild(uv);*/
  window.navigator.serviceWorker.register('/sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let Beartag = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/ws/";
    BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: Beartag });
    window.location.href = __uv$config.prefix + encodeUrl(url);
  });
}
