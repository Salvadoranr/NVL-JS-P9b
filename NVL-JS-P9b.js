var weekDays= "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo"
var places= "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti" 
var itinerary=[] ;
weekDays = weekDays.split(",");
places=places.split(".");
    for (let index = 0; index < places.length; index++) {
        itinerary.push([weekDays[index],places[index]])
        
    }
    console.log(itinerary)