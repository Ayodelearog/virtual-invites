let syncedInvites = false;

function getRecipient() {
  return new Promise(async (resolve, reject) => {
    const hash = window.location.hash;
    let recipientParts = hash.split("/") || null;
    if (!recipientParts) {
      return reject(new Error("Required URL parameters are missing"));
    }
    if (!Array.isArray(recipientParts)) {
      return reject(new Error("URL parameters must be separated by slashes"));
    }
    if (!recipientParts.length) {
      return reject(new Error("At least one URL parameter is required"));
    }

    const invitationid = recipientParts[1] || null;

    let invites = (await localforage.getItem("invites")) || null;

    await syncInvites();
    syncedInvites = true;
    invites = await localforage.getItem("invites");

    const invite = invites.find(
      (item) => item.invitationid === parseInt(Math.abs(invitationid))
    );

    if (invite) {
      renderRecipient(invite);
      resolve();
    }

    return reject(new Error("invite not found"));
  });
}

async function renderRecipient(invite) {
  let mapLink;
  let directionsLink;
  const {
    coords,
    interactions,
    eventid,
    recipient,
    sentvia,
    timezone,
    utctime,
  } = invite;
  const { email, id, name, sms } = recipient;
  const dateInvitedEl = document.querySelector("#dateInvited");
  const invitedFromLocationEl = document.querySelector("#invitedFromLocation");
  const eventNameEl = document.querySelector("#eventName");
  const interactionViewsEl = document.querySelector("#interactionViews");
  const timezoneNoticeEl = document.querySelector("#timezoneNotice");
  const userDateTimePrefs = Intl.DateTimeFormat().resolvedOptions();
  const userTimezone = userDateTimePrefs.timeZone || "";
  const { locale } = userDateTimePrefs;
  const whenInvited = Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: userTimezone,
  }).format(new Date(moment(utctime).utc().tz(timezone)._d));

  const events = await localforage.getItem("eventsFromMyInvites");
  const event = events.find((item) => item.eventid === eventid);

  const inviteViews = interactions.length
    ? interactions.filter((item) => item.action === "viewed invite")
    : [];

  const eventName = event.title || null;

  timezoneNoticeEl.innerText = getPhrase("timezone-notice").replaceAll(
    "{EVENT-TIMEZONE}",
    userTimezone
  );

  document.querySelectorAll("[data-i18n='pagetitle']").forEach((item) => {
    item.innerText = item.innerText.replaceAll("{RECIPIENT-NAME}", name);
  });

  let inviteViewsHTML = ``;
  if (inviteViews.length === 0) {
    const phraseNoViews = getPhrase("paragraph_no_views").replaceAll(
      "{RECIPIENT-NAME}",
      name
    );

    inviteViewsHTML = phraseNoViews;
  } else {
    let phraseTotalViews = getPhrase("paragraph_1_view");
    if (inviteViews.length > 1) {
      phraseTotalViews = getPhrase("total_views").replaceAll(
        "{QUANTITY-VIEWS}",
        `<span class="inviteViewsQuantity">${inviteViews.length}</span>`
      );
    }
    inviteViews.forEach((item) => {
      const dateText = Intl.DateTimeFormat(locale, {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: userTimezone,
      }).format(new Date(item.utcdate));
      inviteViewsHTML += `<div class="mb-2">${dateText}</div>\n`;
    });
    inviteViewsHTML = `<details><summary class="mb-2">${phraseTotalViews}</summary>${inviteViewsHTML}</details>`;
  }

  if (eventNameEl && eventName) eventNameEl.innerText = eventName;
  if (dateInvitedEl) dateInvitedEl.innerText = whenInvited;
  if (invitedFromLocationEl) {
    let latitude;
    let longitude;

    if (coords) {
      if (coords.hasOwnProperty("x")) {
        latitude = coords.x;
      }
      if (coords.hasOwnProperty("y")) {
        longitude = coords.y;
      }
    }

    if (latitude && longitude) {
      const operatingSystem = getMobileOperatingSystem();
      const mapPointLabel = getPhrase("mapPointLabel").replaceAll(
        "{RECIPIENT-NAME}",
        name
      );

      if (operatingSystem === "iOS") {
        // Docs for Apple Maps URLs:  https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
        // Docs for showing a point:  https://developer.apple.com/documentation/mapkit/mkmappoint
        mapLink = `http://maps.apple.com/?q=${mapPointLabel}&ll=${latitude},${longitude}&t=m`;
        directionsLink = `http://maps.apple.com/?daddr=${latitude},${longitude}&t=m`;
      } else {
        // Docs for Google Maps URLs:  https://developers.google.com/maps/documentation/urls
        mapLink = `https://www.google.com/maps/search/?api=1&query=${mapPointLabel},${latitude}%2C${longitude}`;
        directionsLink = `https://www.google.com/maps/place/${mapPointLabel}/@${latitude}%2C${longitude}`;
      }

      invitedFromLocationEl.setAttribute("href", mapLink);
    } else {
      const invitedFromLocationContainer = document.querySelector(
        "#invitedFromLocationContainer"
      );
      if (invitedFromLocationContainer) invitedFromLocationContainer.remove();
    }

    const headlineFollowUpEl = document.querySelector("#headlineFollowUp");
    const followupEl = document.querySelector("#followup");
    const phoneLinkContainerEl = document.querySelector("#phoneLinkContainer");
    const phoneLinkEl = document.querySelector("#phoneLink");
    const smsLinkContainerEl = document.querySelector("#smsLinkContainer");
    const smsLinkEl = document.querySelector("#smsLink");
    const emailLinkContainerEl = document.querySelector("#emailLinkContainer");
    const emailLinkEl = document.querySelector("#emailLink");
    const addCalendarReminderLinkEl = document.querySelector(
      "#addCalendarReminderLink"
    );
    const resendLinkContainerEl = document.querySelector(
      "#resendLinkContainer"
    );
    const resendLinkEl = document.querySelector("#resendLink");
    const addToPhonebookLinkContainerEl = document.querySelector(
      "#addToPhonebookLinkContainer"
    );
    const addToPhonebookLinkEl = document.querySelector("#addToPhonebookLink");
    const qrCodeMapLinkEl = document.querySelector("#qrCodeMapLink");
    const followupQRCodeWithLocationEl = document.querySelector(
      "#followupQRCodeWithLocation"
    );
    const followupQRCodeWithoutLocationEl = document.querySelector(
      "#followupQRCodeWithoutLocation"
    );
    const qrCodeWithLocationEl = document.querySelector("#qrCodeWithLocation");
    const qrCodeWithoutLocationEl = document.querySelector(
      "#qrCodeWithoutLocation"
    );

    if (sentvia === "sms") {
      phoneLinkEl.setAttribute("href", `tel:${sms}`);
      smsLinkEl.setAttribute("href", `sms:${sms}`);
      headlineFollowUpEl.innerText = getPhrase("headlineFollowUp");
      phoneLinkContainerEl.classList.remove("d-none");
      smsLinkContainerEl.classList.remove("d-none");
      addToPhonebookLinkContainerEl.classList.remove("d-none");
      followupEl.classList.remove("d-none");
    } else if (sentvia === "email") {
      emailLinkEl.setAttribute("href", `mailto:${email}`);
      emailLinkContainerEl.classList.remove("d-none");
      headlineFollowUpEl.innerText = getPhrase("headlineFollowUp");
      followupEl.classList.remove("d-none");
    } else if (sentvia === "qrcode") {
      headlineFollowUpEl.innerText = getPhrase("headlineFollowUpInPerson");
      if (latitude && longitude) {
        qrCodeMapLinkEl.setAttribute("href", directionsLink);
        qrCodeWithLocationEl.innerText = getPhrase(
          "qrCodeWithLocation"
        ).replaceAll("{RECIPIENT-NAME}", name);
        followupQRCodeWithLocationEl.classList.remove("d-none");
      } else {
        qrCodeWithoutLocationEl.innerText = getPhrase(
          "qrCodeWithoutLocation"
        ).replaceAll("{RECIPIENT-NAME}", name);
        followupQRCodeWithoutLocationEl.classList.remove("d-none");
      }
    }
  }
  if (interactionViewsEl) interactionViewsEl.innerHTML = inviteViewsHTML;
}

function attachListeners() {
  window.addEventListener("hashchange", () => {
    window.location.reload();
  });
}

async function init() {
  await populateContent();
  await getRecipient();
  attachListeners();
  globalHidePageSpinner();
}

init();
