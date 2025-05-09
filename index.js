const botones = Array.from(document.querySelectorAll(".btn"));

let ul = document.querySelector('.contenedor1')
let ul2 = document.querySelector('.contenedor2')
let ul3 = document.querySelector('.contenedor3')
let entrada = document.querySelector('.entrada')
let contenedor = document.querySelector('.contenedor')
let alerta=document.createElement('div')



function listas(event) {
    let id=event.target.id
    let div = document.createElement('div')
    let eliminar = document.createElement('button')
    let realizado = document.createElement('button')
    let tareas = document.createElement('p')
    div.classList.add('contarea')
    tareas.innerText = `📌 ${entrada.value}`
    entrada.value = '';
    eliminar.textContent = 'Eliminar';
    eliminar.style.marginLeft = '0.2rem'
    eliminar.classList.add('btn', 'btn-danger');
    realizado.classList.add('btn', 'btn-primary');
    realizado.textContent = 'Realizado';
    eliminar.style.fontSize = "0.8rem";
    realizado.style.fontSize = "0.8rem";
    div.style.marginTop = '1rem'
    div.appendChild(tareas)
    div.appendChild(realizado);
    div.appendChild(eliminar);
    if (id == "btn1") {
        ul.appendChild(div);
    } else if (id == "btn2") {
        ul2.appendChild(div);
    } else if (id == "btn3") {
        ul3.appendChild(div);
        realizado.remove()
    }

    eliminar.addEventListener('click', () => {
        div.remove()
    })
    realizado.addEventListener('click', () => {
        div.style.textDecoration = "line-through"
        ul3.appendChild(div)
        realizado.remove()
        
    })
}
botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        if (String(entrada.value).trim() == "") {
            
            alerta.innerHTML= '❌ No se agrego ninguna tarea </br> (tienes que escribir algo)'
            alerta.classList.add('alerta')
            contenedor.appendChild(alerta)
        } else {
            listas(event)
            alerta.remove()
        }
    })
})
