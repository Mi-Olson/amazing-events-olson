console.log([document]);
console.log("anda")

const queryId = location.search
console.log(queryId);
const params = new URLSearchParams(queryId)
console.log(params);
const id = params.get("id")
console.log("id" + id)

const one_event = events.events.find(ev => ev._id == id)


console.log(one_event);
console.log(events);

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
  <p class="pt-4 col-6">assistence or estimate :${one_event.assistance} </p>
  </div>
  <p class="pt-4 h5">price :${one_event.price} </p>
</div>
</div>`




