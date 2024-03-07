	navigator.serviceWorker.register('/sw.js', {scope:  '/'});
	const queryParams = new URLSearchParams(window.location.search);
	let url = queryParams.get('url');

	if (url) {
		window.location.replace(location.origin + __uv$config.prefix + __uv$config.encodeUrl(url))
	}
function proxy(url) {
	worker().then(e=>{

		if (!url.startsWith('http')) {url = 'https://' + url; }
	
		location.replace(window.__uv$config.prefix + __uv$config.encodeUrl(url));
	});
}

async function worker() {
	var a = await navigator.serviceWorker.register('/sw.js', {scope:  '/'});
	let Beartag = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/meta";
	BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: Beartag });
	return a;
}

	document.querySelector('.uvform').addEventListener('submit', (e) => {
		e.preventDefault();
		worker().then(e=>{
			var val = document.querySelector('.uvinput').value;
			if (!val.startsWith('http')) val = 'https://' + val;
		
			location.assign(location.origin + window.__uv$config.prefix + __uv$config.encodeUrl(val));
		});
	});