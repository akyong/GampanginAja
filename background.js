const BASE_URL = "https://www.justice.gov/epstein/files/";

function pad(num) {
  return String(num).padStart(8, "0");
}

function openPdf(delta) {
  chrome.storage.local.get(
    { dataset: "DataSet%201", index: 3 },
    (data) => {
      let idx = data.index + delta;
      if (idx < 1) idx = 1;

      const filename = `EFTA${pad(idx)}.pdf`;
      const url = `${BASE_URL}${data.dataset}/${filename}`;

      chrome.storage.local.set({ index: idx });
      chrome.tabs.create({ url });
    }
  );
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "next-pdf") openPdf(1);
  if (command === "prev-pdf") openPdf(-1);
});
