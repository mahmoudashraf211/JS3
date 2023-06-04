let addButton = document.getElementById("AddButton").addEventListener("click", addRow);
let taskTable = document.getElementById("taskTable");
let addTaskInput = document.querySelector("#AddTask");


let SortingButton = document.querySelector(".sortingButton");
let DeleteButton = document.getElementsByClassName("deletingButton");
let sortingbuttontd = document.getElementById("sortingbuttontd");
let removebuttontd = document.getElementById("removebuttontd");
//removebuttontd.addEventListener("click",remove(this));
let EditButtonTd = document.getElementById("EditButtonTd");
let EditingButton = document.getElementsByClassName("EditButtonClass");


let tableBody = document.getElementById("tableBody");
let EditingDiv = document.getElementById("editingdiv");
let cancelButton = document.getElementById("CacelButton");
cancelButton.addEventListener("click",cancel);
function cancel(){
  EditingDiv.style.display='none';

}
let Priority = document.getElementById("priorityList");
Priority.addEventListener("change",changingoption);

let counter = 1 ;
let identificationCounter = document.getElementById("IdentificationValue");

function EditFunction(){

EditingDiv.style.display='flex';

};

function deleteRow(el){
    let tbl = el.parentNode.parentNode.parentNode;
    let row = el.parentNode.parentNode.rowIndex;

    tbl.deleteRow(row);
};

function changingoption(){
this.value;
};

function addRow() {
  counter+=1;
  let IdentificationValueDisplay = IdentificationValue.value=parseInt(counter);
  let taskName = addTaskInput.value;
  let sortingbutton = sortingbuttontd.innerHTML;
  let removebutton = removebuttontd.innerHTML;
  let priority = Priority.value;
  let editingbuttoncell = EditButtonTd.innerHTML;
  let template = `
    <tr>
      <td>${IdentificationValueDisplay}</td>
      <td>${taskName}</td>
      <td>${priority}</td>
      <td>${sortingbutton}</td>
      <td>${removebutton}</td>
      <td>${editingbuttoncell}</td>
    </tr>
                 `;
  tableBody.innerHTML += template;
  
}
