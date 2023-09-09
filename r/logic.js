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

  document.title = getPhrase("pagetitle").replaceAll("{RECIPIENT-NAME}", name);

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

  if (eventNameEl && eventName) {
    const url = `../i/#/${eventid}/${getUserId()}/${invite.recipient.id}`;
    eventNameEl.innerHTML = `<a href="${url}" class="text-underline">${eventName}</a>`;
  }
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
        mapLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
        directionsLink = mapLink;
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
      headlineFollowUpEl.innerText = getPhrase("headlineFollowUp").replaceAll(
        "{RECIPIENT-NAME}",
        name
      );
      phoneLinkContainerEl.classList.remove("d-none");
      smsLinkContainerEl.classList.remove("d-none");
      addToPhonebookLinkEl.innerText = getPhrase("addToPhonebook").replaceAll(
        "{RECIPIENT-NAME}",
        name
      );
      addToPhonebookLinkContainerEl.classList.remove("d-none");
      followupEl.classList.remove("d-none");
    } else if (sentvia === "email") {
      emailLinkEl.setAttribute("href", `mailto:${email}`);
      emailLinkContainerEl.classList.remove("d-none");
      headlineFollowUpEl.innerText = getPhrase("headlineFollowUp").replaceAll(
        "{RECIPIENT-NAME}",
        name
      );
      followupEl.classList.remove("d-none");
    } else if (sentvia === "qrcode") {
      headlineFollowUpEl.innerText = getPhrase(
        "headlineFollowUpInPerson"
      ).replaceAll("{RECIPIENT-NAME}", name);
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

async function onAddToPhoneBook(e) {
  e.preventDefault();

  // vCard 3.0 spec:  https://www.evenx.com/vcard-3-0-format-specification

  const userDateTimePrefs = Intl.DateTimeFormat().resolvedOptions();
  const makeVCardVersion = () => `VERSION:3.0`;
  const makeVCardName = (theName) => {
    let name = theName;
    name = name.replaceAll(",", ",");
    name = name.replaceAll(";", ";");
    name = name.replaceAll('"', '"');
    name = name.replaceAll("\\", "\\\\");
    return `N:;${name};`;
  };
  const makeVCardFormattedName = (theName) => {
    let name = theName;
    name = name.replaceAll(",", ",");
    name = name.replaceAll(";", ";");
    name = name.replaceAll('"', '"');
    name = name.replaceAll("\\", "\\\\");
    return `FN:${name}`;
  };
  const makeVCardTel = (phone) => `TEL;TYPE=CELL:${phone}`;
  const makeVCardGeo = (lat, long) => {
    if (lat && long) {
      return `GEO:${lat};${long}`;
    } else {
      return "";
    }
  };
  const makeVCardLang = (locale) => `LANG:${locale}`;
  const makeVCardURL = (url = window.location.href) => `URL:${url}`;
  const makeVCardTimeStamp = () => {
    const dateNow = moment.tz(moment(), "UTC").format();
    return `REV:${dateNow}`;
  };
  const makeVCardNote = (invite, event, locale) => {
    const invitedDateIso = moment
      .tz(moment(invite.utctime).utc(), userDateTimePrefs.timeZone)
      .format();
    const dateInvited = Intl.DateTimeFormat(locale, {
      dateStyle: "long",
    }).format(new Date(invitedDateIso));
    let note = getPhrase("addToPhonebookNote");
    note = note.replaceAll("{EVENT-TITLE}", event.title);
    note = note.replaceAll("{INVITATION-DATE}", dateInvited);
    note = note.replaceAll(",", ",");
    note = note.replaceAll(";", ";");
    note = note.replaceAll('"', '"');
    note = note.replaceAll("\\", "\\\\");
    return `NOTE:${note}`;
  };

  const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  const inviteId = Number(getHash().split("/")[1]);
  const invites = await localforage.getItem("invites");
  if (!invites) return;
  if (!Array.isArray(invites)) return;
  const invite = invites.find((item) => item.invitationid === inviteId);
  if (!invite) return;

  const lat = invite.coords ? invite.coords.x : null;
  const long = invite.coords ? invite.coords.y : null;
  const eventid = invite.eventid || null;

  const events = await localforage.getItem("events");
  const eventsByFollowedUsers = await localforage.getItem(
    "eventsByFollowedUsers"
  );
  if (!events) return;
  if (!Array.isArray(events)) return;
  let event;
  event = events.find((item) => item.eventid === eventid);
  if (!event && eventsByFollowedUsers) {
    event = eventsByFollowedUsers.find((item) => item.eventid === eventid);
  }
  if (!event) return;
  const countryIso = event.country;
  const langIso = event.lang;
  const locale = `${langIso.toLowerCase()}-${countryIso.toUpperCase()}`;

  const vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardName(invite.recipient.name)}
${makeVCardFormattedName(invite.recipient.name)}
${makeVCardTel(invite.recipient.sms)}
${makeVCardLang(locale)}
${makeVCardURL()}
${makeVCardNote(invite, event, locale)}
${makeVCardTimeStamp()}
${makeVCardGeo(lat, long)}
END:VCARD`;
  downloadToFile(vcard, "vcard.vcf", "text/vcard");
}

async function populateResendInvite(e) {
  const resendLinkEl = document.querySelector("#resendLink");
  const inviteid = Number(getHash().split("/")[1]) || null;
  if (!inviteid) return;
  const invites = await localforage.getItem("invites");
  if (!invites) return;
  const invite = invites.find((item) => item.invitationid === inviteid);
  if (!invite) return;
  const eventid = invite.eventid;
  const events = await localforage.getItem("events");
  const eventsByFollowedUsers = await localforage.getItem(
    "eventsByFollowedUsers"
  );
  if (!events && !eventsByFollowedUsers) return;
  let event = events.find((item) => item.eventid === eventid);
  if (!event) {
    event = eventsByFollowedUsers.find((item) => item.eventid === eventid);
  }
  if (!event) return;
  const eventTitle = event.title;
  const userid = getUserId();
  const recipientid = invite.recipient.id;
  const phrasesForSendInvite = await fetch(
    `../send/i18n/${event.lang}.json`
  ).then((res) => res.json());
  const inviteLink =
    window.location.hostname === "localhost"
      ? `${window.location.origin}/i/#/${eventid}/${userid}/${recipientid}`
      : `${window.location.origin}/i/${eventid}/${userid}/${recipientid}`;

  if (invite.recipient.sms) {
    const clickBelowTranslationObject = phrasesForSendInvite.phrases.find(
      (item) => item.key === "clickBelow"
    );
    if (!clickBelowTranslationObject) return;
    const clickBelow = clickBelowTranslationObject.translated;
    const sendBody = eventTitle + " " + clickBelow + " \r\n\r\n" + inviteLink;
    resendLinkEl.setAttribute(
      "href",
      "sms:" + invite.recipient.sms + ";?&body=" + encodeURI(sendBody)
    );
  } else if (invite.recipient.email) {
    const invitationToTranslationObject = phrasesForSendInvite.phrases.find(
      (item) => item.key === "invitationto"
    );
    const invitationTo = invitationToTranslationObject.translated;
    const emailSubjectLine =
      localStorage.getItem("subjectLineEmail") ||
      `${invitationTo} ${eventTitle}`;
    const emailBodyText = localStorage.getItem("bodyTextEmail") || "";

    let sendBody = `${eventTitle} \r\n\r\n${inviteLink}`;
    if (emailBodyText.length) {
      sendBody += `\r\n\r\n${emailBodyText}\r\n\r\n`;
    }

    resendLinkEl.setAttribute(
      "href",
      "mailto:" +
        invite.recipient.email +
        "?subject=" +
        encodeURI(emailSubjectLine) +
        "&body=" +
        encodeURI(sendBody)
    );
  }
}

async function populateFollowUpReminder() {
  const inviteid = Number(getHash().split("/")[1]) || null;
  if (!inviteid) return;
  const invites = await localforage.getItem("invites");
  if (!invites) return;
  const invite = invites.find((item) => item.invitationid === inviteid);
  if (!invite) {
    const addCalendarReminderLinkContainerEl = document.querySelector(
      "#addCalendarReminderLinkContainer"
    );
    addCalendarReminderLinkContainerEl.classList.add("d-none");
    return;
  }
  const followUpParagraphEl = document.querySelector("#followUpParagraph");
  const followUpParagraphContent = getPhrase("followUpParagraph").replaceAll(
    "{RECIPIENT-NAME}",
    invite.recipient.name
  );
  followUpParagraphEl.innerText = followUpParagraphContent;
}

function onClickAway(event) {
  const addToCalendar = document.querySelector("#addToCalendar");
  const clickedCalendar = addToCalendar.contains(event.target);
  const addToCalendarButton = addToCalendar.querySelector(
    "#addToCalendarButton"
  );
  if (!clickedCalendar) {
    $(".collapse").collapse("hide");
  }

  if (!clickedCalendar) {
    addToCalendarButton.classList.add("collapsed");
    addToCalendarButton.setAttribute("aria-expanded", "false");
  }
}

function onSetFollowupReminder(e) {
  e.preventDefault();

  $("#modal").modal();
}

function attachListeners() {
  window.addEventListener("hashchange", () => {
    window.location.reload();
  });

  document.addEventListener("click", onClickAway);

  document
    .querySelector("#addToPhonebookLink")
    .addEventListener("click", onAddToPhoneBook);

  document
    .querySelector("#addCalendarReminderLink")
    .addEventListener("click", onSetFollowupReminder);
}

async function init() {
  await populateContent();
  await getRecipient();
  populateResendInvite();
  populateFollowUpReminder();
  attachListeners();
  globalHidePageSpinner();
}

init();
