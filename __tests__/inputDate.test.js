import InputDate from './../src/inputDate.js'

describe('InputDate', () =>{

  test('should correctly create a InputDate object with day, month and year properties', () => {
    const testDate = new InputDate(1,1,1900);
    expect(testDate.day).toEqual(1);
    expect(testDate.month).toEqual(1);
    expect(testDate.year).toEqual(1900);
  });

  test('should return a number, 0-6, for a given date', () =>{
    const testDate = new InputDate(30,8,2010);
    expect(testDate.getDay()).toEqual(1);
  });

  test('should return a day of the week for a given date', () =>{
    const testDate = new InputDate(30,8,2010);
    expect(testDate.getDay()).toEqual('Monday');
  });
});