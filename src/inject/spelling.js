var webpageSpellingExtension = {
    settings: null,
    words: null,
    sounds: null,
    mistakes: null,
    
    setSettings: function(settings) {
        this.settings = settings;
    },
    
    setDictionaries: function(dictionaries) {
        this.sounds = dictionaries.sounds;
        this.mistakes = dictionaries.mistakes;
    },
    
    addUnderline: function($el, match) {
        var re = new RegExp(match, 'g');
        $el.html($el.html().replace(re, '<span class="webpageSpellingExtensionError">'+match+'</span>'));
    },
    
    checkSpelling: function(word, $el) {
        var wordSound = this.soundex(word);
        
        if(typeof this.sounds[wordSound] != 'undefined') {
            if(this.sounds[wordSound].indexOf(word.toLowerCase())<0) {
                this.addUnderline($el, word);
            }
        } else {
            this.addUnderline($el, word);
        }
    },
    
    soundex: function (s) {
        var a = s.toLowerCase().split('')
            f = a.shift(),
            r = '',
            codes = {
                a: '', e: '', i: '', o: '', u: '',
                b: 1, f: 1, p: 1, v: 1,
                c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2,
                d: 3, t: 3,
                l: 4,
                m: 5, n: 5,
                r: 6
            };

        r = f +
            a
            .map(function (v, i, a) { return codes[v] })
            .filter(function (v, i, a) {
                return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);
            })
            .join('');

        return (r + '000').slice(0, 4).toUpperCase();
    }
};

jQuery(document).ready(function(){
    chrome.extension.sendRequest({method: "getSettings"}, function(response) {
        webpageSpellingExtension.setSettings(response.data);
    });
    
    chrome.extension.sendRequest({method: "getDictionaries"}, function(response) {
        webpageSpellingExtension.setDictionaries(response.data);
        
        jQuery('div,span,p,a,h1,h2,h3,h4,h5,h6,h7,h8,td').each(function(){
            var $elem = jQuery(this);
            var words = jQuery.trim(jQuery(this).text().replace(/[^a-zA-Z -]/g,"").replace(/ +/g, " ")).split(" ");
            jQuery.each(words,function(index, value) {
                if(value != '') {
                    //webpageSpellingExtension.checkSpelling(value, $elem);
                }
            });
        });
    });
});