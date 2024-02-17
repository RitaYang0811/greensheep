import { dateFormat } from "./dateFormat.js";

// unix 參數需為以秒為單位 (10 位數)
export function unixToDate(unix) {
  const date = new Date(unix * 1000); // 轉為毫秒
  const dateFormatted = dateFormat(date)
 
  return dateFormatted;
}
