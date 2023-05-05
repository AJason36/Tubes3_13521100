/**
 * 
 * @param date string, format = 'DD-MM-YYYY or DD/MM/YYYY'
 */
export const getDayFromDate = function(arr: any): string {
    let days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ]
    if (arr[1].trim() !== "" || arr[5].trim() !== "") 
        throw Error('Wrong date format')

    
    const dayCnt = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    const date = Number.parseInt(arr[2])
    const month = Number.parseInt(arr[3]) - 1
    const year = Number.parseInt(arr[4])

    // Mencari kabisat/tidak
    if (year % 400 === 0) {
        dayCnt[1]++;
    }
    else if (year % 100 === 0) {
        // do nothing
    }
    else if (year % 4 === 0) {
        dayCnt[1]++;
    }

    if (month < 0 || month >= 12) throw Error('Month must be between 1-12');
    if (date <= 0 || date > dayCnt[month]) throw Error('Date must be between 1-' + dayCnt[month].toString);

    return days[new Date(year, month, date).getDay()] ?? 'undefined'
}

// console.log(getDayFromDate('03-05-2023'))
// console.log(getDayFromDate('03/05/2023'))