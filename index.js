
document.getElementById('mainForm').addEventListener("submit",function(event){
  event.preventDefault();
    let name = event.target.name.value;
    let amount = event.target.amount.value;
    
    addItem(name, amount);
    total();
    clear();
});

function clear(){
  document.querySelectorAll('input')[0].value = "";
  document.querySelectorAll('input')[1].value = "";
}

document.getElementsByClassName('trashcan');


function total(){

let list = document.querySelectorAll('.itemPrice');
let  looptotal = 0;
for(let i = 0; i < list.length; i++){
  looptotal += parseFloat(list[i].innerText);
}
document.getElementById('total').innerText = looptotal;
}

function addItem(name, amount){
  let ulList =  document.getElementById('ulList');
  let newLi = document.createElement('li');
  newLi.className = "listItem";
  let itemTitle = document.createElement('span');
  itemTitle.className = "itemTitle";
  itemTitle.innerHTML = `${name}`;
  let money = document.createElement('span');
  money.className = "money";
  money.innerText = "$";
  let itemPrice = document.createElement('span');
  itemPrice.className = "itemPrice";
  itemPrice.innerHTML = `${amount}`;
  let trashcan = document.createElement('span');
  trashcan.className = "trashcan";
  let a = document.createElement('a');
  a.appendChild(trashcan);
  a.addEventListener("click", function(e) {
    newLi.parentNode.removeChild(newLi);
    total();
  });
  newLi.appendChild(itemTitle);
  newLi.appendChild(money);
  newLi.appendChild(itemPrice);
 
  newLi.appendChild(a);
  ulList.appendChild(newLi);
}






