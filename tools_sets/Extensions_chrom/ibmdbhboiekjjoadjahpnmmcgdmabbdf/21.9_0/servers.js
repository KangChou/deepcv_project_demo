

function clickCountry(event) {
  var country = event.currentTarget.id;
  //console.log(country);

  // Disconnect proxy if it is turned on
  var bg = chrome.runtime.getBackgroundPage(function(window) {
    if (window.on == true) {
      chrome.runtime.sendMessage({"cmd": "connect"});
    }
  });

  // Save country in the store
  chrome.storage.sync.get(null, function(items) {
    items["country"] = country;
    chrome.storage.sync.set(items, function() {
      window.location = "popup.html";
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // handle cancel from servers.html
  var cancel = document.getElementById("cancel");
  cancel.addEventListener("click", function() {
    window.location = "popup.html";
  });

  // handle click on <li>
  var rows = document.getElementById("countryList").getElementsByTagName("li");
  for (var i = 0; i < rows.length; i++) {
    var li = rows.item(i);
    li.addEventListener("click", clickCountry);
  }
});
