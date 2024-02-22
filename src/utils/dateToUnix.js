export function dateToUnix(date) {
  if(date === 'now') { // 取得目前時間的時間戳
    return Math.floor(new Date().getTime() / 1000)
  } else {
    return '指定日期轉 unix'
  } 
}
