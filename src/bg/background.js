chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.method == "getSettings") {
        sendResponse({data: localStorage});
    } else {
        sendResponse({});
    }
});