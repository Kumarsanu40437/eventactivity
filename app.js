let sanu=document.querySelector("form");
sanu.addEventListener("submit",function(event){
    event.preventDefault();
});
    let user=document.querySelector("#user");
    //let pass=document.querySelector("#pass");
    user.addEventListener("change",function(){
       console.log("input changed");
       console.log("final value=",this.value )
    } );
