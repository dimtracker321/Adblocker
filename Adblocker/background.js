chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel : true}},
    {urls: ["*://*.geeksforgeeks.org/*"]},
    ["blocking"]
)