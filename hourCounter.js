const time = require('./timeArr');
const staff = require('./employees');

let punchInTime = [18,00];
let currentTime = [time[6],time[7]];
let currentDate = `${time[3]}, ${time[0]} ${time[4]}, ${time[5]}`;

const hours = () =>
{
	const wholeHrs = currentTime[0] - punchInTime[0];
	const netMins = currentTime[1] - punchInTime[1];
	return wholeHrs +Math.round(wholeHrs + (netMins/60)*100)/100;
}

const netPayToday = (name,wage) =>
	{
	
};

// console.log(hours())

