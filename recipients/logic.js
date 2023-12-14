function getMaxUtcDate(interactions) {
  if (interactions.length === 0) return "1970-01-01T00:00:00Z"; // Default date for no interactions
  return interactions.reduce((maxDate, interaction) => {
    return interaction.utcdate > maxDate ? interaction.utcdate : maxDate;
  }, interactions[0].utcdate);
}

async function populateRecipientsTable() {
  const recipientsEl = document.querySelector("#recipients");
  const noRecipientsEl = document.querySelector("#norecipients");
  const translationURL = getDatatablesTranslationURL();
  const languageData = await fetch(translationURL).then((res) => res.json());
  let invites = (await localforage.getItem("invites")) || [];
  if (!invites.length) {
    recipientsEl.classList.add("d-none");
    noRecipientsEl.classList.remove("d-none");
    return;
  }
  invites = invites.filter((item) => !!!item.deleted);
  invites = invites.sort((a, b) => {
    const maxUtcDateA = getMaxUtcDate(a.interactions);
    const maxUtcDateB = getMaxUtcDate(b.interactions);

    return new Date(maxUtcDateB) - new Date(maxUtcDateA);
  });
  let rows = "";
  const events = (await localforage.getItem("events")) || [];
  if (!events.length) {
    recipientsEl.classList.add("d-none");
    noRecipientsEl.classList.remove("d-none");
    return;
  }
  invites.forEach((item) => {
    let lastInteractionUtcDate = item.utcdate;
    let lastInteractionTimezone = item.timezone;
    let action = getPhrase("wasInvited");
    const event = events.find(
      (eventItem) => eventItem.eventid === item.eventid
    );
    if (!event) return;
    const eventType = event.type;
    let eventTitle = "";
    switch (eventType) {
      case "bible talk":
        eventTitle = getGlobalPhrase("bibletalk");
        break;
      case "church":
        eventTitle = getPhrase("church");
        break;
      default:
        eventTitle = event.title;
        break;
    }
    if (item.interactions.length) {
      lastInteractionUtcDate = getMaxUtcDate(item.interactions);
      const lastInteractionObj = item.interactions.find(
        (item) => item.utcdate === lastInteractionUtcDate
      );
      lastInteractionTimezone = lastInteractionObj.timezone;
      switch (lastInteractionObj.action) {
        case "viewed invite":
          action = getPhrase("viewedInvite");
          break;
        case "added to calendar":
          action = getPhrase("clickedAddToCalendar");
          break;
        case "rsvp":
          action = getPhrase("clickedRsvp");
          break;
        case "rescinded rsvp":
          action = getPhrase("rescindedRsvp");
          break;
      }
    }

    action = action.replaceAll("{EVENT}", eventTitle);

    const epochTime = new Date(lastInteractionUtcDate).getTime();
    const recipientName = item.recipient.name;
    const invitationid = item.invitationid;
    const timezone = item.timezone;
    const localDateTime = Intl.DateTimeFormat(
      getLocale(),
      {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: timezone,
      },
      new Date(lastInteractionUtcDate)
    );

    const row = `
        <tr>
          <td data-search="${recipientName}">
            <a href="../r/#/${invitationid}">${recipientName}</a>
          </td>

          <td
            data-order="${epochTime}"
            data-search="${action}"
          >
            ${localDateTime}
            <div>
              <small class="text-secondary">
                ${action}
              </small>
            </div>
          </td>
        </tr>
      `;

    rows += row;
  });

  if (rows === "") {
    recipientsEl.classList.add("d-none");
    noRecipientsEl.classList.remove("d-none");
    return;
  }

  recipientsEl.querySelector("tbody").innerHTML = rows;

  var table = $("#recipients").DataTable({
    language: languageData,
    order: [[1, "desc"]],
  });

  noRecipientsEl.classList.add("d-none");
  recipientsEl.classList.remove("d-none");
}

async function init() {
  await populateContent();
  globalHidePageSpinner();
  await populateRecipientsTable();
  syncInvites();
}

init();
