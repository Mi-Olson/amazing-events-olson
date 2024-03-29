
let container_card = document.getElementById("past_events");
let form_categories = document.getElementById("form_categories")
let filter = document.getElementById("filter")
let search_form = document.getElementById("search_form")
let acumcat = []
let all_categories = []
// let events=[]
let filter_past = []
let screen_cards = []

let current_day = ""

const API_URL = "https://mindhub-xj03.onrender.com/api/amazing";


const getEvents = async () => {
  try {
    const get_events = await fetch(API_URL);
    const events = await get_events.json();
    current_day = await Date.parse(events.currentDate)

    filter_past = await events.events.filter((ev) => (current_day > Date.parse(ev.date)))
    all_categories = await new Set((filter_past.map(eve => eve.category)).sort())
    screen_cards = await filter_past
    container_card.innerHTML = create_cards(screen_cards)
    form_categories.innerHTML = create_FilterCategories(all_categories)



  }
  catch (e) {
    console.log("Error status", e);
  }

};
getEvents();




function create_cards(events) {
  let card = ``

  for (const event of events) {

    card += `<div  class="card-group ">
             <div class="card m-1 " style="width: 18rem; ">
              <img src="${event.image}" class="card-img-top p-3" style="max-height: 7vh" alt="${event.category}">
        <div class="card-body ">
          <h5 class="card-title text-center" style="min-height: 7vh;">${event.name}</h5>
          <p class="card-text text-center scroller " style="min-height: 9vh;max-height: 9vh;" >${event.description}
          </p>
          <div class="navbar card-footer ">
            <p class=" mb-0">Price U$S ${event.price}</p>
            <a href="./details.html?id=${event._id}" class="btn btn-sm btn-new mt-1">More Info</a>
          </div>
        </div>
        </div>
        </div>`;

  }


  return card
}



function create_FilterCategories(all_categories) {
  let cat_filt = ""
  for (const cat of all_categories) {
    console.log(cat);
    cat_filt += `
    <div class="form-check col-5 col-md-1 col-sm-1">
           
            <label class="form-check-label category_label" for="${cat}">
            <input class="form-check-input" type="checkbox" name="checkbox" value="${cat}" id="${cat}">
            ${cat}
            </label>
          </div>
    `

  }
  cat_filt += `
  <button type="submit" class="btn btn-sm btn-outline-light col-5 col-md-1 col-sm-1" id="filter">filter</button>`
  return cat_filt

}



form_categories.addEventListener('submit', (e) => {
  e.preventDefault()
  let filter_event_cat = []
  let fil = []
  acumcat = []
  fil = [e.target]

  for (let i = 0; i < all_categories.size; i++) { if (fil[0][i].checked == true) { acumcat.push(fil[0][i].id) } }

  filter_event_cat = events_filter_cat()


  if (acumcat.length == 0) {
    screen_cards = filter_past
    container_card.innerHTML = create_cards(screen_cards)

  }
  else {
    screen_cards = filter_event_cat
    container_card.innerHTML = create_cards(screen_cards)

  }

}
)

function events_filter_cat() {
  let new_fil_cat = []
  for (ev of filter_past) {
    for (let i = 0; i < acumcat.length; i++) { if (ev.category === acumcat[i]) { new_fil_cat.push(ev) } }
  }
  return new_fil_cat
}






search_form.addEventListener('submit', (e) => {
  e.preventDefault()
  let value = [e.target][0][0].value;
  console.log(value);

  let event_search_filter = screen_cards.filter((eve) => eve.name.toLowerCase().includes(value.toLowerCase()))

  if (event_search_filter.length == 0) {

    container_card.innerHTML = `<div  class="card-group ">
    <div class="card m-1 " style="width: 18rem; ">
    
    <h1>sorry, we couldn't find your event</h1>
</div>
</div>`;


  }
  else {
    container_card.innerHTML = create_cards(event_search_filter)

  }



})





