"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/

const btnConsultar = document.getElementById('btnConsultar');
const dominio = "https://rickandmortyapi.com";

btnConsultar.onclick = async () => {
    //Capturando el personaje que se quiere consultar
    const personaje = document.querySelector('#personaje').value;
    if(personaje == ""){
        alert("Ingrese un personaje")
    }
    

    //Consultando a la API
    const url = `${dominio}/api/character/?name=${personaje}`;
    console.log(url)

    const resp = await fetch(url);
    if(resp.ok){
      const data = await resp.json()
      const info = data.results[0]
      console.table(info); 

      let avatar = `<div id="characterCard">
                       <img id="image" src=${info.image} alt="">
                        <div id="info">
                              <p id="name">${info.name}</p>
                              <p class="species">${info.status} - ${info.species}</p>
                                 <p class="status">Last know location:</p>
                                 <li class="data">${info.location.name}</li>
                                 <p class="status">First seen in:</p> 
                                 <li class="data">${info.origin.name}</li>
                          </div>
                       </div>  
                      `
        const card = document.createElement("section")
        card.innerHTML = avatar;
        document.body.appendChild(card);

     }else{
        console.error('Response returner with errors:', info);
        throw new Error('Error al obtener el personaje')
     }

    
    
 };
 
