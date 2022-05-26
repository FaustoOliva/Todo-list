let limite = document.getElementsByClassName("Input")
let arrayTareas=[];
 

let agregarTarea=(titulo)=>{
let tarea
}

let elementos = [];
console.log(limite)
for (let index = 0; index < limite.length; index++) {
    elementos[index] = document.getElementById(index);
    console.log(elementos)
}


const marcar = id =>{
    const check = document.getElementById(id);
    labels = document.getElementsByClassName("form-check-label");
    label[id].classList.add('incorrecto');
}

const agregarItem = () => {
    let checkBox = document.createElement("input");
    let text = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.name = "Nuevo";
    checkBox.className = "Input";
    checkBox.id = `${elementos.length}`;
    text.textContent = document.getElementById("Input").value;
    let t = document.createTextNode(text.value);
    checkBox.appendChild(t);

    if (text.textContent === '') {
        alert("Escribí algo!");
    } else {
        document.getElementById("form").appendChild(checkBox);
        document.getElementById("form").appendChild(text);
    }
    document.getElementById("Input").value = "";

  
}


    
    console.log(check.value);
    
    
  
    








