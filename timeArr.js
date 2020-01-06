function zeroFill(i)
{	if ( i < 10 ) { return '0' + i };
	return i; };

const dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
const monthArr = ['January','February','March','April','May','June',
		'July','August','Seprember','October','November','December'];

const date = new Date();
const h = date.getHours();
const m = date.getMinutes();
const hh = zeroFill(h);
const mm = zeroFill(m);

const year = date.getFullYear();

const day = date.getDay();
const dayOfWeek = dayArr[day];
const dayOfMonth = date.getDate();
const monthNum = date.getMonth();
const month = monthArr[monthNum];
const monthFilled = zeroFill(monthNum);

const timeArr = [month,monthNum,monthFilled,dayOfWeek,dayOfMonth,year,hh,mm];



//const timeArr = [time()];
//console.log(timeArr);

/*
console.log(`I return an array with some helpfully formatted time info.`);
console.log(`0: Written month \n1: Month Number \n2: Month Numer Zero-filled \n3: Day of Week \n4: Day of Month`);
console.log(`5: Year\n6: Hour (24)\n7: Minute`);
*/

module.exports = timeArr;
