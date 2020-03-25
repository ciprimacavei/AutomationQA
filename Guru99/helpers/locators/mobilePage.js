/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const mobileLoc = {
    sortByElement: () => '.sort-by select',
    sortByOption: valueOfOption => {
        if (valueOfOption == '1') { return `.sort-by select option:nth-child(${valueOfOption})`; } //Position
        else if (valueOfOption == '2') { return `.sort-by select option:nth-child(${valueOfOption}))`; } //Name
        else { return `.sort-by select option:nth-child(${valueOfOption})`; } //Price
    },
    sortByAscDesc: () => 'div.toolbar > div.sorter > div > a',
    viewGridMode: () => '.view-mode .grid',
    viewGridList: () => '.view-mode .list'
};

module.exports = mobileLoc;