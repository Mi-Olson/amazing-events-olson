
function create_cards(events) {
    let card = ``
    let currentDate = Date.parse(events.currentDate)


    for (const event of events.events) {
        let day_event = Date.parse(event.date)

        if (currentDate > day_event) {
            card += `<div  class="card-group">
            <div class="card m-1" style="width: 15rem; ">
             <img src="${event.image}" class="card-img-top p-3" style="max-height: 7vh" alt="${event.category}">
       <div class="card-body ">
         <h5 class="card-title text-center" style="min-height: 7vh;">${event.name}</h5>
         <p class="card-text text-center scroller" style="min-height: 9vh;max-height: 9vh;" >${event.description}
         </p>
         <div class="navbar card-footer ">
           <p class=" mb-0">Price U$S ${event.price}</p>
           <a href="./pages/details.html" class="btn btn-sm btn-new mt-1">More Info</a>
         </div>
       </div>
       </div>
       </div>`;



        }

    }

    return card
}


let container_card = document.getElementById("past_events");
container_card.innerHTML = create_cards(events)
