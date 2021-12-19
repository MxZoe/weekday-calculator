export default function InputDate(day, month, year){
  this.day = day;
  this.month = month;
  this.year = year;
}

InputDate.prototype.getDay = function(){
  const t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'];
  this.year -= (this.month < 3) ? 1 : 0;
  const dayNumber = Math.round((this.year + this.year/4 - this.year/100 + this.year/400 + t[this.month-1] + this.day) % 7);
  return dayArray[dayNumber];
}