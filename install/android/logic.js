function hideNavs() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    const hamburgerMenu = document.querySelector(".navbar-toggler");
    const bottomNavBar = document.querySelector("#navButtons");
    hamburgerMenu.classList.add("d-none");
    bottomNavBar.classList.add("d-none");
  }
}

async function init() {
  await populateContent();
  hideNavs();
  globalHidePageSpinner();
}

init();
