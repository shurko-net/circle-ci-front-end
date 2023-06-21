function checkEvenOrOddTime(currentDate: any, commentDate: any) {
  const timeDifference = currentDate
    .getTime() - commentDate.getTime();

  const timeUnits = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  };

  for (const [unit, value] of Object.entries(timeUnits)) {
    const difference = Math.floor(timeDifference / value);
    if (difference < 60) {
      return difference % 10 === 1
        ? `${difference} ${unit} ago`
        : `${difference} ${unit}s ago`;
    }
  }
}

export default checkEvenOrOddTime;
