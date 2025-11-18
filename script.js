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
   // div = document.createElement("div");
   // div.remove();
   // console.log(currentButton.id, correctButton.id);
   // if (currentButton.id == correctButton.id) {
       // console.log("Correct button");
       // div.appendChild(document.createTextNode("Correct button!"));
   // } else {
       // console.log("Incorrect button");
       // div.appendChild(document.createTextNode("Correct button!"));
   // }
}

function getButton(buttonId) {
    return document.getElementById(buttonId);
}

function checkTableButtons(noButtons) {
    correctButton = getButton(setCorrectButton(noButtons).toString());
    for (i = 1; i <= noButtons; ++i) {
        currentButton = getButton(i.toString());
        currentButton.addEventListener("click", function() {checkButton(currentButton, correctButton);});
      //  console.log(currentButtons[i]);
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