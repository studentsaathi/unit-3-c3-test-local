let Usearss=JSON.parse(localStorage.getItem("user")) ||[]
function users(n,e,a,am){
    this.name=n,
    this.email=e,
    this.address=a,
    this.amount=am
}
function userSubmit(){
   // e.preventDefault()
    let forms=document.getElementById("forms")
    let name=forms.name.value;
    let email=forms.email.value;
    let address=forms.address.value;
    let amount=forms.amount.value
    //console.log(name,email,address,amount)
    let ussear=new users(name,email,address,amount)
    Usearss.push(ussear);
    localStorage.setItem("user",JSON.stringify(Usearss))

}
//userSubmit()