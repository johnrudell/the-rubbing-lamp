export const formatDeadline = (end_date) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const dayNames = [
    "Sun", "Mon", "Tues", "Wed",
    "Thurs", "Fri", "Sat"
  ];

  const deadline = new Date(end_date)

  const dayIndex = deadline.getDay();
  const monthIndex = deadline.getMonth();
  const day = deadline.getDate();
  const year = deadline.getFullYear();

  let hours = deadline.getHours();
  let ampm;
  if (hours > 12) {
      hours -= 12;
      ampm = "PM";
  } else if (hours === 0) {
     hours = 12;
     ampm = "AM";
  }

  let minutes = deadline.getMinutes();
  if (minutes < 10) {
    minutes = minutes + "0"
  }

  const timeZone = /\((.*)\)/.exec(new Date().toString())[1];

  return (
    `${dayNames[dayIndex]},
    ${monthNames[monthIndex]}
    ${day} ${year}
    ${hours}:${minutes}
    ${ampm} ${timeZone} `
  );

};

export const formatDeliveryDate = (delivery_date) => {
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];

  const deliveryDate = new Date(delivery_date)
  const monthIndex = deliveryDate.getMonth();
  const year = deliveryDate.getFullYear();

  return (
    `${monthNames[monthIndex]} ${year}`
  );

};
