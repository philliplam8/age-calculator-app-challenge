export function calculateAge(day: number, month: number, year: number) {
  const today = Date.now(); // UTC Date
  const birthday = new Date(Date.UTC(year, month - 1, day)); // convert user input date into UTC date

  const diff = today - Date.parse(birthday.toISOString()); //difference in milliseconds since July 1, 1970

  const diffYears = diff / 31557600000;
  const diffMonths =
    diffYears > 0 ? (diffYears - Math.floor(diffYears)) * 12 : diffYears * 12;
  const diffDays =
    diffMonths > 0
      ? (diffMonths - Math.floor(diffMonths)) * 30.5
      : diffMonths * 30.5;

  console.log(`${diffYears} years, ${diffMonths} months, ${diffDays} days`);
  return `${Math.floor(diffYears)} years, ${Math.floor(
    diffMonths
  )} months, ${Math.floor(diffDays)} days.`;
}