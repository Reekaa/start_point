myFunctions = {
  //write your methods here
  helloWorld: () => {
    return 'Hello World!';
  },
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1/num2;
  },
  lengthOfString: (string) => {
    return string.length;
  },
  concatenateStrings: (str1, str2) => {
    return str1 + str2;
  },
  addStringAsNumber: (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
  },
  numberToFullMonthName: (month) => {
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return monthName[month - 1];
  },
  numberToShortMonthName: (month) => {
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return monthName[month-1].substring(0,3);
  },
  volumeOfCube: (length) => {
    return length * length * length;
  },
  volumeOfSphere: (radius) => {
    return (4/3)*Math.PI*(radius*radius*radius);
  },
  farToCel: (farenheit) => {
    return ((farenheit-32)*5)/9;
  }
};

module.exports = myFunctions;
