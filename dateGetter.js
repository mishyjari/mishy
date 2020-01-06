
const months = ['January','February','March','April','May','June',
		'July','August','Seprember','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
fullDate = () =>
{
	const date = new Date();	
	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const day = days[date.getDay()];
	const dayOfMonth = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes(); 
}
console.log(`Today is ${fullDate.day}, ${fullDate.month} ${fullDate.dayOfMonth}, ${fullDate.year}`);
console.log(`The current time is ${fullDate.hour}:${fullDate.minute}`)


/*	const hour = () =>
	{
		if ( fullDate.hour < 10 )
			{ return '0' + fullDate.hour; }
		else
			{ return fullDate.hour };
	}*/

