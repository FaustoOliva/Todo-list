let arrayTareas = [];
let cant = 0;


const marcar = id => {
    id = parseInt(id);
    const check = document.getElementById(id).value;
    cant.toString();
    console.log(id)
    if (check === "on") {
        document.getElementById(id+1).style.textDecoration = 'line-through';
    } 

}

const agregarItem = () => {
    let limite = document.getElementsByClassName("Input")
    let elementos = [];
  
    console.log(limite)
    console.log(limite.length)
    for (let index = 0; index < limite.length; index++) {
        elementos[index] = document.getElementById(index);
        console.log(elementos)
        cant = cant + 1;
    }

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "Input";
    checkBox.id = `${elementos.length+1}`;
  
    arrayTareas.push(checkBox);
  
    let label = document.createElement("label");
    label.textContent = document.getElementById("Input").value;
    let t = document.createTextNode(label.value);
    label.id = cant+2;
    checkBox.appendChild(t);

    if (label.textContent === '') {
        alert("Escribí algo!");
    } else {
        document.getElementById("form").appendChild(checkBox);
        document.getElementById("form").appendChild(label);
    }
    checkBox.addEventListener('click',() => {
        marcar(cant+1)
    });
}