function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }

  let temp;

  let result = [];

  do {
    if (lng > wdth) {
      result.push(wdth);
      temp = wdth;
      wdth = lng - wdth;
      lng = temp;
    } else {
      result.push(lng);
      temp = lng;
      lng = wdth - lng;
      wdth = temp;
    }
  } while (lng !== wdth);

  result.push(lng);

  return result;
}

console.log(sqInRect(14, 20));
