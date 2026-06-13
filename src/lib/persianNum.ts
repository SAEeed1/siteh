/**
 * Converts Western Arabic numerals (0-9) in a string to Eastern Arabic/Persian numerals (۰-۹)
 */
export function toPersianNum(input: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (d) => persianDigits[parseInt(d)]);
}
