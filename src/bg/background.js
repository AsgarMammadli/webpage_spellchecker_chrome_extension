chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.method == "getSettings") {
        sendResponse({data: localStorage});
    } else if(request.method == "getDictionaries") {
        var sounds = null;
        var mistakes = null;
        
        jQuery.getJSON('/js/dictionary/en/en_sounds.json', function(data){
            sounds = data;
            
            jQuery.getJSON('/js/dictionary/en/en_mistakes.json', function(data){
                mistakes = data;
                
                sendResponse({data: {"sounds": sounds, "mistakes": mistakes}});
            });
        });
    } else {
        sendResponse({});
    }
});