/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const mobileLoc = {
    sortByElement: () => 'div.category-products > div.toolbar > div.sorter > div > select',
    sortByOption: valueOfOption => {
        if (valueOfOption == '1') { return `div.category-products > div.toolbar > div.sorter > div > select > option:nth-child(${valueOfOption})`; } //Position
        else if (valueOfOption == '2') { return `div.category-products > div.toolbar > div.sorter > div > select > option:nth-child(${valueOfOption})`; } //Name
        else { return 'div.category-products > div.toolbar > div.sorter > div > select > option:nth-child(3)'; } //Price
    },
    sortByAscDesc: () => 'div.toolbar > div.sorter > div > a',
    viewGridMode: () => '.view-mode .grid',
    viewGridList: () => '.view-mode .list',
    phoneType: index => {
        switch (index) {
            case 1:
                `li:nth-child(${index}) .product-info h2 a`; //Sony
                break;
            case 2:
                `li:nth-child(${index}) .product-info h2 a`; //Iphone
                break;
            case 3:
                `li:nth-child(${index}) .product-info h2 a`; //Samsung
                break;
        }
    },
    sonyPrice: () => '#product-price-1 .price',
    sonyDetailName: () => '.product-name .h1'
};

module.exports = mobileLoc;