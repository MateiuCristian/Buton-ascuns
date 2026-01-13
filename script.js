function getText(id) {
    return Number(document.getElementById(id).value);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setCorrectButton(noButtons) {
    return getRandomInt(1, noButtons);
}

function checkButton(currentButton, correctButton) {
    let divOutput = document.createElement("div");
    if (currentButton == correctButton) {
        divOutput.appendChild(document.createTextNode("Button " + currentButton.toString() + " is correct!"));
    } else {
        divOutput.appendChild(document.createTextNode("Button " + currentButton.toString() + " is wrong!"));
    }
    document.body.appendChild(divOutput);
}

function checkTableButtons(noButtons) {
    let correctButtonId = setCorrectButton(noButtons);
    for (let i = 1; i <= noButtons; ++i) {
        document.getElementById(i.toString()).addEventListener("click",
            function() {
                checkButton(i, correctButtonId);
        });   
    }
}

function generateTableAndButtons(noButtons) {
    let divTable = document.createElement("div");
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    let buttonsCounter = 0;
    for (let i = 1; i <= 10 && buttonsCounter < noButtons; ++i) {
        let row = document.createElement("tr");
        for (let j = 1; j <= 10 && buttonsCounter < noButtons; ++j) {
            let col = document.createElement("td");
            let colButton = document.createElement("button");
            ++buttonsCounter;
            colButton.id = buttonsCounter.toString();
            colButton.className = "btn btn-primary";
            colButton.textContent = buttonsCounter;
            col.appendChild(colButton);
            row.appendChild(col);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    divTable.appendChild(table);
    document.body.appendChild(divTable);
}

function clickFunc(noButtons) {
    generateTableAndButtons(noButtons);
    checkTableButtons(noButtons);
}
