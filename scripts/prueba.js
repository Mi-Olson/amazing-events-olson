
const path_=location.pathname
console.log(location.pathname);
const felicidad=document.getElementById("felicidad")
const contenedor_faroles=document.querySelectorAll("#contenedor_faroles")[0].children
console.log(contenedor_faroles);
const params_path_name=new URLSearchParams(path_)

console.log(params_path_name);

const setUserInLocalStorage = () => {
    //Acá iría la lógica asociada a esta función que además guardará info en el local storage
  
   
    localStorage.setItem("dark_mode", false)
    // {"username":"Tuki","password":"123456"}
    
}
setUserInLocalStorage()

felicidad.addEventListener("click",()=>

{
    console.log(contenedor_faroles);
    for (farol of contenedor_faroles){
        console.log([farol]);
        //  if([farol][0].toString().includes("square")){
        farol.classList.toggle("squareDay")
        //  }
    }
    // felicidad.classList.toggle("square")
    // felicidad.classList.toggle("squareDay")
    if (localStorage.getItem("dark_mode")){
        localStorage.setItem("dark_mode", true)
    }
    else{
        localStorage.setItem("dark_mode", false)

    }

    })







const getUserFromLocalStorage = () => {
    // const username = localStorage.getItem("username")
    // const password = localStorage.getItem("password")
    const dark_mode = JSON.parse(localStorage.getItem("dark_mode"));

    // console.log("username", username)
    // console.log("password", password)
    console.log("modo", dark_mode)
}
getUserFromLocalStorage()

// const usernameInLocalStorage = localStorage.getItem("username")
//  console.log("usernameInLocalStorage", usernameInLocalStorage)
//  console.log(localStorage.getItem("username"));


