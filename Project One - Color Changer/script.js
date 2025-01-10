const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")
// console.log(body);
// console.log(buttons);

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id == "green"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "yellow"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "red"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "grey"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "violet"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "aqua"){
            body.style.backgroundColor = event.target.id;
        }
    })
});