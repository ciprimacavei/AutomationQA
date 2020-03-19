const timesheetLocator = {
  addPresetEvents: () => '.col-xs-12 .row div button[type="button"] .add.icon',
  // eslint-disable-next-line prettier/prettier
  deletePresetEvents: () => '.col-xs-12 .row div button[type="button"] .remove.icon',
  monthCalendar: indexForMonth => {
    switch (indexForMonth) {
      case 1:
        `div.col-xs-4._1iYpP button:nth-child(${indexForMonth}) i`; //redirect to calendar type
        break;
      case 2:
        `div.col-xs-4._1iYpP button:nth-child(${indexForMonth}) i`; //previous month
        break;
      case 3:
        `div.col-xs-4._1iYpP button:nth-child(${indexForMonth}) i`; //current month
        break;
      case 4:
        `div.col-xs-4._1iYpP button:nth-child(${indexForMonth}) i`; //next month
        break;
    }
  },
  typeValueForCalendar: () => 'input[type="text"]',
  calendarIcon: () => 'span.MuiIconButton31171 span',
  backToPrevNextMonth: () => 'div.col-md-3._1iYpP > button',
  currentMonth: () => 'div.col-xs-12._1VlBl',
  inputMonth: () => 'div.col-md-3._1iYpP div form div div input',
  monthWeekAgenda: index => {
    switch (index) {
      case 1:
        `.col-xs-8._1AtQe button:nth-child(${index})`;
        break;
      case 2:
        `.col-xs-8._1AtQe button:nth-child(${index})`;
        break;
      case 3:
        `.col-xs-8._1AtQe button:nth-child(${index})`;
        break;
      case 4:
        `.col-xs-8._1AtQe button:nth-child(${index})`;
        break;
    }
  }
};

const addWorkLog = {
  logWork: () => '.active.item',
  absenceRequest: () => '.content div div a:nth-child(2)',
  startDate: () => 'input[name="start"]',
  endDate: () => 'input[name="end"]',
  startTime: () => 'input[name="startTime"]',
  timeSpent: () => 'input[name="workedHoursAsText"]',
  activity: () => 'div [name="activityId"]',
  task: () => 'input[name="task"]',
  description: () => 'textarea[name="description"]',
  saveWorkLogButton: () => 'button[type="submit"]',
  closeWorkLogButton: () => 'div.col-xs-2.col-sm-1._27Pqi button',
  projects: indexOfProject => {
    switch (indexOfProject) {
      case 1:
        `div.visible.menu.transition div:nth-child(${indexOfProject})`; //Project-816
        break;
      case 2:
        `div.visible.menu.transition div:nth-child(${indexOfProject})`; //Project-817
        break;
      case 3:
        `div.visible.menu.transition div:nth-child(${indexOfProject})`; //Project-818
        break;
      case 4:
        `div.visible.menu.transition div:nth-child(${indexOfProject})`; //Project-819
        break;
    }
  },
  modulesForProject816: indexOfModule => {
    if (indexOfModule == '1') {
      return `div.visible.menu.transition div:nth-child(${indexOfModule})`;
    } //Clear option
    else if (indexOfModule == '2') {
      return `div.visible.menu.transition div:nth-child(${indexOfModule})`;
    } else if (indexOfModule == '3') {
      return `div.visible.menu.transition div:nth-child(${indexOfModule})`;
    } else if (indexOfModule == '4') {
      return `div.visible.menu.transition div:nth-child(${indexOfModule})`;
    } else if (indexOfModule == '5') {
      return `div.visible.menu.transition div:nth-child(${indexOfModule})`;
    } else {
      return 'div.visible.menu.transition div:nth-child(6)';
    }
  }
};

const addAbsenceRequest = {
  absenceType: () => 'div [name="leaveTypeId"]',
  replacer: () => 'div [name="replacerId"]',
  phoneNumber: () => 'input[name="phoneNumber"]',
  motivation: () => 'textarea[name="motivation"]',
  saveAbsenceRequestButton: () => 'button[type="submit"]',
  calendarButtons: indexOfButton => {
    if (indexOfButton == '1') {
      return `div:nth-child(${indexOfButton}) div.field.input div div div button span.MuiIconButton31345 span`;
    } else {
      return `div:nth-child(${indexOfButton}) div.field.input div div div button span.MuiIconButton31345 span`;
    }
  }
};

const editWorkLog = {
  removeRequest: () =>
    'form .container-fluid div:nth-child(7) div button[type="button"]'
};

module.exports = editWorkLog;
module.exports = addAbsenceRequest;
module.exports = addWorkLog;
module.exports = timesheetLocator;
