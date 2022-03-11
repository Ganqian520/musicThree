export function timeTo(e) {	//分钟字符串互转秒数
  if (typeof e == 'number') {
    let min = parseInt(e / 60);
    let second = parseInt(e - min * 60);
    min = min < 10 ? `0${min}` : min;
    second = second < 10 ? `0${second}` : second;
    return `${min}:${second}`;
  } else {
    return parseInt(e.slice(0, 2)) * 60 + parseInt(e.slice(3, 5));
  }
}