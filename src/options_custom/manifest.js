this.manifest = {
    "name": chrome.i18n.getMessage("extensionName"),
    "icon": "icon.png",
    "settings": [
        {
            "tab": chrome.i18n.getMessage("wordsTabName"),
            "group": chrome.i18n.getMessage("customisationText"),
            "name": "customWordsDescription",
            "type": "description",
            "text": chrome.i18n.getMessage("customWords")
        },
        {
            "tab": chrome.i18n.getMessage("wordsTabName"),
            "group": chrome.i18n.getMessage("customisationText"),
            "name": "customWords",
            "type": "textarea",
            "text": chrome.i18n.getMessage("customWordsPlaceholder")
        },
        {
            "tab": chrome.i18n.getMessage("wordsTabName"),
            "group": chrome.i18n.getMessage("customisationText"),
            "name": "customWordsDescription",
            "type": "description",
            "text": chrome.i18n.getMessage("excludedWords")
        },
        {
            "tab": chrome.i18n.getMessage("wordsTabName"),
            "group": chrome.i18n.getMessage("customisationText"),
            "name": "excludedWords",
            "type": "textarea",
            "text": chrome.i18n.getMessage("excludedWordsPlaceholder")
        }
    ]
};
