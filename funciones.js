function agregarItem() {
    let checkBox = document.createElement("input");
    let text = document.createElement("label");
    checkBox.type="checkbox";
    checkBox.name="Nuevo"
    checkBox.className="form-check"
    
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



