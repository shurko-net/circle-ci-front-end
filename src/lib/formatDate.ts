const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

function formatDate(date:string) {
  const dateNew = new Date(date);
  const month = months[dateNew.getMonth()];
  const day = dateNew.getDate();
  const hours = dateNew.getHours();
  const minutes = dateNew.getMinutes().toString().padStart(2, '0');

  return {
    month, day, hours, minutes,
  };
}

export default formatDate;
