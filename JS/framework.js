import { routes } from '../routes/routes.js';

export function initFramework() {
  window.addEventListener("hashchange", () => {
    navigateTo(location.hash.slice(1));
  });

  navigateTo(location.hash.slice(1) || "/");
}

function navigateTo(path) {
  const route = routes.find(r => r.path === path);
  if (route && route.component) {
    document.getElementById("app").innerHTML = route.component.render();
  }
}

export function updateScreen(){
  navigateTo(location.hash.slice(1) || "/");
}
