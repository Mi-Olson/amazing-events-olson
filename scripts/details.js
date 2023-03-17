const API_URL = "https://mindhub-xj03.onrender.com/api/amazing";

const div_card = document.getElementById("card_one")
const queryId = location.search
console.log(queryId);
const params = new URLSearchParams(queryId)
const id = params.get("id")
let one_event = ""
let result_est_ass = []


const getEvents = async () => {
  try {
    const get_events = await fetch(API_URL);
    events = await get_events.json();


    one_event = await events.events.find(ev => ev._id == id)

    result_est_ass = calculate()
    create_card()



  }
  catch (e) {
    console.log("Error status", e);
  }

};
getEvents();







function calculate() {
  let result = []

  result[0] = one_event.assistance
  result[1] = "assistance"
  if (result[0] == undefined) {
    result[0] = one_event.estimate
    result[1] = "estimate"
  }
  return result
}

function create_card(){
div_card.innerHTML = `<div class="row-details m-3 ">
<div class="col-12  col-md-4 col-sm-4 p-3 " >
<img class=" col-12 " src="${one_event.image}" alt="${one_event.category}">
</div>
<div class="col-12 col-md-8 col-sm-8 text-center p-3 ">
  <h1 class="line shadow ">${one_event.name}</h1>
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


}

