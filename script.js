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

function generateTable(noButtons) {
    let table = document.createElement("table");
    let tableRow = 0;
    for (let buttonId = 1; buttonId <= noButtons; ++buttonId) {
        if (buttonId % 10 == 1) {
            tableRow = table.insertRow();
        }
        let newCell = tableRow.insertCell();
        let newButton = document.createElement('button');
        newButton.id = buttonId.toString();
        newButton.className = 'btn btn-primary';
        newButton.textContent = buttonId;
        newCell.appendChild(newButton);
    }
    document.body.appendChild(table);
}

function clickFunc(noButtons) {
    generateTable(noButtons);
    checkTableButtons(noButtons);
}
