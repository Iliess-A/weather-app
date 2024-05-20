
export function get_dateInfo(dt){
    let date = new Date(dt *1000);
    const day_info ={
        day_name : date.toLocaleString('fr-FR', { weekday: 'long' }),
        day : date.getDate(),
        day_month : `${date.getDay()}/${date.getMonth()}`,
        day_moment : moment_journer(date.getHours())
    }
    return day_info
}

function moment_journer(heure){

    if(heure>=4 && heure<=18){
        return 'sun';
    }else{
        return 'moon';
    }

}