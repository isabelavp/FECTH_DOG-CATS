const inputText = document.querySelector("input");
const containerTitle = document.getElementById("title");
const containerYear = document.getElementById("year");
const containerRunTime = document.getElementById("runtime");
const containerImage = document.getElementById("img");

//evento como no hay boton el evento se hace en el input

inputText.addEventListener("keypress", (event) =>{  //el evento event se coloca el nombre que quiera
 let key = event.which	|| event.keyCode; //which y keycode son eventos del teclado y reconocen el codigo de la tecla que estamos usando
 if(key === 13) { //codigo 13 es enter 
  let movie = inputText.value;
  console.log(movie);
  inputText.value = "";

  //en fetch se coloca la pagina de la api omdbapi, despues del signo de interrogacion se coloca t=$(se coloca la variable donde esta el valor del input )y se cierra con &

  //y en apikey=coloco la clave que me enviaron, fetch no lleva punto y coma
  fetch("http://www.omdbapi.com/?t=$(movie)&apikey=a2f36397")
  //el response.json es una promesa, que me va a mandar la informacion que necesito  si la respuesta es correcta
  .then(response => response.json())
  .then(data => {
  	console.log(data);
  	renderInfo(data);
  })

 }
})

const renderInfo = data =>{
	containerTitle.innerHTML = data.Title;
	containerYear.innerHTML = data.Year;
	containerRunTime.innerHTML = data.RunTime;
	containerImage.innerHTML = "<img src="${data.Poster}">";

}