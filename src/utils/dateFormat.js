// date 參數需為此格式
// Tue Apr 30 2024 00:00:00 GMT+0800 (GMT+08:00)
export function dateFormat(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dateFormatted = `${year}-${month}-${day}`

  return dateFormatted;
}