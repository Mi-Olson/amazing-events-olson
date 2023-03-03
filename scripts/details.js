console.log([document]);
console.log("anda")

const queryId=location.search
console.log(queryId);
const params =new URLSearchParams(queryId)
console.log(params);
const id= params.get("id")
console.log("id"+id)

const one_event =events.events.find(ev=>ev._id== id)


console.log(one_event);
console.log(events);

const div_card=document.getElementById("card_one")
div_card.innerHTML=`<div class="row  row-details ">
<img class="col-6 p-3 " src="${one_event.image}" alt="museum">
<div class="col-4 text-center p-3 ">
  <h2>Name</h2>
  <p class="pt-4 ">Date: </p>
  <p class="pt-4 ">Description: </p>
  <p class="pt-4 ">Category: </p>
  <p class="pt-4 ">place: </p>
  <p class="pt-4 ">capacity: </p>
  <p class="pt-4 ">assistence or estimate: </p>
  <p class="pt-4 ">price: </p>
</div>
</div>`
  
  
  

