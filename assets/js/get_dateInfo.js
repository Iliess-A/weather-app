export function get_dateInfo(dt){
    console.log(dt);
    let date = new Date(dt *1000);
    let date_day= date.getDay();
    console.log(date.getDay());
    const day_info ={
        day_name : 'lundi',
        day : date.getDay()
    }
    return day_info
}