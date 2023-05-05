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
        
    if (arr && arr.length >= 4 && arr[2] && arr[3] && arr[4])
        return days[new Date(Number.parseInt(arr[4]), Number.parseInt(arr[3]) - 1, Number.parseInt(arr[2])).getDay()] ?? 'undefined'
    throw Error('Wrong date')
}

// console.log(getDayFromDate('03-05-2023'))
// console.log(getDayFromDate('03/05/2023'))