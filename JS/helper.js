export function formatData(data){
    return dayjs(data).format("DD/MM/YYYY")
}
export function formatTime(data){
    if (data)
        return dayjs(data).format("HH:mm")
    return "-"
}