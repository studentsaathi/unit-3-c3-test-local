let user=JSON.parse(localStorage.getItem("user"))
user.map(function(el,index){
    let wallet_balance=document.getElementById("wallet_balance")
    wallet_balance.innerText=el.amount;
})


let data=JSON.parse(localStorage.getItem("purchase"))


let purchased_vouchers=document.getElementById("purchased_vouchers")
let div=document.createElement("div")
let name=document.createElement("h2")
name.innerText=data[0];
let image=document.createElement("img")
image.src=data[1];
let price=document.createElement("h2")
price.innerText=`price :-${data[2]}`
div.append(image,name,price)
purchased_vouchers.append(div)