/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const compare = {
    compareButtonOfPhone: indexOfProduct => {
        if (indexOfProduct == '1') {
            return `li:nth-child(${indexOfProduct}) > div > div.actions > ul > li:nth-child(2) > a`; //Sony
        }
        else if (indexOfProduct == '2') {
            return `li:nth-child(${indexOfProduct}) > div > div.actions > ul > li:nth-child(2) > a`; //iPhone
        }
        else { return 'li:nth-child(3) > div > div.actions > ul > li:nth-child(2) > a'; } //Samsung
    },
    compareButton: () => 'button[title="Compare"]',
    sonyName: () => 'h2 a[title="Sony Xperia"]',
    iPhoneName: () => 'h2 a[title="IPhone"]',
    closePopUp: () => 'button[title="Close Window"]'
};


module.exports = compare;