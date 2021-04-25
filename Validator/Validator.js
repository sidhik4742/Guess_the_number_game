export const numberChecker = (number) => {
  let result = number.replace(/[^0-9]/g, '');
  return result;
};
