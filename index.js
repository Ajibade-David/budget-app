var itemArr = [];

function addItem() {
  if (itemName.value != "" && itemPrice.value != "") {
var  items ={
  itemsName :itemName.value,
  itemsPrice: itemPrice.value,
}
itemArr.push(items)
    itemName.value = "";
    itemPrice.value = "";
    document.getElementById("showEmptyErrorMessage").style.display = "none";
    document.getElementById("allButtons").style.display = "block";
    displayItems();
  } else {
    document.getElementById("showEmptyErrorMessage").style.display = "block";
  }
}
function editItems() {
  var newIndex = editedIndex.value;
  var newStudent = editedDetails.value;
  if (editedIndex.value != "" && editedDetails.value != "") {
    if (itemArr.length > newIndex - 1) {
      itemArr.splice(newIndex - 1, 1, newStudent);
      displayItems();
    }
  } else {
    getElementById("showErrorMessage").style.display = "block";
    displayItems();
  }
}
function deleteFirstItem() {
  itemArr.shift();
  displayItems();
}
function deleteLastItem() {
  itemArr.pop();
  displayItems();
}
function deleteSpecificItem() {
  var startingIndex = Number(prompt("Enter a starting position"));
  var numberOfItems = Number(prompt("Enter number of items to delete"));
  itemArr.splice(startingIndex - 1, numberOfItems);
  // console.log( itemArr);
  displayItems();
}
function addStart() {
  var itemNameEdit = prompt("Enter item Name you want to add");
  var itemPriceEdit = prompt("Enter item Price you want to add");
  // console.log(item2);
  itemArr.unshift(itemNameEdit, itemPriceEdit);
  displayItems();
}
function deleteAll() {
  var confirmation = confirm("Are you sure you want to delete all?");
  if (confirmation == true) {
    itemArr.splice(0, itemArr.length);
    displayItems();
  } else {
    displayItems();
  }
}
function displayItems() {
  document.getElementById("noStudentRegistered").style.display = "none";
  itemTable.innerHTML = `
        <tr>
        <th>S/N</th>
        <th>Item Name </th>
        <th>Item Price</th>
        <th>Actions</th>
        </tr>
        `;
  for (let i = 0; i < itemArr.length; i++) {
    //    console.log(i);
    itemTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${itemArr[i].itemsName}</td>
        <td>${itemArr[i].itemsPrice}</td>
        <td>
          <button class="btn btn-danger" onclick="deleteOne(${i})">Delete</button>
        <td>
        </tr>
        `;
  }
}
function deleteOne(index) {
  console.log(`${index}`);
  itemArr.splice(index,1)
  displayItems()
  
}