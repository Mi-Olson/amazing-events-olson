const events = {
    "currentDate": "2022-01-01",
    "events": [
        {
            _id: 1,
            "image": "./assets/img/Food_Fair.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            _id: 2,
            "image": "./assets/img/Food_Fair.jpg",
            "name": "Korean style",
            "date": "2022-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            _id: 3,
            "image": "./assets/img/Museum_Tour.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            _id: 4,
            "image": "./assets/img/Museum_Tour.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            _id: 5,
            "image": "./assets/img/Costume_Party.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            _id: 6,
            "image": "./assets/img/Costume_Party.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            _id: 7,
            "image": "./assets/img/Music_Concert.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            _id: 8,
            "image": "./assets/img/Music_Concert.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            _id: 9,
            "image": "./assets/img/Marathon.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Soccer field",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            _id: 10,
            "image": "./assets/img/Marathon.jpg",
            "name": "15K NY",
            "date": "2022-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            _id: 11,
            "image": "./assets/img/Marathon.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            _id: 12,
            "image": "./assets/img/Marathon.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            _id: 13,
            "image": "./assets/img/Cinema.jpg",
            "name": "Batman",
            "date": "2021-3-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            _id: 14,
            "image": "./assets/img/Cinema.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
}
console.log(events.events);
showcards = (events) => {
    // console.log("uno");
    // console.log(events.events.length);
    // console.log(events.events[1].name);
    for (let i = 0; i < events.events.length; i++) {
        const div = document.createElement("div");

        div.innerHTML = `<div class="card m-1" style="width: 15rem;">
            <img src="${events.events[i].image}" class="card-img-top p-3" alt="${events.events[i].category}">
            <div class="card-body">
              <h5 class="card-title text-center" style="min-height: 7vh;background-color:green;">${events.events[i].name}</h5>
              <p class="card-text text-center" style="min-height: 11vh;background-color:green;" >${events.events[i].description}
              </p>
              <div class="navbar">
                <p>Price U$S ${events.events[i].price}</p>
                <a href="./details.html#card-one" class="btn btn-sm btn-new">Go Details</a>
              </div>
            </div>
            </div>`;


        // const app = document.createElement("div"); // <div></div>

        let card = document.getElementById("mixCards"); //NO OLVIDAR EL DOCUMENT

        card.appendChild(div)

    }
}
showcards(events);
