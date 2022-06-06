let user=JSON.parse(localStorage.getItem("user"))
user.map(function(el,index){
    let wallet_balance=document.getElementById("wallet_balance")
    wallet_balance.innerText=el.amount;
})


let data=JSON.parse(localStorage.getItem("purchase"))
data.map(function(ell,index){
    let purchased_vouchers=document.getElementById("purchased_vouchers")
let div=document.createElement("div")
let name=document.createElement("h2")
name.innerText=ell.name
let image=document.createElement("img")
image.src=ell.image
let price=document.createElement("h2")
price.innerText=`price :-${ell.price}`
div.append(image,name,price)
purchased_vouchers.append(div)

})


