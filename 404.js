particlesJS("particles-js", { 
    "particles": {
      "number": {
        "value": 123,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ed6b6b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7023414010527227,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7.891476416322726,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 455.5444555444555,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 111.8881118881119,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  if (document.referrer && !sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  if (location.href.includes(__uv$config.prefix)) {
    registerSW();
  }
  async function registerSW() {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");
  
    if (!navigator.serviceWorker)
      throw new Error("Your browser doesn't support service workers.");
  
    // Unregister all service workers
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (let registration of registrations) {
      await registration.unregister();
    }
  
    // Register the new service worker
    await navigator.serviceWorker.register("/sw.js", {
      scope: __uv$config.prefix,
    });
    let Beartag = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/ws/";
    BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: Beartag });
  }