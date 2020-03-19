const header = {
  searchContact: () => 'input[name="contactName"]',
  documentationLink: () => 'div.right.menu a:nth-child(2) i',
  logoutLink: () => 'div.right.menu a:nth-child(4) div',
  languageButton: () => 'div.right.menu div div .item div .text',
  supportLink: () => 'div.right.menu div:nth-child(3) div div.text',
  availableLang: indexOfCountry => {
    if (indexOfCountry == '1') {
      return `div.menu.transition.visible div:nth-child(${indexOfCountry})`; //Romanian Language
    } else {
      return `div.menu.transition.visible div:nth-child(${indexOfCountry})`; //English Language
    }
  },
  support: indexForSupport => {
    if (indexForSupport == '1') {
      return `div.menu.transition.visible a:nth-child(${indexForSupport})`; //Timesheet Support
    } else {
      return `div.menu.transition.visible a:nth-child(${indexForSupport})`; //IT Support
    }
  }
};
module.exports = header;
