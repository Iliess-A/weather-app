export function get_dateInfo(dt){
    console.log(dt);
    let date = new Date(dt *1000);
    let date_day= date.getDay();
    console.log(date.getDay());
    return date_day;
}