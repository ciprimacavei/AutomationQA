const loginPage = {
    mainTitle: () => 'h1',
    username: () => 'input[name="username"]',
    password: () => 'input[name="password"]',
    loginButton: () => 'form button',
    selectLanguageButton: () => '.item .ui.item.dropdown',
    selectLanguage: indexForLanguage => {
        if (indexForLanguage == '1') { return '.ro.flag'; }
        else { return '.us.flag'; }
    },
    langDisplayed: () => 'div.text',
    copyrightText: () => 'div span'
};

module.exports = loginPage;