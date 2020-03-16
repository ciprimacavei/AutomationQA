const header = {
    sandwichButton: () => '#container #guide-button #button #guide-icon svg g path',
    youtubeLogo: () => '#logo #logo #logo-icon-container',
    countryCode: () => '#logo #country-code',
    searchBar: () => '#search-input #search',
    searchButton: () => '#search-icon-legacy',
    signInButton: () => '#buttons ytd-button-renderer',
    topBarButtons: indexOfButton => {
        if (indexOfButton == '3') { return `#buttons ytd-topbar-menu-button-renderer:nth-child(${indexOfButton}) #button a #button #button`; }
        else if (indexOfButton == '2') { return `#buttons ytd-topbar-menu-button-renderer:nth-child(${indexOfButton}) #button #button #button`; }
        else { return '#buttons ytd-topbar-menu-button-renderer:nth-child(1) #button #button #button'; }
    },
    views: () => '#metadata-line span:nth-child(1)',
    settingsButton: indexOfElement => {
        switch (indexOfElement) {
            case 1: '#items ytd-toggle-theme-compact-link-renderer #label';
                break; //Dark-Mode Theme option;
            case 2: `#items ytd-compact-link-renderer:nth-child(${indexOfElement})`;
                break; //Settings option;
            case 3: `#items ytd-compact-link-renderer:nth-child(${indexOfElement})`;
                break; //Your Data on Youtube
            case 4: `#items ytd-compact-link-renderer:nth-child(${indexOfElement})`;
                break; //Help
            case 5: `#items ytd-compact-link-renderer:nth-child(${indexOfElement})`;
                break; //Send Feedback
            case 6: `#items ytd-compact-link-renderer:nth-child(${indexOfElement})`;
                break; //Keyboard Shortcuts
        }
    },
    toggleBar: () => 'ytd-toggle-item-renderer #toggleBar',
    backgroundThemeColor: () => 'ytd-toggle-item-renderer paper-toggle-button'
};

module.exports = header;