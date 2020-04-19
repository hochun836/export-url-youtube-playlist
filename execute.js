function onMessage(messageObj) {
  const videoItems = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
  const urls = Array.prototype.map.call(videoItems, item => item.href.split('&')[0]);
  save(urls);
};

function save(data, filename) {
  if (!data) {
    console.error('No data');
    return;
  }
  if (!filename) {
    filename = 'url.json';
  }
  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }
  var blob = new Blob([data], {
    type: 'text/json'
  });
  var e = document.createEvent('MouseEvents');
  var a = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);
};

chrome.runtime.onMessage.addListener(onMessage);

// console.log('[in content_script] chrome:', chrome);
// console.log('loading execute.js');