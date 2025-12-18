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
    console.log("current button:", currentButton, "correct button:", correctButton);
    // ...
}

function checkTableButtons(noButtons) {
    correctButtonId = setCorrectButton(noButtons);
    for (let i = 1; i <= noButtons; ++i) { // daca nu as mai pune let si as lasa doar i atunci pentru fiecare buton apasat se va afisa valoarea n + 1
        document.getElementById(i.toString()).addEventListener("click",
            function() {
                checkButton(i, correctButtonId);
        });   
    }
}

function generateTableAndButtons(noButtons) {
    divTable = document.createElement("div");
    table = document.createElement("table");
    tableBody = document.createElement('tbody');
    buttonsCounter = 0;
    for (var i = 1; i <= 10 && buttonsCounter < noButtons; ++i) {
        row = document.createElement("tr");
        for (var j = 1; j <= 10 && buttonsCounter < noButtons; ++j) {
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
    divTable.appendChild(table);
    document.body.appendChild(divTable);
    checkTableButtons(noButtons);
}
