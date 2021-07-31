function getApiHost() {
  let host;

  switch (window.location.hostname) {
    case "localhost":
      host = `${window.location.origin}/api`;
      break;
    case "staging.invites.usd21.org":
      host = "https://api.usd21.org/invites/staging/api";
      break;
    case "invites.usd21.org":
      host = "https://api.usd21.org/invites/api";
      break;
  }

  return host;
}

function isMobileDevice() {
  const result = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  return result;
};

function showToast(message, duration = 5000) {
  const snackbar = document.querySelector(".snackbar");
  const body = document.querySelector(".snackbar-body");

  body.innerHTML = message;
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, duration);
}

function showMaterialIcons() {
  console.log("showMaterialIcons()");
  document.querySelectorAll(".material-icons").forEach(item => item.style.opacity = "1");
}

function init() {
  showMaterialIcons();
}

init();