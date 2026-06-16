export function validatePhone(phone) {
  return /^\d{11}$/.test(phone);
}

export function validateAge(age) {
  const num = Number(age);
  return Number.isInteger(num) && num > 0 && num < 150;
}