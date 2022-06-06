let user=JSON.parse(localStorage.getItem("user"))
 user.map(function(el,index){
    let wallet_balance=document.getElementById("wallet_balance")
   wallet_balance.innerText=el.amount;
   //var totalbal=el.amount;
    
})


const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
async function getData(){
    try{
        let res=await fetch(url)
        let allvau=await res.json()
       // console.log(allvau[0])
        
        // let aaaa=`allvau[0]`
        showdata(allvau[0])

    }
    catch(error){
        console.log("error",error)
    }
   

}
getData()
let pur=JSON.parse(localStorage.getItem("purchase")) ||[]


async function showdata(data){
    let dataff=data.vouchers
   dataff.forEach(function(ell){
    let voucherdiv=document.getElementById("voucher")
                let div=document.createElement("div")
                let name=document.createElement("h2")
                name.innerText=ell.name
                let image=document.createElement("img")
                image.src=ell.image;
                let price=document.createElement("h2")
                price.innerText=ell.price
        
                let btn=document.createElement("button")
                btn.innerText="Buy"
                btn.addEventListener("click",function(){
                    addVaucher(ell)
                })
                 
                div.append(image,name,price,btn)
                voucherdiv.append(div)
      //      console.log(ell.name)


   })
 


}


async function addVaucher(ell){
    //console.log(ell)
    //localStorage.setItem("")
    pur.push(ell)
    
   
    if(user.amount<ell.price){
        alert("Your Balance low")
    }
    else
    {
        alert("You yor perchage") 
        localStorage.setItem("purchase",JSON .stringify(pur))
        //var total=(el.amount)-(ell.price)
        //localStorage.setItem("user",JSON.stringify("amount",total))
        

    }


}

