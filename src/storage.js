export function get(key, defaultValue, func) {
  chrome.storage.local.get(key, function (obj) {
    if (obj[key] == undefined) {
      func(defaultValue);
    } else {
      func(obj[key]);
    }
  });
}

export function set(key, value) {
  chrome.storage.local.set({ [key]: value });
}
