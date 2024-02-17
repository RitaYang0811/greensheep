export function dateToUnix(date) {
  if(date === 'now') {
    return Math.floor(new Date().getTime() / 1000)
  } else {
    return '指定日期轉 unix'
  } 
}
