let inviteObject = {
  event: null,
  user: null,
  recipient: null,
};
let iti;

function buildCalendarDescription(event) {
  let description = `
${getPhrase("you-are-invited-to")}
${event.title.toUpperCase().trim() + "\n\n"}
`;

  // BEGIN MAIN EVENT INFO
  const headlineAboutEvent = getPhrase("headline-about-event").replaceAll(
    "{EVENT-TITLE}",
    event.title
  );

  description += `=====

${headlineAboutEvent.toUpperCase()}:

${event.description}
  `;
  description = description.trim();
  description = description + "\n\n";
  // END MAIN EVENT INFO

  // BEGIN RECURRING EVENT
  if (event.frequency !== "once") {
    description += `=====\n
${getPhrase("is-recurring")}
    `;
    description = description.trim();
    description = description + "\n\n";
  }
  // END RECURRING EVENT

  // BEGIN OTHER LOCATION DETAILS
  if (event.otherlocationdetails && event.locationvisibility !== "discreet") {
    const headlineLocationDetails = getPhrase("headlineLocationDetails");

    description += `=====

${headlineLocationDetails.toUpperCase()}

${event.otherlocationdetails}
    `;
    description = description.trim();
    description = description + "\n\n";
  }
  // END OTHER LOCATION DETAILS

  // BEGIN ATTENTING VIRTUALLY
  if (event.virtualconnectiondetails) {
    const attendOnline_headlineCantAttendInPerson = getPhrase(
      "cant-attend-in-person"
    );
    const attendOnline_text = getPhrase("text-connect");
    const attendOnline_headlineHowToConnect = getPhrase(
      "headline-how-to-connect"
    );
    const calAttendingVirtually = `=====

${attendOnline_headlineCantAttendInPerson.toUpperCase()}

${attendOnline_text}

${attendOnline_headlineHowToConnect.toUpperCase()}

${event.virtualconnectiondetails.trim()}
    `;
    description += calAttendingVirtually;
    description = description.trim();
    description = description + "\n\n";
  }
  // END ATTENDING VIRTUALLY

  // BEGIN CONTACT INFORMATION
  const headlineQuestions = getPhrase("headline-questions");
  const textQuestions =
    event.locationvisibility === "discreet"
      ? getPhrase("questionsPlusLocation")
      : getPhrase("questions");
  const labelPhoneCallOrTextMessage = getPhrase("phone-call-or-text-message");
  const labelEmail = getPhrase("email");

  description += `=====

${headlineQuestions.toUpperCase()}

${textQuestions}
  `;
  description = description.trim();
  description = description + "\n\n";

  // Contact Name
  description += `${event.contactfirstname.toUpperCase()} ${
    event.contactlastname && event.contactlastname.length
      ? event.contactlastname.toUpperCase()
      : ""
  }\n\n`;

  // Contact Phone or Text Message
  if (
    event.contactphone &&
    event.contactphone.length &&
    window.libphonenumber
  ) {
    const phoneNumberObject = window.libphonenumber.parsePhoneNumber(
      event.contactphone
    );
    const contactPhoneFormatted = phoneNumberObject.formatNational();
    description += `* ${labelPhoneCallOrTextMessage}\n${contactPhoneFormatted}\n\n`;
  }

  // Contact E-mail
  if (event.contactemail && event.contactemail.length) {
    description += `* ${labelEmail}:\n${event.contactemail}\n\n`;
  }

  // END CONTACT INFORMATION

  return description;
}

function getAddressForMaps(event) {
  const {
    locationaddressline1: addressLine1,
    locationaddressline2: addressLine2,
    locationaddressline3: addressLine3,
    locationcoordinates,
  } = event;
  let address = "";
  let addressLink = "";
  if (addressLine1) {
    address += addressLine1.trim();
    addressLink += encodeURIComponent(addressLine1.trim());
  }
  if (addressLine2) {
    if (addressLine1) {
      address += ", ";
      addressLink += ",";
    }
    address += addressLine2.trim();
    addressLink += encodeURIComponent(addressLine2.trim());
  }
  if (addressLine3) {
    if (addressLine1 || addressLine2) {
      address += ", ";
      addressLink += ",";
    }
    address += addressLine3.trim();
    addressLink += encodeURIComponent(addressLine3.trim());
  }

  const operatingSystem = getMobileOperatingSystem();
  const { x: latitude, y: longitude } = locationcoordinates;

  // Use Apple Maps if we're on iOS. For all other operating systems, use Google Maps.
  if (operatingSystem === "iOS") {
    // Docs for Apple Maps URLs:  https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
    if (address.length > 0) {
      addressLink = `https://maps.apple.com/?daddr=${addressLink}&dirflg=d&t=m`;
    } else if (latitude.length > 0 && longitude.length > 0) {
      addressLink = `https://maps.apple.com/?ll=${latitude},${longitude}&t=m`;
    }
  } else {
    // Docs for Google Maps URLs:  https://developers.google.com/maps/documentation/urls
    if (address.length > 0) {
      addressLink = `https://www.google.com/maps/dir/?api=1&destination=${addressLink}&sensor=true`;
    } else if (latitude.length > 0 && longitude.length > 0) {
      addressLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }
  }

  const returnObject = {
    address: address,
    addressLink: addressLink,
  };

  return returnObject;
}

function getCalendar(clickEvent, inviteEvent) {
  const {
    duration,
    durationInHours,
    frequency,
    multidaybegindate,
    multidayenddate,
    startdate,
    timezone,
    title,
  } = inviteEvent;
  const description = buildCalendarDescription(inviteEvent);
  const location = getAddressForMaps(inviteEvent).address;
  const isRecurring = frequency === "once" ? false : true;
  const isMultiDay = duration === "multiple days" ? true : false;
  let recurringWeekday;
  let eventStart;
  let eventEnd;
  let config;

  clickEvent.preventDefault();

  if (isRecurring) {
    const startDateUTC = moment(startdate).format("YYYY-MM-DD");
    const startTimeUTC = moment(startdate).format("HH:mm");
    const nextOccurrenceInTimezone = moment
      .tz(
        `${getNextRecurringWeekday(
          startDateUTC,
          startTimeUTC
        )}T${startTimeUTC}`,
        timezone
      )
      .format();
    eventStart = new Date(nextOccurrenceInTimezone);
    eventEnd = new Date(
      moment(eventStart).add(durationInHours, "hours").format()
    );

    switch (frequency) {
      case "Every Sunday":
        recurringWeekday = "SU";
        break;
      case "Every Monday":
        recurringWeekday = "MO";
        break;
      case "Every Tuesday":
        recurringWeekday = "TU";
        break;
      case "Every Wednesday":
        recurringWeekday = "WE";
        break;
      case "Every Thursday":
        recurringWeekday = "TH";
        break;
      case "Every Friday":
        recurringWeekday = "FR";
        break;
      case "Every Saturday":
        recurringWeekday = "SA";
        break;
    }

    config = {
      title: title,
      location: location,
      description: description,
      start: eventStart,
      end: eventEnd,
      recurrence: {
        frequency: "WEEKLY",
        interval: 1,
        weekdays: recurringWeekday,
        count: 12,
      },
    };
  } else if (!isMultiDay) {
    eventStart = new Date(moment(startdate).format());
    eventEnd = new Date(
      moment(eventStart).add(durationInHours, "hours").format()
    );
    config = {
      title: title,
      location: location,
      description: description,
      start: eventStart,
      end: eventEnd,
    };
  } else if (isMultiDay) {
    eventStart = new Date(multidaybegindate);
    eventEnd = new Date(multidayenddate);
    config = {
      title: title,
      location: location,
      description: description,
      start: eventStart,
      end: eventEnd,
    };
  }

  const calType = clickEvent.currentTarget.attributes["data-destination"].value;

  switch (calType) {
    case "apple":
      getCalendarApple(config);
      break;
    case "google":
      getCalendarGoogle(config);
      break;
    case "ical":
      getCalendarIcal(config);
      break;
  }
}

function getCalendarApple(config) {
  const appleCal = new datebook.ICalendar(config);
  const alarm1Time = new Date(
    moment(config.start).subtract(1, "days").format()
  );
  const alarm2Time = new Date(
    moment(config.start).subtract(1, "hours").format()
  );
  const alarm1 = {
    action: "DISPLAY",
    trigger: alarm1Time,
    description: "The first alarm description",
    summary: "The first alarm summary",
    summary: "a quick summary",
    duration: {
      after: true,
      minutes: 3,
    },
  };
  const alarm2 = {
    action: "DISPLAY",
    description: "The second alarm description",
    summary: "The second alarm summary",
    trigger: alarm2Time,
    duration: {
      after: true,
      minutes: 3,
    },
  };
  const appleCalContent = appleCal.addAlarm(alarm1).addAlarm(alarm2).render();
  const appleCalLink = document.createElement("a");
  const appleCalFile = new Blob([appleCalContent], {
    type: "text/calendar",
  });
  appleCalLink.href = URL.createObjectURL(appleCalFile);
  appleCalLink.download = "appleCal.ics";
  appleCalLink.click();
  URL.revokeObjectURL(appleCalLink.href);
}

function getCalendarGoogle(config) {
  const googleCal = new datebook.GoogleCalendar(config);
  window.location.href = googleCal.render();
}

function getCalendarIcal(config) {
  const iCal = new datebook.ICalendar(config);
  const alarm1Time = new Date(
    moment(config.start).subtract(1, "days").format()
  );
  const alarm2Time = new Date(
    moment(config.start).subtract(1, "hours").format()
  );
  const alarm1 = {
    action: "DISPLAY",
    trigger: alarm1Time,
    description: "The first alarm description",
    summary: "The first alarm summary",
    summary: "a quick summary",
    duration: {
      after: true,
      minutes: 3,
    },
  };
  const alarm2 = {
    action: "DISPLAY",
    description: "The second alarm description",
    summary: "The second alarm summary",
    trigger: alarm2Time,
    duration: {
      after: true,
      minutes: 3,
    },
  };
  const iCalContent = iCal.addAlarm(alarm1).addAlarm(alarm2).render();
  const iCalLink = document.createElement("a");
  const iCalFile = new Blob([iCalContent], { type: "text/calendar" });
  iCalLink.href = URL.createObjectURL(iCalFile);
  iCalLink.download = "ical.ics";
  iCalLink.click();
  URL.revokeObjectURL(iCalLink.href);
}

async function getInvite() {
  return new Promise((resolve, reject) => {
    const hash = window.location.hash;
    let inviteParts = hash.split("/") || null;
    if (!inviteParts) {
      return reject(new Error("Required URL parameters are missing"));
    }
    if (!Array.isArray(inviteParts)) {
      return reject(new Error("URL parameters must be separated by slashes"));
    }
    if (!inviteParts.length) {
      return reject(new Error("At least one URL parameter is required"));
    }

    let eventid = Number(inviteParts[1]) || null;
    let userid = Number(inviteParts[2]) || null;
    let recipientid = inviteParts[3] || null;

    if (!eventid) return reject();

    const endpoint = `${getApiHost()}/invite`;

    showSpinner();

    fetch(endpoint, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        eventid: eventid,
        userid: userid,
        recipientid: recipientid,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const msg = data.msg;
        switch (msg) {
          case "invite retrieved":
            renderInvite(data.invite);
            break;
          default:
            showSpinner();
        }
      })
      .catch((err) => {
        console.error(err);
        showSpinner();
      });
  });
}

function renderInvite(invite) {
  const { event, user, recipient } = invite;
  const eventTitleEl = document.querySelector("#eventTitle");
  const isRecurring = event.frequency !== "once" ? true : false;
  const isSameDay = event.duration === "same day" ? true : false;
  const isMultiDay = event.duration === "multiple days" ? true : false;
  const userDateTimePrefs = Intl.DateTimeFormat().resolvedOptions();
  const timeAndDateRepeatingEl = document.querySelector(
    "#timeAndDateRepeating"
  );
  const timeAndDateSingleDayEl = document.querySelector(
    "#timeAndDateSingleDay"
  );
  const timeAndDateMultipleDays = document.querySelector(
    "#timeAndDateMultipleDays"
  );

  // Store invite in global scope
  inviteObject.event = event;
  inviteObject.user = user;
  inviteObject.recipient = recipient;

  // Hide by default
  timeAndDateRepeatingEl.classList.add("d-none");
  timeAndDateSingleDayEl.classList.add("d-none");
  timeAndDateMultipleDays.classList.add("d-none");

  eventTitleEl.innerHTML = event.title;

  // EVENT TIME AND DATE
  if (isRecurring) {
    const repeatingWeekdayEl =
      timeAndDateRepeatingEl.querySelector("#repeatingWeekday");
    const repeatingStartTimeEl = timeAndDateRepeatingEl.querySelector(
      "#repeatingStartTime"
    );

    // Populate recurring weekday
    const frequency = getRecurringWeekdayName(event.frequency);
    repeatingWeekdayEl.innerHTML = frequency;

    // Populate recurring start time
    const startDateUTC = moment(event.startdate).format("YYYY-MM-DD");
    const startTimeUTC = moment(event.startdate).format("HH:mm");
    const nextOccurrenceInTimezone = moment
      .tz(
        `${getNextRecurringWeekday(
          startDateUTC,
          startTimeUTC
        )}T${startTimeUTC}`,
        event.timezone
      )
      .format();

    const starttime = new Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(nextOccurrenceInTimezone));
    repeatingStartTimeEl.innerHTML = starttime;

    timeAndDateRepeatingEl.classList.remove("d-none");
  } else if (isSameDay) {
    const timeAndDateSingleDayEl = document.querySelector(
      "#timeAndDateSingleDay"
    );
    const singleDayWeekdayEl =
      timeAndDateSingleDayEl.querySelector("#singleDayWeekday");
    const singleDayDateEl =
      timeAndDateSingleDayEl.querySelector("#singleDayDate");
    const singleDayStartTimeEl = timeAndDateSingleDayEl.querySelector(
      "#singleDayStartTime"
    );

    // Populate one-time weekday
    const weekday = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      weekday: "long",
    }).format(new Date(event.startdate));
    singleDayWeekdayEl.innerHTML = weekday;

    // Populate one-time date
    const date = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(event.startdate));
    singleDayDateEl.innerHTML = date;

    // Populate one-time start time
    const starttime = new Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(event.startdate));
    singleDayStartTimeEl.innerHTML = starttime;

    // Unhide
    timeAndDateSingleDayEl.classList.remove("d-none");
  } else if (isMultiDay) {
    const multiDayStartingWeekdayEl = timeAndDateMultipleDays.querySelector(
      "#multiDayStartingWeekday"
    );
    const multiDayStartingDateEl = timeAndDateMultipleDays.querySelector(
      "#multiDayStartingDate"
    );
    const multiDayStartingTimeEl = timeAndDateMultipleDays.querySelector(
      "#multiDayStartingTime"
    );
    const multiDayEndingWeekdayEl = timeAndDateMultipleDays.querySelector(
      "#multiDayEndingWeekday"
    );
    const multiDayEndingDateEl = timeAndDateMultipleDays.querySelector(
      "#multiDayEndingDate"
    );
    const multiDayEndingTimeEl = timeAndDateMultipleDays.querySelector(
      "#multiDayEndingTime"
    );
    const { multidaybegindate, multidayenddate } = event;

    // Populate beginning weekday
    const beginWeekday = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      weekday: "short",
    }).format(new Date(multidaybegindate));
    multiDayStartingWeekdayEl.innerHTML =
      userDateTimePrefs.locale.substring(0, 2) == "en"
        ? `${beginWeekday}.`
        : beginWeekday;

    // Populate beginning date
    const beginDate = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      year: "2-digit",
      month: "numeric",
      day: "numeric",
    }).format(new Date(multidaybegindate));
    multiDayStartingDateEl.innerHTML = beginDate;

    // Populate beginning time
    const beginTime = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(multidaybegindate));
    multiDayStartingTimeEl.innerHTML = beginTime;

    // Populate ending weekday
    const endWeekday = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      weekday: "short",
    }).format(new Date(multidayenddate));
    multiDayEndingWeekdayEl.innerHTML =
      userDateTimePrefs.locale.substring(0, 2) == "en"
        ? `${endWeekday}.`
        : endWeekday;

    // Populate ending date
    const endDate = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      year: "2-digit",
      month: "numeric",
      day: "numeric",
    }).format(new Date(multidayenddate));
    multiDayEndingDateEl.innerHTML = endDate;

    // Populate ending time
    const endTime = Intl.DateTimeFormat(userDateTimePrefs.locale, {
      timeZone: event.timezone,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(multidayenddate));
    multiDayEndingTimeEl.innerHTML = endTime;

    // Enforce location visibility
    const locationVisibility = event.locationvisibility || "discreet"; // [ public | discreet ]
    const inviteLocationInfoEl = document.querySelector("#inviteLocationInfo");
    const requestLocationInfoEl = document.querySelector(
      "#requestLocationInfo"
    );
    if (locationVisibility !== "public") {
      inviteLocationInfoEl.classList.add("d-none");
      requestLocationInfoEl.classList.remove("d-none");
    } else {
      inviteLocationInfoEl.classList.remove("d-none");
      requestLocationInfoEl.classList.add("d-none");
    }

    // unhide
    timeAndDateMultipleDays.classList.remove("d-none");
  }

  // POPULATE LOCATION
  const inviteLocationNameEl = document.querySelector("#inviteLocationName");
  const eventAddressEl = document.querySelector("#eventAddress");
  const address_line_1_el = document.querySelector("#address_line_1");
  const address_line_2_el = document.querySelector("#address_line_2");
  const address_line_3_el = document.querySelector("#address_line_3");
  const locationName = event.locationname || "";
  const locationAddress1 = event.locationaddressline1 || "";
  const locationAddress2 = event.locationaddressline2 || "";
  const locationAddress3 = event.locationaddressline3 || "";
  const hasAddress =
    locationAddress1.length ||
    locationAddress2.length ||
    locationAddress3.length
      ? true
      : false;
  inviteLocationNameEl.innerHTML = locationName;
  if (hasAddress) {
    address_line_1_el.innerHTML = locationAddress1;
    address_line_2_el.innerHTML = locationAddress2;
    address_line_3_el.innerHTML = locationAddress3;
  } else {
    eventAddressEl.classList.add("d-none");
  }

  // OTHER LOCATION DETAILS
  const otherLocationDetailsEl = document.querySelector(
    "#previewOtherLocationDetails"
  );
  const otherLocationDetails = event.otherlocationdetails || "";
  if (otherLocationDetails.length) {
    otherLocationDetailsEl.innerHTML = otherLocationDetails;
    otherLocationDetailsEl.classList.remove("d-none");
  }

  // MAP AND DIRECTIONS
  const mapAndDirectionsEl = document.querySelector("#mapAndDirections");
  const addressObject = getAddressForMaps(event);
  mapAndDirectionsEl.setAttribute("href", addressObject.addressLink);

  hideSpinner();
}

function hideSpinner() {
  const spinnerEl = document.querySelector("#pageSpinner");
  const pageEl = document.querySelector("main");
  spinnerEl.classList.add("d-none");
  pageEl.classList.remove("d-none");
}

function showSpinner() {
  const spinnerEl = document.querySelector("#pageSpinner");
  const pageEl = document.querySelector("main");
  spinnerEl.classList.remove("d-none");
  pageEl.classList.add("d-none");
}

function populateTemplate(version = "default") {
  return new Promise((resolve, reject) => {
    const path = `../templates/${version}/index.html`;
    fetch(path)
      .then((res) => res.text())
      .then((unparsed) => {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(unparsed, "text/html");
        const templateContent = parsed.querySelector(".container");
        const el = document.querySelector("main");
        el.appendChild(templateContent);
        resolve();
      });
  });
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

function onCalendarExpand() {
  const addToCalendar = document.querySelector("#addToCalendar");
  const isMobile = isMobileDevice();

  if (isMobile) {
    addToCalendar.scrollIntoView({ behavior: "smooth" });
  }
}

function attachListeners() {
  window.addEventListener("hashchange", () => {
    window.location.reload();
  });

  document.addEventListener("click", onClickAway);

  document
    .querySelector("a[data-destination='apple']")
    .addEventListener("click", (clickEvent) =>
      getCalendar(clickEvent, inviteObject.event)
    );

  document
    .querySelector("a[data-destination='google']")
    .addEventListener("click", (clickEvent) =>
      getCalendar(clickEvent, inviteObject.event)
    );

  document
    .querySelector("a[data-destination='ical']")
    .addEventListener("click", (clickEvent) =>
      getCalendar(clickEvent, inviteObject.event)
    );

  $(".collapse").on("show.bs.collapse", onCalendarExpand);

  $(".collapse").on("hide.bs.collapse", () => {
    document.querySelector("#atcbOptions").classList.add("d-none");
  });

  $(".collapse").on("hidden.bs.collapse", () => {
    document.querySelector("#atcbOptions").classList.remove("d-none");
  });
}

async function init() {
  showSpinner();
  await populateTemplate();
  attachListeners();
  await populateContent();
  await getInvite().catch((err) => console.error(err));
  onCalendarClick();
}

init();
