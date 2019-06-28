

document.getElementById('mainForm').addEventListener("submit",function(event){
  event.preventDefault();
    let name = event.target.name.value;
    let amount = event.target.amount.value;
    
    addItem(name, amount);
    total();
    event.target.name.innerText = "";
});

document.getElementsByClassName('trashcan');


function total(){
let total = parseInt(document.getElementById('total').innerText); 
let list = document.querySelectorAll('.itemPrice');
console.log(parseInt(list[0].innerText));
let  looptotal = 0;
for(let i = 0; i < list.length; i++){
  looptotal += parseFloat(list[i].innerText);
  console.log(looptotal);
}
document.getElementById('total').innerText =looptotal;
}

function addItem(name, amount){
 let ulList =  document.getElementById('ulList');
let newLi = document.createElement('li');
newLi.className = "listItem";
newLi.innerHTML = `<span class="itemTitle">${name}</span> <span id="trash" class="itemPrice">${amount}</span> <a><span class="trashcan"></a></span>`;
ulList.appendChild(newLi);
}






