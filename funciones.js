let arrayWorks = [];
let id = 0;

let refresh = () => {
    let ul = document.getElementById("listWorks")
    document.getElementById("listWorks").innerHTML = "";

    for (let index = 0; index <= arrayWorks.length; index++) {
        if (arrayWorks[index].status) {
            ul.innerHTML += `
                <li><input class="Input" type="checkbox" onclick="through('${arrayWorks[index].idCheck}')" id="${arrayWorks[index].idCheck}">
                <label class="form-check-label incorrecto" for="defaultCheck1" id="${arrayWorks[index].idLabel}">
                ${arrayWorks[index].textContent}
                </label></input>
                </li>
                `
        } else {
            ul.innerHTML += `<li><input class="Input" type="checkbox" onclick="through('${arrayWorks[index].idCheck}')" id="${arrayWorks[index].idCheck}">
                <label class="form-check-label" for="defaultCheck1" id="${arrayWorks[index].idLabel}">
                ${arrayWorks[index].textContent}
                </label></input>
                </li>`
        }
    }
}

const through = (idC) => {
    arrayWorks[idC].status = true;
    idC = parseInt(idC) + 1;
    document.getElementById(idC).className += " incorrecto";
}

const addItem = () => {
    let label = document.createElement("label");
    label.textContent = document.getElementById("addText").value;

    if (label.textContent === '') {
        alert("Escribí algo!");
    } else {
        let work = {
            idCheck: id,
            idLabel: id + 1,
            textContent: label.textContent,
            status: false
        }
        arrayWorks.push(work);

        let ul = document.getElementById("listWorks");
        ul.innerHTML += `
        <li><input class="Input" type="checkbox" onclick="through('${work.idCheck}')" id="${work.idCheck}">
        <label class="form-check-label" for="defaultCheck1" id="${work.idLabel}">
        ${label.textContent}
        </label></input>
        </li>
        `
        console.log(arrayWorks)
        id = id + 1;
        refresh();
    }

}