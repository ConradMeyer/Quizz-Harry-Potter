const cuestionario = [
    {
        preguntas: "¿Quien regaló a Harry su primera escoba voladora?" ,
        respuestas: ["Dumbledore", "Sirius Black", "Profesora McConaghan", "Hermione"],
        respuestaCorrecta: 2
    },
    {
        preguntas: "¿Quién vigila la entrada a la sala común de Gryffindor?" ,
        respuestas: ["La dama Gris", "Nick Casidecapitado", "El barón sangriento", "La señora gorda"],
        respuestaCorrecta: 3
    },
    {
        preguntas: "¿Quién robó las cartas de Harry al comienzo de 'Harry Potter y la cámara secreta'?" ,
        respuestas: ["Dumbledore", "Draco Malfoy", "Dobby", "Los dursley"],
        respuestaCorrecta: 2
    },
    {
        preguntas: "¿Cómo se llama el gato de Filch?" ,
        respuestas: ["Ser Pounce", "Botón de oro", "La señora Norris", "Jones"],
        respuestaCorrecta: 2
    },
    {
        preguntas: "¿Los tres tipos de bolas que se utilizan en Quidditch son Bludgers, Snitches y ...?" ,
        respuestas: ["Quaffles", "Wiffles", "Boccis", "Foozles"],
        respuestaCorrecta: 0
    },
    {
        preguntas: "¿Qué le da la Sra. Weasley a Harry por Navidad todos los años?" ,
        respuestas: ["Grajeas de todos los sabores de Bertie Bott", "Ranas de chocolate", "Un pastel de frutas", "Un nuevo suéter"],
        respuestaCorrecta: 3
    },
    {
        preguntas: "¿Cuáles son los nombres de los dos compinches de Draco Malfoy?" ,
        respuestas: ["Huggs y Pucey", "Flint y Boyle", "Crabbe y Goyle", "Lucio y Zabini"],
        respuestaCorrecta: 2
    },
    {
        preguntas: "¿¿Dónde se encuentra el ejército de Dumbledore en 'Harry Potter y la Orden del Fénix'?" ,
        respuestas: ["La sala de los Menesteres", "La sala común de Gryffindor", "Casa de Hagrid", "La casa de los gritos"],
        respuestaCorrecta: 0
    },
    {
        preguntas: "¿Quién le ha dado a Harry Potter la capa de invisibilidad?" ,
        respuestas: ["Moody", "Dumbledore", "Snape", "Dobby"],
        respuestaCorrecta: 1
    },
    {
        preguntas: "¿Cuál de estos NO es una de las maldiciones imperdonables?" ,
        respuestas: ["Maldición Cruciatus", "Avada Kedavra", "Maldición Imperius", "Sectum Sempra"],
        respuestaCorrecta: 3
    },
    {
        preguntas: "¡ENHORABUENA JOVEN MAGO! Has conseguido superar todas las preguntas, sin duda eres un verdadero orgullo para HOGWARTS" ,
        respuestaCorrecta: 5,
        respuestas: []
    }
]

let i = 0;

// FUNCION PARA PINTAR LAS PREGUNTAS Y RESPUESTAS
function pintarPregunta(posicion){
    const objeto = cuestionario[posicion];
    const respuestaCorrecta = objeto.respuestaCorrecta;     
    let respuestas = objeto.respuestas;
    
    var cajaPreguntas = document.createElement("div")
    cajaPreguntas.className = "cajaPreguntas"
    
    var cajaRespuestas =document.createElement("div") 
    cajaRespuestas.className = "cajaRespuestas"
    

    let preguntaPintada = document.createElement("h2")
    preguntaPintada.innerText = objeto.preguntas
    cajaPreguntas.appendChild(preguntaPintada)

    const respuestaPintadaArray = respuestas.map( (respuestaActual, i) => {
       let h3 = document.createElement("h3")
       h3.innerText = respuestaActual 
       h3.setAttribute("class", "color"+i)
       cajaRespuestas.appendChild(h3)
       h3.addEventListener("click", () => evaluarRespuesta(i, respuestaCorrecta, h3))
    })
    

    document.querySelector(".contenedor").appendChild(cajaPreguntas)
    document.querySelector(".contenedor").appendChild(cajaRespuestas)
}

pintarPregunta(i)

// FUNCION PARA EVALUAR LAS RESPUESATAS
function evaluarRespuesta(respuesta, respuestaCorrecta, obj) {
    const h3 = obj;
    
        if (respuesta == respuestaCorrecta) {
            h3.classList.add("right")
            
            setTimeout( function(){
                let caja1 = document.querySelector(".cajaPreguntas")
                let caja2 = document.querySelector(".cajaRespuestas")
                caja1.remove()
                caja2.remove()
                caja2.classList.remove("cajaRespuestas")
                pintarPregunta(++i)}, 700)
                
            } else {
                h3.classList.add("wrong")
                
                setTimeout( function(){
                    let wrong = document.querySelector(".wrong")
                    wrong.classList.remove("wrong")
                }, 700)
                
                
            }
        }
        
        
let btnReinicio = document.querySelector(".btn");
        
btnReinicio.addEventListener("click", () => window.location.reload());
        
        // ---------------------- TEMPORIZADOR ------------------------
        
window.onload = updateClock;

var totalTime = 60;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if(totalTime==0){

    window.alert("OH, VAYA..., SE TE HA AGOTADO EL TIEMPO ¡TENDRÁS QUE SER MÁS RAPIDO LA PROXIMA VEZ!")
    setTimeout(function(){
        window.location.reload();
    }, 1000)
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}
