function getRecipient() {
  return new Promise(async (resolve, reject) => {
    const hash = getHash();

    if (!hash || hash.indexOf("/") <= -1) {
      return reject(new Error("invalid hash"));
    }

    const recipientid = getHash().split("/")[1];
    const endpoint = `${getApiHost()}/recipient`;
    const accessToken = await getAccessToken();

    fetch(endpoint, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        recipientid: recipientid,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { recipientname } = data.recipient;

        document.querySelectorAll("[data-i18n='pagetitle']").forEach((item) => {
          item.innerText = item.innerText.replaceAll(
            "{RECIPIENT-NAME}",
            recipientname
          );
        });

        resolve(data.recipient);
      });
  });
}

function attachListeners() {
  //
}

async function init() {
  await populateContent();
  await getRecipient();
  attachListeners();
  globalHidePageSpinner();
}

init();
