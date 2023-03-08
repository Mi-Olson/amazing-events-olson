console.log([document]);
console.log("anda")

const queryId = location.search
console.log(queryId);
const params = new URLSearchParams(queryId)
console.log(params);
const id = params.get("id")
console.log("id" + id)

const one_event = events.events.find(ev => ev._id == id)



let result_est_ass=[]
 result_est_ass=calculate()


function calculate(){
let result=[]
result=one_event.assistance || one_event.estimate
  result[0]=one_event.assistance
  result[1] ="assistance"
  if(result[0]==undefined){
    result[0]=one_event.estimate
    result[1]="estimate"
  }
  return result
}


const div_card = document.getElementById("card_one")
div_card.innerHTML = `<div class="row  row-details ">
<img class="col-6 p-3 " src="${one_event.image}" alt="${one_event.category}">
<div class="col-6 text-center p-3 ">
  <h1 class="line ">${one_event.name}</h1>
  <p class="pt-4 h5 ">Date : ${one_event.date} </p>
  <p class="pt-4 h5">${one_event.description} </p>
  <div class="d-flex justify-content-around col-12">
  <p class="pt-4 col-6">Category :${one_event.category} </p>
  <p class="pt-4 col-6 ">place :${one_event.place} </p>
  </div>
  <div class="d-flex justify-content-around col-12">
  <p class="pt-4 col-6">capacity :${one_event.capacity} </p>
  <p class="pt-4 col-6">${result_est_ass[1]} ${result_est_ass[0]} </p>
  </div>
  <p class="pt-4 h5">price :${one_event.price} </p>
</div>
</div>`




