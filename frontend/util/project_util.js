export const daysToGo = (end_date, raised, goal) => {
  const oneDay = 24 * 60 * 60 * 1000; // seconds in one day
  const date1 = Date.parse(new Date());
  const date2 = Date.parse(end_date);

  const dayDifference = Math.round(Math.abs((date1 - date2) / oneDay));

  if (date2 < date1) {
    if (raised >= goal) {
      return "This wish has been granted!";
    } else {
      return "This wish has exhausted its time.";
    }
  } else {
    if (dayDifference === 0) {
      return "This is the last day to grant this user's wish!"
    } else {
      return dayDifference + " days to go";
    }
  }
};

export const daysToGoNoString = (end_date, raised, goal) => {
  const oneDay = 24 * 60 * 60 * 1000; // seconds in one day
  const date1 = Date.parse(new Date());
  const date2 = Date.parse(end_date);

  const dayDifference = Math.round(Math.abs((date1 - date2) / oneDay));

  if (date2 < date1) {
    if (raised >= goal) {
      return "This wish has been granted!";
    } else {
      return "This wish has exhausted its time.";
    }
  } else {
    if (dayDifference === 0) {
      return "This is the last day to grant this user's wish!"
    } else {
      return dayDifference + " days to go";
    }
  }
};

export const percentFundedFunction = (raised, goal) => {
  return Math.floor((raised / goal) * 100);
};

// Work around Progress Bar package pushing forward between 100% and 200%
export const progressFundedFunction = (raised, goal) => {
  let percent = Math.floor((raised / goal) * 100);
  if (percent > 100) {
    let diff = 100 - percent;
    percent += diff;
  }
  return percent;
};


// add commas to big numbers
export const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
