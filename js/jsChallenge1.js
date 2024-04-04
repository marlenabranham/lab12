document.querySelector("#subscribe").addEventListener("click", function(){
    console.log("Subscribed");

    if(this.checked){
        document.querySelector("#emailDiv").style.display = "block";
    }

    else{
        document.querySelector("#emailDiv").style.display = "none";
        console.log('else statement');
    }
});
document, addeventstener("click", function(){
    let currentTime= new Date();
    alert(new Date());
});