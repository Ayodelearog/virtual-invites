let viewedPreview = false;

function getDefaultRecipientName(gender) {
  const maleNames = [
    "Leandro",
    "Luis",
    "Brian",
    "Drew",
    "Kairo",
    "George",
    "Ryley",
    "Aaron",
    "Jose",
    "Maddox"
  ];

  const femaleNames = [
    "Brittany",
    "Amanda",
    "Nicole",
    "Priya",
    "Kalyani",
    "Annalisa",
    "Monica",
    "Andile",
    "Phyllis",
    "Natalia"
  ];

  const userGender = gender ? gender : JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).gender;
  let defaultRecipientName;

  if (userGender === "female") {
    defaultRecipientName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  } else {
    defaultRecipientName = maleNames[Math.floor(Math.random() * maleNames.length)];
  }

  return defaultRecipientName;
}

function getDefaultInvitedDate() {
  let lang = JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).lang || "en";

  return getRelativeDate(-7, lang);
}

function getSenderFirstName() {
  const firstName = JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).firstname || "John";
  return firstName;
}

function initIntlTelInput() {
  const input = document.querySelector("#contactPhone");
  const initialCountry = localStorage.getItem("countryIso") || "us";
  iti = window.intlTelInput(input, {
    autoPlaceholder: "",
    initialCountry: initialCountry,
    preferredCountries: [initialCountry],
    showOnly: [initialCountry],
    utilsScript: "../../js/intl-tel-input-17.0.0/js/utils.js",
  });

  if (input.value.trim().length > 0) {
    document
      .querySelector("label[for='contactPhone']")
      .parentElement.classList.add("has-value");
  }
}

function onClickDetectLocation(e) {
  e.preventDefault();

  const onGeoLocationError = (err) => {
    showToast(getPhrase("geocoordinatesErrorMessage"), 5000, "danger");
  };

  const onGeoLocationSuccess = (pos) => {
    const { latitude, longitude, timestamp } = pos.coords;
    const latitudeEl = document.querySelector("#latitude");
    const longitudeEl = document.querySelector("#longitude");

    latitudeEl.value = latitude;
    longitudeEl.value = longitude;

    latitudeEl.setAttribute("data-timestamp", timestamp);
    longitudeEl.setAttribute("data-timestamp", timestamp);

    latitudeEl.parentElement.classList.add("has-value");
    longitudeEl.parentElement.classList.add("has-value");

    customScrollTo("label[for=latitude]");

    showToast(
      `<a href="https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}" class="text-white">
        ${getPhrase("geocoordinatesSuccessMessage")}
      </a>`,
      5000,
      "success"
    );
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      onGeoLocationSuccess,
      onGeoLocationError,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}

function onDurationChange(e) {
  const duration = e.target.value.trim();
  const nextOccurrenceEl = document.querySelector("#nextOccurrence");
  const oneTimeEventBeginInfoEl = document.querySelector(
    "#oneTimeEventBeginInfo"
  );
  const oneTimeEventEndInfoEl = document.querySelector("#oneTimeEventEndInfo");

  hide(nextOccurrenceEl);
  hide(oneTimeEventBeginInfoEl);
  hide(oneTimeEventEndInfoEl);

  switch (duration) {
    case "":
      break;
    case "same day":
      show(nextOccurrenceEl);
      break;
    case "multiple days":
      show(oneTimeEventBeginInfoEl);
      show(oneTimeEventEndInfoEl);
      break;
    default:
      break;
  }
}

function onFrequencyChange(e) {
  const frequency = e.target.value.trim();
  const duration = document.querySelector("#duration");
  const durationContainer = document.querySelector("#durationContainer");
  const nextOccurrenceEl = document.querySelector("#nextOccurrence");
  const oneTimeEventBeginInfoEl = document.querySelector(
    "#oneTimeEventBeginInfo"
  );
  const oneTimeEventEndInfoEl = document.querySelector("#oneTimeEventEndInfo");

  hide(durationContainer);
  hide(nextOccurrenceEl);
  hide(oneTimeEventBeginInfoEl);
  hide(oneTimeEventEndInfoEl);
  duration.options[0].selected = true;

  switch (frequency) {
    case "":
      break;
    case "Once":
      show(durationContainer);
      break;
    default:
      show(nextOccurrenceEl);
      break;
  }
}

async function onPreview() {
  const templates = {
    default: {
      paths: {
        html: "../../templates/default/index.html",
        css: "../../templates/default/index.css",
        js: "../../templates/default/index.js",
      },
    },
  };

  const html = await fetch(templates.default.paths.html)
    .then((res) => res.text())
    .then((unparsed) => {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(unparsed, "text/html");
      const content = parsed.querySelector("#content").innerHTML;
      return content;
    })
    .catch((err) => {
      console.error(err);
    });

  const previewModal = document.querySelector("#preview");
  previewModal
    .querySelector(".modal-header")
    .classList.add("bg-light", "border-bottom");
  previewModal.querySelector(".modal-body").innerHTML = html;
  const lang = JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).lang || "en";
  await populateContent(`../../i/i18n/${lang}.json`, "previewContent");
  populateFormBasedPhrases();
  populateInterpolatedPhrases();
  $("#preview").modal();
}

function onPreviewClosed(e) {
  const submitRow = document.querySelector("#submitrow");
  submitRow.classList.remove("d-none");
  submitRow.scrollIntoView({ behavior: "smooth" });
  viewedPreview = true;
}

function onSubmit(e) {
  e.preventDefault();
  if (!viewedPreview) {
    document.querySelector("#previewbutton").click();
    return;
  }
  const form = e.target;
  const language = form.language.value;
  const eventtype = form.eventtype.value;
  const eventtitle = form.eventtitle.value.trim() || "";
  const eventdescription = form.eventdescription.value.trim() || "";
  const frequency = form.frequency.value;
  const duration = form.duration.value;
  const startdate = form.startdate.value.trim() || "";
  const starttime = form.starttime.value.trim() || "";
  const oneTimeEventBeginDate = form.oneTimeEventBeginDate.value.trim() || "";
  const oneTimeEventBeginTime = form.oneTimeEventBeginTime.value.trim() || "";
  const oneTimeEventEndDate = form.oneTimeEventEndDate.value.trim() || "";
  const oneTimeEventEndTime = form.oneTimeEventEndTime.value.trim() || "";
  const locationDetails = form.locationDetails.value.trim() || "";
  const addressLine1 = form.addressLine1.value.trim() || "";
  const addressLine2 = form.addressLine2.value.trim() || "";
  const addressLine3 = form.addressLine3.value.trim() || "";
  const country = form.country.value;
  const latitude = form.latitude.value.trim() || "";
  const longitude = form.longitude.value.trim() || "";
  const contactFirstName = form.contactFirstName.value.trim() || "";
  const contactLastName = form.contactLastName.value.trim() || "";
  const contactPhone = form.contactPhone.value.trim() || "";
  const contactEmail = form.contactEmail.value.toLowerCase().trim() || "";

  // Validate form

  if (language === "") {
    return showError(getPhrase("validateLanguage"), "#language");
  }

  if (eventtype === "") {
    return showError(getPhrase("validateEventType"), "#eventtype");
  }

  if (eventtitle === "") {
    return showError(getPhrase("validateEventTitle"), "#eventtitle");
  }

  if (eventdescription === "") {
    return showError(getPhrase("validateDescription"), "#eventdescription");
  }

  if (frequency === "") {
    return showError(getPhrase("validateFrequency"), "#frequency");
  }

  // TODO:  Validate the rest of the form; requires logic branching at this point
}

function populateCountries() {
  const country = document.querySelector("#country");
  const lang = localStorage.getItem("lang") || "en";
  const endpoint = `../../data/json/lang/${lang}/countries.json`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((countryItem) => {
        const { name, alpha2 } = countryItem;
        const option = document.createElement("option");
        option.value = alpha2;
        option.text = name;
        country.add(option);
      });
      country.value = localStorage.getItem("country") || "us";
    })
    .catch((err) => {
      console.error(err);
    });
}

function populateDefaultEventTitle() {
  const eventTitleEl = document.querySelector("#eventtitle");
  const eventTitle = eventTitleEl.value.trim();
  const eventType = document.querySelector("#eventtype").value;
  let defaultEventTitle = "";

  switch (eventType) {
    case "bible talk":
      defaultEventTitle = getPhrase("optionEventTypeBT");
      if ((eventTitle === "") || (eventTitle === getPhrase("optionEventTypeSundayService"))) {
        eventTitleEl.value = defaultEventTitle;
        eventTitleEl.parentElement.classList.add("has-value");
      }
      break;
    case "church":
      defaultEventTitle = getPhrase("optionEventTypeSundayService");
      if ((eventTitle === "") || (eventTitle === getPhrase("optionEventTypeBT"))) {
        eventTitleEl.value = defaultEventTitle;
        eventTitleEl.parentElement.classList.add("has-value");
      }
      break;
    case "other":
      if ((eventTitle === "") || (eventTitle === getPhrase("optionEventTypeBT")) || (eventTitle === getPhrase("optionEventTypeSundayService"))) {
        eventTitleEl.value = "";
        eventTitleEl.parentElement.classList.remove("has-value");
      }
      break;
    default:
      eventTitleEl.value = "";
      eventTitleEl.parentElement.classList.remove("has-value");
      break;
  }
}

function populateFormBasedPhrases() {
  const lang = JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).lang || "en";
  const form = document.querySelector("#formAddEvent");
  const preview = document.querySelector("#preview");
  const eventType = form.querySelector("#eventtype").selectedOptions[0].value;
  const eventTitle = form.querySelector("#eventtitle").value;
  const eventStartDate = form.querySelector("#startdate").value;
  const eventStartTime = form.querySelector("#starttime").value;
  const frequency = form.querySelector("#frequency").selectedOptions[0].innerText;
  const eventDateTime = `${eventStartDate} ${eventStartTime}`;
  const previewEventStartDateShort = Intl.DateTimeFormat(lang, { dateStyle: "short" }).format(new Date(eventDateTime));
  const previewEventStartTimeShort = Intl.DateTimeFormat(lang, { timeStyle: "short" }).format(new Date(eventDateTime));
  const addressLine1 = form.querySelector("#addressLine1").value || "";
  const addressLine2 = form.querySelector("#addressLine2").value || "";
  const addressLine3 = form.querySelector("#addressLine3").value || "";

  let previewEventAddress = "";
  if (addressLine1.length) previewEventAddress += `<div>${addressLine1}</div>`;
  if (addressLine2.length) previewEventAddress += `<div>${addressLine2}</div>`;
  if (addressLine3.length) previewEventAddress += `<div>${addressLine3}</div>`;

  preview.querySelector("#eventTitle").innerHTML = eventTitle;

  let defaultGreetingParagraph1 = "";
  if (eventType === "bible talk") {
    defaultGreetingParagraph1 = getPreviewPhrase("default-greeting-paragraph-1-bible-talk");
  } else if (eventType === "church") {
    defaultGreetingParagraph1 = getPreviewPhrase("default-greeting-paragraph-1-church");
  } else {
    defaultGreetingParagraph1 = getPreviewPhrase("default-greeting-paragraph-1-other");
  }

  preview.querySelector("#defaultGreetingParagraph1").innerHTML = defaultGreetingParagraph1;

  if (frequency === "Once") {
    preview.querySelector("#eventDate").innerHTML = previewEventStartDateShort;
  } else {
    preview.querySelector("#eventDate").innerHTML = frequency;
  }

  preview.querySelector("#eventStartTime").innerHTML = previewEventStartTimeShort;
  preview.querySelector("#eventAddress").innerHTML = previewEventAddress;
}

function populateInterpolatedPhrases() {
  const lang = JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).lang || "en";

  let recipientName = "";
  let senderFirstName = "";
  let invitedDate = "";
  let eventTitle = "";
  let eventType = "";
  let eventDate = "";
  let eventTime = "";

  const eventDateTime = `${document.querySelector("#startdate").value} ${document.querySelector("#starttime").value}`;

  recipientName = getDefaultRecipientName();
  senderFirstName = getSenderFirstName();
  invitedDate = getDefaultInvitedDate();
  eventTitle = document.querySelector("#eventtitle").value;
  eventType = document.querySelector("#eventtype").selectedOptions[0].value;
  eventDate = Intl.DateTimeFormat(lang, {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date(eventDateTime));
  eventTime = Intl.DateTimeFormat(lang, {
    timeStyle: "short"
  }).format(new Date(eventDateTime));

  const previewModal = document.querySelector("#preview .modal-body");
  const currentHTML = previewModal.innerHTML;
  let newHTML = currentHTML;
  newHTML = newHTML.replaceAll("{RECIPIENT-NAME}", `<span data-interpolated='RECIPIENT-NAME'>${recipientName}</span>`);
  newHTML = newHTML.replaceAll("{SENDER-FIRST-NAME}", `<span data-interpolated='SENDER-FIRST-NAME'>${senderFirstName}</span>`);
  newHTML = newHTML.replaceAll("{INVITED-DATE}", `<span data-interpolated='INVITED-DATE'>${invitedDate}</span>`);
  newHTML = newHTML.replaceAll("{EVENT-TITLE}", `<span data-interpolated='EVENT-TITLE'>${eventTitle}</span>`);
  newHTML = newHTML.replaceAll("{EVENT-DATE}", `<span data-interpolated='EVENT-DATE'>${eventDate}</span>`);
  newHTML = newHTML.replaceAll("{EVENT-TIME}", `<span data-interpolated='EVENT-TIME'>${eventTime}</span>`);

  previewModal.innerHTML = newHTML;
}

function populateLanguages() {
  const languages = document.querySelector("#language");
  const defaultLangIso =
    JSON.parse(atob(localStorage.getItem("refreshToken").split(".")[1])).lang ||
    "en";
  const endpoint = "../../data/json/languages.json";

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (defaultLangIso === "en") {
        for (langIso in data) {
          const option = document.createElement("option");
          option.value = langIso;
          option.text = data[langIso].name;
          languages.add(option);
        }
      } else {
        const nativeLangs = [];
        for (langIso in data) {
          nativeLangs.push({
            iso: langIso,
            name: data[langIso].nativeName,
          });
        }
        nativeLangs.sort((a, b) => {
          const lang1 = a.name.toLowerCase();
          const lang2 = b.name.toLowerCase();

          if (lang1 < lang2) {
            return -1;
          }

          if (lang1 > lang2) {
            return 1;
          }

          return 0;
        });
        nativeLangs.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.iso;
          option.text = item.name;
          languages.add(option);
        });
      }
      languages.value = defaultLangIso;
      languages.parentElement.classList.add("has-value");
    })
    .catch((err) => {
      console.error(err);
    });
}

function showCoordinatesContainer() {
  const isMobile = isMobileDevice();
  if (!isMobile) return;
  const detectCoordinates = document.querySelector("#detectCoordinates");
  detectCoordinates.classList.remove("d-none");
}

function showError(msg, selector) {
  const formIncomplete = getPhrase("formIncomplete");

  formErrorsReset();
  selector && formError(selector);
  showModal(msg, formIncomplete);
}

function attachListeners() {
  document.querySelector("#eventtype")
    .addEventListener("change", () => populateDefaultEventTitle());

  document
    .querySelector("#frequency")
    .addEventListener("change", onFrequencyChange);

  document
    .querySelector("#duration")
    .addEventListener("change", onDurationChange);

  document
    .querySelector("#detectCoordinatesButton")
    .addEventListener("click", onClickDetectLocation);

  document.querySelector("#formAddEvent").addEventListener("submit", onSubmit);

  document.querySelector("#previewbutton").addEventListener("click", onPreview);

  $("#preview").on("hidden.bs.modal", onPreviewClosed);
}

async function init() {
  await populateContent();
  populateCountries();
  populateLanguages();
  attachListeners();
  showCoordinatesContainer();
  initIntlTelInput();
}

init();
