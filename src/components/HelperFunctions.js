
export const timeConverteToString = (ts) => {
    console.log(ts);
    const time = new Date(ts * 1000);
    const [day, month, year] = [time.getDate(), time.getMonth(), time.getFullYear()];
    console.log(year);
    let monthName = "";
    switch(month){
        case 0: monthName = "january";  break; 
        case 1: monthName = "february"; break;
        case 2: monthName = "march";    break;
        case 3: monthName = "april";    break;
        case 4: monthName = "may";      break;
        case 5: monthName = "june";     break;
        case 6: monthName = "july";     break;
        case 7: monthName = "august";   break; 
        case 8: monthName = "september";break; 
        case 9: monthName = "oktober";  break; 
        case 10: monthName = "november";break; 
        case 11: monthName = "december";break; 
        default: monthName= "";   
    }
    return `${day} ${monthName} ${year}`;
} 


export const timeConverteToStringNumber = (ts) => {
    console.log(ts);
    const time = new Date(ts * 1000);
    const [day, month, year] = [time.getDate(), time.getMonth(), time.getFullYear()];
    const newMonth = month+1 > 9 ? month+1 : `0${month+1}`;
    const newDay = day > 9 ? day : `0${day}`;

    return `${newDay}.${newMonth}.${year}`;
} 