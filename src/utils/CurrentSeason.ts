export const getCurrentSeason = ():
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter' => {
  const now = new Date(Date.now()); // Current date
  const month = now.getMonth() + 1; // January is 0
  const day = now.getDate(); // 1-31

  // console.log(month);
  switch (month) {
    case 3:
      return day >= 21 ? 'spring' : 'winter';
    case 4:
    case 5:
      return 'spring';
    case 6:
      return day >= 21 ? 'summer' : 'spring';
    case 7:
    case 8:
      return 'summer';
    case 9:
      return day >= 23 ? 'autumn' : 'summer';
    case 10:
    case 11:
      return 'autumn';
    case 12:
      return day >= 21 ? 'winter' : 'autumn';
    case 1:
    case 2:
      return 'winter';
    default:
      return 'winter';
  }
};
