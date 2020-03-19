const dashboard = {
  dashboardTitle: () => '3oliv',
  previousCurrentNextMonth: indexOfMonth => {
    switch (indexOfMonth) {
      case 1:
        `button[type="button"]:nth-child(${indexOfMonth})`;
        break;
      case 2:
        `button[type="button"]:nth-child(${indexOfMonth})`;
        break;
      case 3:
        `button[type="button"]:nth-child(${indexOfMonth})`;
        break;
    }
  },
  monthTitle: () => '.row .col-xs-4 span'
};

module.exports = dashboard;
