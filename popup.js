const baseUrl = "https://www.justice.gov/epstein/files/";

const datasetInput = document.getElementById("dataset");
const indexInput = document.getElementById("index");
const filenameText = document.getElementById("filename");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function pad(num) {
  return String(num).padStart(8, "0");
}

function getUrl() {
  const dataset = datasetInput.value.trim();
  const index = parseInt(indexInput.value, 10);
  const filename = `EFTA${pad(index)}.pdf`;

  filenameText.textContent = filename;

  return `${baseUrl}${dataset}/${filename}`;
}

function openPdf() {
  const url = getUrl();
  //chrome.tabs.create({ url }); //tab baru

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.update(tabs[0].id, { url });
    }
  });
}

prevBtn.onclick = () => {
  let val = parseInt(indexInput.value, 10);
  if (val > 1) {
    indexInput.value = val - 1;
    openPdf();
  }
};

nextBtn.onclick = () => {
  indexInput.value = parseInt(indexInput.value, 10) + 1;
  openPdf();
};

// update filename preview
datasetInput.oninput = getUrl;
indexInput.oninput = getUrl;

// init
getUrl();
