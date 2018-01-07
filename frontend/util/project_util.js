export const daysToGo = (end_date) => {
  const oneDay = 24 * 60 * 60 * 1000; // seconds in one day
  const date1 = Date.parse(new Date());
  const date2 = Date.parse(end_date);

  const dayDifference = Math.round(Math.abs((date1 - date2) / oneDay));

  if (date2 < date1) {
    return "This wish has been granted!";
  } else {
    return dayDifference + " days to go";
  }
};

export const percentFundedFunction = (raised, goal) => {
  return Math.floor((raised / goal) * 100);
};
