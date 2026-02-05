// const baseUrl = "https://www.justice.gov/epstein/files/";

// const datasetInput = document.getElementById("dataset");
// const indexInput = document.getElementById("index");
// const filenameText = document.getElementById("filename");

// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// function pad(num) {
//   return String(num).padStart(8, "0");
// }

// function getUrl() {
//   const dataset = datasetInput.value.trim();
//   const index = parseInt(indexInput.value, 10);
//   const filename = `EFTA${pad(index)}.pdf`;

//   filenameText.textContent = filename;

//   return `${baseUrl}${dataset}/${filename}`;
// }

// function openPdf() {
//   const url = getUrl();
//   //chrome.tabs.create({ url }); //tab baru

//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (tabs[0]) {
//       chrome.tabs.update(tabs[0].id, { url });
//     }
//   });
// }

// prevBtn.onclick = () => {
//   let val = parseInt(indexInput.value, 10);
//   if (val > 1) {
//     indexInput.value = val - 1;
//     openPdf();
//   }
// };

// nextBtn.onclick = () => {
//   indexInput.value = parseInt(indexInput.value, 10) + 1;
//   openPdf();
// };

// // update filename preview
// datasetInput.oninput = getUrl;
// indexInput.oninput = getUrl;

// // init
// getUrl();


const BASE_URL = "https://www.justice.gov/epstein/files/";

const datasetSelect = document.getElementById("dataset");
const filenameText = document.getElementById("filename");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

/**
 * DATASET CONFIG
 */
const DATASETS = {
  1: { folder: "DataSet%201", mode: "sequence", start: 1 },
  2: { folder: "DataSet%202", mode: "sequence", start: 3159 },
  3: { folder: "DataSet%203", mode: "sequence", start: 3858 },
  4: { folder: "DataSet%204", mode: "sequence", start: 5705 },
  5: { folder: "DataSet%205", mode: "sequence", start: 8409 },

  6: {
    folder: "DataSet%206",
    mode: "list",
    files: [
      8529,8585,8599,8631,8708,8716,8744,
      8863,8870,8874,8892,8920,8998
    ]
  },

  7: {
    folder: "DataSet%207",
    mode: "list",
    files: [
      9016,9116,9229,9329,9428,9440,9448,
      9478,9502,9512,9550,9586,9622,9632,
      9654,9658,9664
    ]
  },

  8: { folder: "DataSet%208", mode: "sequence", start: 9676 },

  9: {
    folder: "DataSet%209",
    mode: "list",
    files: [
      39025,39153,39156,39190,39208,39220,39227,39282,
      39295,39312,39351,39356,39357,39367,39383,39416,
      39419,39420,39660,39662,39663,39665,39689,39790,
      39791,39794,39796,39797,39798,39799,39802,39806,
      39809,39813,39815,39816,39817,39820,39825,39826,
      39828,39867,39868,39872,39875,39878,39879,39880,
      39881,39882,39883,39884,39885,39886,39888,39890,
      39892,39893,39894,39895,39908,39963,39964,39965,
      39967,39971,39972,39978,39980,39981,39983,39985,
      39989,39995,39996,39998,40006,40076,40082,40087,
      40105,40106,40107,40118,40119,40121,40124,40126,
      40135,40137,40138,40141,40142,40143,40144,40145,
      40146,40150,40151,40159
    ]
  },
  10: {
    folder: "DataSet%2010",
    mode: "list",
    files: [
      1262782,1262784,1262791,1262798,1262805,1262829,
      1262863,1262891,1262895,1262900,1262956,1262960,
      1262965,1263024,1263085,1263089,1263093,1263102,
      1263112,1263117,1263124,1263145,1263148,1263152,
      1263156,1263197,1263204,1263210,1263213,1263227,
      1263240,1263246,1263272,1263288,1263289,1263290,
      1263291,1263292,1263293,1263329,1263330,1263332,
      1263414,1263776,1264031,1264040,1264248,1264394,
      1264396,1264397
    ]
  },
  11: {
    folder: "DataSet%2011",
    mode: "list",
    files: [
      2205655,2205827,2209622,2209722,
      2212883,2212885,2212889,2212890,2212891,2212892,
      2212893,2212894,2212896,2212897,2212899,2212900,
      2212901,2212902,2212904,2212905,2212906,2212907,
      2212908,2212919,2212920,2212921,2212922,2212924,
      2212925,2212928,2212929,2212932,2212936,2212937,
      2212940,2212946,2212949,2212953,2212956,2212957,
      2212958,2212959,2212960,2212961,2212962,2212963,
      2212964,2212965,2212966,2212968,2212970,2212971,
      2212972,2212975,2212976,2212978,2212979,2212984,
      2212986,2212987,2212989,2212992,2212993,2212994,
      2212995,2212996,2212997,2212999,2213000,2213004,
      2213005,2213006,2213007,2213008,2213009,2213010,
      2213011,2213012,2213013,2213014,2213016,2213018,
      2213019,2213021,2213030,2213031,2213034,2213035,
      2213037,2213039,2213040,2213041,2213042,2213043,
      2213045,2213049,2213050,2213051,2213052,2213054,
      2213055,2213059,2213060,2213063,2213064,2213067,
      2213068,2213070,2213071,2213073,2213077,2213078,
      2213079,2213080,2213081,2213082,2213083,2213084,
      2213085,2213086,2213088,2213089,2213090,2213091,
      2213092,2213095,2213097,2213101,2213103,2213104,
      2213105,2213106,2213107,2213110,2213112,2213113,
      2213114,2213115,2213117,2213118,2213119,2213120,
      2213121,2213122,2213123,2213125,2213129,2213130,
      2213131,2213135,2213136,2213137,2213138,2213139,
      2213140,2213141,2213142,2213143,2213144,2213145,
      2213146,2213149,2213150,2213151,2213152,2213153,
      2213156,2213157,2213158,2213160,2213161,2213162,
      2213163,2213164,2213167,2213169,2213170,2213171,
      2213175,2213177,2213178,2213179,2213181,2213182,
      2213183,2213184,2213185,2213186,2213187,2213188,
      2213189,2213190,2213196,2213197,2213199,2213200,
      2213201,2213203,2213205,2213206
    ]
  },
  12: {
    folder: "DataSet%2012",
    mode: "list",
    files: [
      2730265,2730267,2730271,2730468,2730469,2730471,
      2730473,2730477,2730481,2730483,2730485,2730486,
      2730996,2731018,2731023,2731039,2731069,2731082,
      2731168,2731200,2731226,2731254,2731260,2731341,
      2731361,2731393,2731410,2731411,2731412,2731413,
      2731414,2731415,2731416,2731417,2731418,2731419,
      2731420,2731433,2731465,2731473,2731475,2731477,
      2731478,2731479,2731480,2731482,2731484,2731485,
      2731486,2731488,2731490,2731497,2731498,2731499,
      2731500,2731501,2731507,2731508,2731509,2731510,
      2731511,2731512,2731514,2731515,2731517,2731521,
      2731524,2731525,2731526,2731528,2731529,2731552,
      2731556,2731576,2731577,2731578,2731582,2731583,
      2731587,2731593,2731604,2731608,2731612,2731615,
      2731617,2731618,2731623,2731628,2731630,2731632,
      2731633,2731636,2731637,2731638,2731640,2731643,
      2731644,2731646,2731648,2731651,2731655,2731659,
      2731660,2731662,2731682,2731684,2731687,2731688,
      2731689,2731697,2731699,2731703,2731704,2731705,
      2731706,2731707,2731708,2731709,2731710,2731711,
      2731712,2731713,2731715,2731718,2731721,2731724,
      2731726,2731727,2731728,2731729,2731732,2731733,
      2731734,2731735,2731736,2731737,2731754,2731755,
      2731757,2731762,2731765,2731771,2731774,2731775,
      2731777,2731778,2731779,2731780,2731781,2731783
    ]
  }

  // Dataset 10+ nanti tinggal tambah sendiri
};

let currentIndex = 0;

/* ========= helpers ========= */

function pad(num) {
  return String(num).padStart(8, "0");
}

function openPdf(datasetKey) {
  const ds = DATASETS[datasetKey];
  let fileNumber;

  if (ds.mode === "sequence") {
    fileNumber = currentIndex;
  } else {
    fileNumber = ds.files[currentIndex];
  }

  const filename = `EFTA${pad(fileNumber)}.pdf`;
  const url = `${BASE_URL}${ds.folder}/${filename}`;

  filenameText.textContent = filename;

  saveState({
    dataset: datasetKey,
    index: currentIndex
  });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.update(tabs[0].id, { url });
    }
  });
}


/* ========= UI ========= */

function loadDataset(key) {
  const ds = DATASETS[key];
  currentIndex = ds.mode === "sequence" ? ds.start : 0;
  openPdf(key);
}

function saveState(state) {
  chrome.storage.local.set({
    lastState: state
  });
}



Object.keys(DATASETS).forEach((k) => {
  const opt = document.createElement("option");
  opt.value = k;
  opt.textContent = `DataSet ${k}`;
  datasetSelect.appendChild(opt);
});

datasetSelect.onchange = () => loadDataset(datasetSelect.value);

prevBtn.onclick = () => {
  const ds = DATASETS[datasetSelect.value];
  if (ds.mode === "sequence") {
    if (currentIndex > ds.start) currentIndex--;
  } else {
    if (currentIndex > 0) currentIndex--;
  }
  openPdf(datasetSelect.value);
};

nextBtn.onclick = () => {
  const ds = DATASETS[datasetSelect.value];
  if (ds.mode === "sequence") {
    currentIndex++;
  } else {
    if (currentIndex < ds.files.length - 1) currentIndex++;
  }
  openPdf(datasetSelect.value);
};

/* init */

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("lastState", (res) => {
    if (res.lastState) {
      const { dataset, index } = res.lastState;

      datasetSelect.value = dataset;
      currentIndex = index;

      openPdf(dataset);
    } else {
      // fallback pertama kali install
      datasetSelect.value = "1";
      loadDataset("1");
    }
  });
});


