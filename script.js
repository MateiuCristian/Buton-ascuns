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
    console.log(currentButton); 
    console.log(correctButton);
    // ...
}

function getButton(buttonId) {
    return document.getElementById(buttonId);
}

function checkTableButtons(noButtons) {
    correctButton = getButton(setCorrectButton(noButtons).toString());
    currentButtons = new Array(noButtons + 1);
    for (i = 1; i <= noButtons; ++i) {
        currentButtons[i] = getButton(i.toString());
        currentButtons[i].addEventListener("click", function() {checkButton(currentButtons[i], correctButton);});
    }
}

function generateTableAndButtons(noButtons) {
    table = document.createElement("table");
    tableBody = document.createElement('tbody');
    buttonsCounter = 0;
    for (i = 1; i <= 10 && buttonsCounter < noButtons; ++i) {
        row = document.createElement("tr");
        for (j = 1; j <= 10 && buttonsCounter < noButtons; ++j) {
            col = document.createElement("td");
            colButton = document.createElement("button");
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
    document.body.appendChild(table);
    checkTableButtons(noButtons);
}
