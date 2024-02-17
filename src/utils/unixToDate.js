export function unixToDate(unix) {
  const date = new Date(unix * 1000);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const resultDate = `${year}-${month}-${day}`;
 
  return resultDate;
}
