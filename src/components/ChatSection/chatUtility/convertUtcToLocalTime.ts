const convertUtcToLocalTime = (utcTime: string): string => {
  // getting utc time string into a date object
  const futureDate = new Date(utcTime);

  //   getting hours
  const hours = futureDate.getHours();

  //   determining AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // convert 24 hour format into 12 hours format
  const hoursIn12HourFormat = hours % 12;

  const formattedHours = hoursIn12HourFormat ? hoursIn12HourFormat : 12;

  //   gettings minutes
  const minutes = futureDate.getMinutes();

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export default convertUtcToLocalTime;
