jQuery(document).ready(function(){
    jQuery('#customWords').val(localStorage.getItem('customWords'));
    jQuery('#excludedWords').val(localStorage.getItem('excludedWords'));
    
    var customTimeout = null;
    var excludedTimeout = null;
    
    jQuery('#customWords').keyup(function(){
        clearTimeout(customTimeout);
        
        customTimeout = setTimeout(function(){
            localStorage.setItem('customWords',jQuery('#customWords').val());
        }, 500);
    });
    
    jQuery('#excludedWords').keyup(function(){
        clearTimeout(excludedTimeout);
        
        excludedTimeout = setTimeout(function(){
            localStorage.setItem('excludedWords',jQuery('#excludedWords').val());
        }, 500);
    });
});