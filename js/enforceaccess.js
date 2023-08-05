function framebuster() {
  const isFramed = top.location === self.location ? false : true;

  if (isFramed) {
    top.location = self.location;
  }
}

function getAccessToken() {
  let needToRefresh = false;
  const accessToken = sessionStorage.getItem("accessToken") || "";
  const now = Date.now().valueOf() / 1000;
  let expiry = now;
  try {
    expiry = JSON.parse(atob(accessToken.split(".")[1])).exp;
    if (expiry < now) needToRefresh = true;
  } catch (err) {
    needToRefresh = true;
  }
  return new Promise((resolve, reject) => {
    if (!needToRefresh) return resolve(accessToken);
    const refreshToken = localStorage.getItem("refreshToken") || "";
    if (!refreshToken.length) return reject("refresh token missing");

    const endpoint = `${getAPIHost()}/refresh-token`;

    fetch(endpoint, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const logoutUrl = `/logout/`;
        const accessScriptEl = document.querySelector("#enforceaccess");
        if (accessScript) {
          if (accessScriptEl.hasAttribute("data-return-here")) {
            const redirectUrl = window.location.href;
            sessionStorage.setItem("redirectOnLogin", redirectUrl);
          }
        }
        switch (data.msg) {
          case "tokens renewed":
            const { accessToken, refreshToken } = data;
            localStorage.setItem("refreshToken", refreshToken);
            sessionStorage.setItem("accessToken", accessToken);
            const country =
              JSON.parse(atob(accessToken.split(".")[1])).country || "us";
            setCountry(country);
            resolve(accessToken);
            break;
          default:
            window.location.href = logoutUrl;
            break;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

function getAPIHost(forceRemote = false) {
  const local = "http://localhost:4000";
  const remote = "https://api.usd21.org";
  const host = window.location.hostname === "localhost" ? local : remote;
  return forceRemote ? remote : host;
}

async function getPermissions() {
  const accessToken = await getAccessToken();
  const claims = JSON.parse(atob(accessToken.split(".")[1]));
  const permissions = [];

  if (claims.canAuthToAuth) permissions.push("canAuthToAuth");
  if (claims.canAuthorize) permissions.push("canAuthorize");
  if (claims.isAuthorized) permissions.push("isAuthorized");

  return permissions;
}

async function isSysadmin() {
  const accessToken = await getAccessToken();
  const claims = JSON.parse(atob(accessToken.split(".")[1]));
  const usertype = claims.usertype || "user";
  return usertype === "sysadmin" ? true : false;
}

function verifyDataKey() {
  const logoutUrl = "/logout/";
  const dataKey = localStorage.getItem("datakey") || "";

  if (!dataKey.length) return (window.location.href = logoutUrl);
}

function verifyRefreshToken() {
  const logoutUrl = "/logout/";
  const refreshToken = localStorage.getItem("refreshToken") || "";
  let isAuthorized = true;

  if (!refreshToken.length) return (window.location.href = logoutUrl);
  try {
    const parsedToken = JSON.parse(atob(refreshToken.split(".")[1]));
    if (Date.now() >= parsedToken.exp * 1000) {
      isAuthorized = false;
    }
  } catch (err) {
    console.error(err);
    isAuthorized = false;
  }
  if (!isAuthorized) window.location.href = logoutUrl;
}

framebuster();
verifyRefreshToken();
verifyDataKey();
