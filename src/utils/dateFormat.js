// 傳入: Tue Apr 30 2024 00:00:00 GMT+0800 (GMT+08:00)
// 回傳: 2024-04-30

export function dateFormat(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dateFormatted = `${year}-${month}-${day}`

  return dateFormatted;
}