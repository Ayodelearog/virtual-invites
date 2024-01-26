function unsubscribeFromNotifications() {
  return new Promise((resolve, reject) => {
    const unsubscribeJSON = sessionStorage.getItem(
      "unsubscribeFromNotifications"
    );
    if (!unsubscribeJSON) reject();

    const unsubscribe = JSON.parse(unsubscribeJSON);
    const { jwt, unsubscribeFrom } = unsubscribe;
    const payload = jwt.split(".")[1];
    const data = JSON.parse(atob(payload));
    const { invitationid, userid } = data;

    // TODO:  find the invitationid
    // TODO:  decrypt the contact method (email or SMS)
    // TODO:  compile an array of invitationids that correspond to the recipient's contact method
    // TODO:  transmit those invitationids to the API and set them as unsubscribed in the database
    // TODO:  sync invites
    // TODO:  resolve this promise, so the user can be immediately redirected to the final unsubscribe page
  });
}

function onSubmit(e) {
  e.preventDefault();
  const spinner = document.querySelector("#progressbar");
  const submitButton = document.querySelector("#formsubmit");
  const alert = document.querySelector("#alert");
  const username = e.target.username.value.trim().toLowerCase();
  const password = e.target.password.value.trim();
  const usernameEl = document.querySelector("#username");
  const passwordEl = document.querySelector("#password");
  const usernameError = document.querySelector(".username.invalid-feedback");
  const passwordError = document.querySelector(".password.invalid-feedback");
  const endpoint = `${getApiHost()}/login`;
  const controller = new AbortController();
  const signal = controller.signal;
  let state = "before"; // before | during | after | aborted

  document
    .querySelectorAll(".is-invalid")
    .forEach((item) => item.classList.remove("is-invalid"));

  if (!username.length) {
    usernameError.innerHTML = "Please input your username.";
    usernameEl.classList.add("is-invalid");
    usernameEl.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!password.length) {
    passwordError.innerHTML = "Please input your password.";
    passwordEl.classList.add("is-invalid");
    passwordEl.scrollIntoView({ behavior: "smooth" });
    return;
  }

  state = "during";
  show(spinner);
  hide(submitButton);
  hide(alert);

  fetch(endpoint, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    signal: signal,
  })
    .then((res) => res.json())
    .then(async (data) => {
      switch (data.msg) {
        case "invalid login":
          const phrase = getPhrase("invalid login");
          const headline = getPhrase("invalid login headline");
          state = "before";
          hide(spinner);
          show(submitButton);
          showAlert(alert, phrase, headline);
          break;
        case "user authenticated":
          state = "after";
          localStorage.setItem("datakey", data.datakey);
          localStorage.setItem("refreshToken", data.refreshToken);
          sessionStorage.setItem("accessToken", data.accessToken);
          const countriesPromise = getCountries(getLang());
          const churchesPromise = syncChurches();
          const eventsPromise = syncEvents();
          const invitesPromise = syncInvites();
          const updatedInvitesPromise = syncUpdatedInvites();
          const notesPromise = syncAllNotes();
          const settingsPromise = syncSettings();
          await Promise.allSettled([
            countriesPromise,
            churchesPromise,
            eventsPromise,
            invitesPromise,
            updatedInvitesPromise,
            notesPromise,
            settingsPromise,
          ]);

          let redirectUrl = "../";

          if (sessionStorage.getItem("redirectOnLogin")) {
            const newUrl = sessionStorage.getItem("redirectOnLogin");
            sessionStorage.removeItem("redirectOnLogin");
            if (newUrl && newUrl.length) {
              redirectUrl = newUrl;
            }
          }

          if (sessionStorage.getItem("unsubscribeFromNotifications")) {
            await unsubscribeFromNotifications();
          }

          window.location.href = redirectUrl;
          break;
        default:
          state = "before";
          const glitchMessage = getPhrase("glitchMessage");
          hide(spinner);
          show(submitButton);
          showAlert(alert, glitchMessage);
          break;
      }
    })
    .catch((err) => {
      state = "before";
      console.error(err);
      hide(spinner);
      show(submitButton);
    });

  setTimeout(() => {
    controller.abort();
    const alertMessage = getPhrase("timedout");
    hide(spinner);
    show(submitButton);
    if (state === "during") {
      showAlert(alert, alertMessage);
      state = "aborted";
    }
  }, 30000);
}

function attachListeners() {
  document.querySelector("#formlogin").addEventListener("submit", onSubmit);
}

async function init() {
  const newUrl = sessionStorage.getItem("redirectOnLogin");
  const unsubscribeFromNotifications = sessionStorage.getItem(
    "unsubscribeFromNotifications"
  );
  clearStorage();
  if (newUrl && newUrl.length) {
    sessionStorage.setItem("redirectOnLogin", newUrl);
  }
  await populateContent();
  attachListeners();
  globalHidePageSpinner();
}

init();
