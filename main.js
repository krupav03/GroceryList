let gContainer = document.getElementById("gItemsContainer");
let addButton = document.getElementById("addButton");

let gList = [
  {
    text: "Milk Bread",
    uniqueNo: 1,
  },
  {
    text: "Britania Biscuits",
    uniqueNo: 2,
  },
  {
    text: "Corn Flour",
    uniqueNo: 3,
  },
];

let gCount = gList.length;

function ongStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  labelElement.classList.toggle("checked");
}

function onDeleteTodo(gId) {
  let gElement = document.getElementById(gId);

  gContainer.removeChild(gElement);
}

function createAndAppendg(g) {
  let gId = "g" + g.uniqueNo;
  let checkboxId = "checkbox" + g.uniqueNo;
  let labelId = "label" + g.uniqueNo;

  let gsElement = document.createElement("li");
  gsElement.classList.add("g-item-container", "d-flex", "flex-row");
  gsElement.id = gId;
  gContainer.appendChild(gsElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function () {
    ongStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  gsElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  gsElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = g.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(gId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let g of gList) {
  createAndAppendg(g);
}

function onAddg() {
  let userInputElement = document.getElementById("gUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  gCount = gCount + 1;

  let newG = {
    text: userInputValue,
    uniqueNo: gCount,
  };

  createAndAppendg(newG);
  userInputElement.value = "";
}

addButton.onclick = function () {
  onAddg();
};
