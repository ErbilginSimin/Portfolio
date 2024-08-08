export const getCurrentSeason = ():
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter' => {
  const month = new Date().getMonth() + 1; // getMonth() is zero-based
  // console.log(month);
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
