// Dates
let date = new Date();
console.log(date); // Current date and time
console.log(date.toString()); // String representation of the date
console.log(date.toDateString()); // Date part only
console.log(date.toTimeString()); // Time part only
console.log(date.getFullYear()); // Get the full year
console.log(date.getMonth()); // Get the month (0-11, where 0 is January)
console.log(date.getDate()); // Get the day of the month (1-31)
console.log(date.getDay()); // Get the day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // Get the hour (0-23)
console.log(date.getMinutes()); // Get the minutes (0-59)
console.log(date.getSeconds()); // Get the seconds (0-59)
console.log(date.toLocaleString()); // Locale-specific string representation

// let specificDate = new Date(2025, 0,23 ); 
let specificDate = new Date("01-14-2025");
console.log(specificDate.toLocaleString); // Specific date

let myTimestamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimestamp); // Current timestamp
console.log(specificDate.getTime()); // Timestamp of specific date

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // Months are 0-indexed, so add 1 to get the correct month
console.log(newDate.getFullYear()); // Get the full year
console.log(newDate.getDate()); // Get the day of the month
console.log(newDate.getDay()); // Get the day of the week (0-6, where 0 is Sunday)
console.log(newDate.getHours()); // Get the hour (0-23)

newDate.toLocaleString('default',{
    weekday: 'long', // Full name of the day
    year: 'numeric', // Full year
    month: 'long', // Full name of the month
    day: 'numeric', // Day of the month
    hour: '2-digit', // Hour in 2-digit format
    minute: '2-digit', // Minute in 2-digit format
    second: '2-digit', // Second in 2-digit format 
    timeZone: 'Asia/Kolkata' // Specify the time zone  
})