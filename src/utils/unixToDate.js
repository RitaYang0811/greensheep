import { dateFormat } from "./dateFormat.js";

// 傳入: 1708185600000 *unix 參數需為以毫秒為單位 (13 位數)
// 回傳: 2024-02-18

export function unixToDate(unix) {
  const date = new Date(unix);
  const dateFormatted = dateFormat(date)
 
  return dateFormatted;
}
