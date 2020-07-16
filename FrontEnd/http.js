export default class Http {
  static fetchMemos(url) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", url);
      http.onStateChanged = function () {
        if (http.readyState === DONE && http.status === 200) {
          resolve(http.response);
        } else if (http.readyState === DONE) {
          reject("There was a problem with the server...");
        }
      };
      http.send();
    });
  }

  static storeMemo(url) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("POST", url);
      http.onStateChanged = function () {
        if (http.readyState === DONE && http.status < 400) {
          resolve(JSON.parse(http.responseText));
        } else if (http.readyState === DONE) {
          reject("There was a problem with the server...");
        }
      };
      http.send();
    });
  }
}
