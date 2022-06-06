let user=JSON.parse(localStorage.getItem("user"))
user.map(function(el,index){
    let wallet_balance=document.getElementById("wallet_balance")
    wallet_balance.innerText=el.amount;
   // var totalbal=el.amount;
    
})


const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
async function getData(){
    try{
        let res=await fetch(url)
        let allvau=await res.json()
        console.log(allvau[0])
        showdata(allvau[0])

    }
    catch(error){
        console.log("error",error)
    }
   

}
getData()
let purchaseee=JSON.parse(localStorage.getItem("purchase")) ||[]
async function showdata(data){
    for(var i=0;i<data.vouchers.length;i++){

        let voucherdiv=document.getElementById("voucher")
        let div=document.createElement("div")
        let name=document.createElement("h2")
        name.innerText=data.vouchers[i].name
        let image=document.createElement("img")
        image.src=data.vouchers[i].image;
        let price=document.createElement("h2")
        price.innerText=data.vouchers[i].price;

        let btn=document.createElement("button")
        btn.innerText="Buy"
        btn.addEventListener("click",function(){
            addVaucher(name,image,price)
        })

    
        div.append(image,name,price,btn)
        voucherdiv.append(div)

    }
    //dataaa.forEach(function(ell){
        
        

    
   
    

}
//showdata(data)

function addVaucher(name,image,price){
    console.log(name,image,price)
    purchaseee.push(name.innerText,image.src,price.innerText)
    localStorage.setItem("purchase",JSON .stringify(purchaseee))
    if(user.amount<price.innerText){
        alert("Your Balance low")
    }
    else
    {
        alert("You yor perchage") 
        

    }


}



