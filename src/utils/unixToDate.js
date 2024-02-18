import { dateFormat } from "./dateFormat.js";

// unix 參數需為以毫秒為單位 (13 位數)
export function unixToDate(unix) {
  const date = new Date(unix);
  const dateFormatted = dateFormat(date)
 
  return dateFormatted;
}
