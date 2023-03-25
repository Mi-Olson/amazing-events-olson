const tabla_stats=document.getElementsByClassName("table_dark")
const felicidad=document.getElementById("felicidad")
const faroles=document.getElementsByClassName("square")
const todas_las_card=document.getElementsByClassName("card-body")
const select_body=document.getElementById("miBody")

const check_modo=localStorage.getItem("day_mode")

// console.log(location.pathname.includes("index"));
if(location.pathname.includes("index") && check_modo== undefined){
    localStorage.setItem("day_mode", false)
}
else{
const check_modo=localStorage.getItem("day_mode")
if(check_modo){
    select_body.classList.remove("body_dark")
    select_body.classList.add("body_day")
    for(card of todas_las_card){
        card.classList.remove("card_dark")
        card.classList.add("card_day")
       
        }
       
    for (farol of faroles){       farol.classList.add("squareDay")       }
 }
}


felicidad.addEventListener("click",()=>

{
    
    hacer_dia_o_noche() 
    set_local_storage()
})


function hacer_dia_o_noche(){
   
    select_body.classList.toggle("body_day")//no funciona
    select_body.classList.toggle("body_dark")
    for (tabla of tabla_stats){    tabla.classList.toggle("body_dark")    }
    for(card of todas_las_card){
    card.classList.toggle("card_day")
    card.classList.toggle("card_dark")

    }
    for (farol of faroles){   farol.classList.toggle("squareDay")    }
}
function set_local_storage(){
    if (localStorage.getItem("day_mode")){
        localStorage.setItem("day_mode", true)
    }
    else{
        localStorage.setItem("day_mode", false)

    }

     
}






