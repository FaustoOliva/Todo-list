function agregarItem() {
    let limite = document.getElementsByClassName("Input")
    let elementos= [];
    console.log(limite)
    for (let index = 0; index < limite.length; index++) {
        elementos[index] = document.getElementById(index);
        console.log(elementos)
    }
    
    let checkBox = document.createElement("input");
    let text = document.createElement("label");
    checkBox.type="checkbox";
    checkBox.name="Nuevo";
    checkBox.className="Input";
    checkBox.id=`${elementos.length}`;
    text.textContent=document.getElementById("Input").value;
    let t = document.createTextNode(text.value);
    checkBox.appendChild(t);
   
    if (checkBox.value === '') {
        alert("Escribí algo!");
    } else {
        document.getElementById("form").appendChild(checkBox);
        document.getElementById("form").appendChild(text);
    }
    document.getElementById("Input").value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}



