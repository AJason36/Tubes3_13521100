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
    if (arr && arr.length >= 4 && arr[1] && arr[2] && arr[3])
        return days[new Date(Number.parseInt(arr[3]), Number.parseInt(arr[2]) - 1, Number.parseInt(arr[1])).getDay()] ?? 'undefined'
    throw Error('Wrong date')
}

// console.log(getDayFromDate('03-05-2023'))
// console.log(getDayFromDate('03/05/2023'))