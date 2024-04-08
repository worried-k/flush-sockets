chrome.action.onClicked.addListener(function(tab) {
  var currentId = tab.id
  chrome.tabs.create({
    url: "chrome://net-internals/?from=plugin#dns"
  }, function(tab) {
    var id = tab.id
    setTimeout(function() {
      chrome.tabs.remove([id])
      chrome.tabs.update(currentId, {
        selected: true
      })
      chrome.tabs.reload(currentId, {
        bypassCache: true
      })
    }, 600)
  });
});
