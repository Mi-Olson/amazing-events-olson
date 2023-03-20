const API_URL = "https://mindhub-xj03.onrender.com/api/amazing";
let filter_past = []
let filter_up = []
let event_past_percentage = []
let event_up_percentage = []

let container_one = document.getElementById("row_one")
let container_two = document.getElementById("row_two")
let container_three = document.getElementById("row_three")

const getEvents = async () => {
  try {
    const get_events = await fetch(API_URL);
    events = await get_events.json();


    current_day = await Date.parse(events.currentDate)

    filter_past = await events.events.filter((ev) => (current_day > Date.parse(ev.date)))
    filter_up = await events.events.filter((ev) => (current_day <= Date.parse(ev.date)))

    let event_past = await events_percentage(filter_past)
    let event_up = await events_percentage(filter_up)

    event_past_percentage = await sort_events(event_past)
    event_up_percentage = await sort_events(event_up)
    container_one.innerHTML = await create_row_one()
    container_two.innerHTML = await create_row(event_up_percentage)
    container_three.innerHTML = await create_row(event_past_percentage)



    console.log(event_past_percentage);
    console.log(event_up_percentage);

  }
  catch (e) {
    console.log("Error status", e);
  }

};
getEvents();
function events_percentage(array) {

  let even_new = []


  for (eve of array) {


    if (eve.assistance != undefined) {

      even_new.push({
        id: eve._id,
        name: eve.name,
        capacity: eve.capacity,
        assistance: eve.assistance,
        category: eve.category,
        percentage: (new Intl.NumberFormat("en", {
          style: "percent",
          maximumFractionDigits: 2
        }).format((eve.assistance / eve.capacity))),
        revenues: (eve.price * eve.assistance)
      })

    }
    else {
      even_new.push({
        id: eve._id,
        name: eve.name,
        capacity: eve.capacity,
        assistance: eve.estimate,
        category: eve.category,
        percentage: (new Intl.NumberFormat("en", {
          style: "percent",
          maximumFractionDigits: 2
        }).format((eve.estimate / eve.capacity))),
        revenues: (eve.price * eve.estimate)
      })
    }

  }
  return even_new
}

function sort_events(array) {
  let event_past_sort = array.sort(function (a, b) {
    if (a.percentage > b.percentage) {
      return 1;
    }
    if (a.percentage < b.percentage) {
      return -1;
    }
    return 0;
  })

  return event_past_sort
}

function create_row_one() {
  let max_event_past_percentage = event_past_percentage.reverse().slice(0, 3)
  let min_event_past_percentage = event_past_percentage.slice(0, 3)
  let sort_capacity = (event_past_percentage.sort((a, b) => a.capacity - b.capacity)).reverse().slice(0, 3)



  let row_table = ``

  for (let i = 0; i < 3; i++) {

    row_table += `
    <tr >
          
    <td>  ${max_event_past_percentage[i].name}          ${max_event_past_percentage[i].percentage}</td>
    <td>  ${min_event_past_percentage[i].name}          ${min_event_past_percentage[i].percentage}</td>
    <td>  ${sort_capacity[i].name}  capacity:         ${sort_capacity[i].capacity}</td>
  </tr>
  `;


  }
  return row_table

}

function create_row(array_1) {
  let all_categories = new Set((array_1.map(eve => eve.category)).sort())

  let row_table = ``

  for (let cat of all_categories) {
    let sum_cat = 0
    let asis_cat = 0
    let cap_cat = 0
    let porc = 0
    for (let eve of array_1) {
      if (cat == eve.category) {
        sum_cat += eve.revenues
        cap_cat += eve.capacity

        asis_cat += eve.assistance


      }

    }
    porc = (new Intl.NumberFormat("en", {
      style: "percent",
      maximumFractionDigits: 2
    }).format((asis_cat / cap_cat)))


    row_table += `
    <tr >
    <td>  ${cat}               </td>
    <td>   $   ${sum_cat}      </td>
    <td>    ${porc}            </td>
  </tr>
    `;

  }
  return row_table

}

