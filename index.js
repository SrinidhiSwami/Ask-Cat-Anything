document.addEventListener("DOMContentLoaded",function(){
    const container=document.querySelector(".container");
    const button=document.querySelector(".button");
    const text=document.querySelector(".text");
    const input=document.querySelector("input");
    const animatestart = () => {
        container.classList.add("animating");
        let inputText=input.value;
        button.innerHTML="+";
        text.innerHTML="";
        input.value="";
        var ting=new Audio("preview.mp3")
        setTimeout(()=>{
            ting.play();
        },700);
        setTimeout(()=>{
            text.innerHTML="Cat is Pondering your question..."
        },3300);
        setTimeout(()=>{
            text.innerHTML="Cat has an answer"
        },11300);
        setTimeout(()=>{
            text.innerHTML="Cat will speak now"
        },13300);
        var meow=new Audio("meow.mp3");
        setTimeout(()=>{
            fetch('http://127.0.0.1:5000/ask',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({val:inputText})
            }).then(response=>response.json())
            .then(data=>{
                text.innerHTML=data.answer;
                meow.play();
            }).catch(error => {
                console.error("Fetch error:", error);
                text.innerHTML = "Cat got confused 😿";
            });
        },14800);
        setTimeout(()=>{
            text.innerHTML="";
        },16000);
        setTimeout(()=>{
            button.innerHTML="Ask Cat";
        },19000);
    }
    
    input.addEventListener("keydown",function(event){
        if(event.key=="Enter")
        {
            animatestart();
        }
    })
    button.addEventListener("click",animatestart);
    function reset(){
        text.innerHTML = "Ask Cat A Yes or No Question";
        container.classList.remove("animating");
    }
    const tryAgain=document.querySelector(".try-again");
    tryAgain.addEventListener("click", reset);
})
document.addEventListener("keydown", function (event) {
    const tryAgain = document.querySelector(".try-again");
    if (event.key === "Enter" && window.getComputedStyle(tryAgain).opacity === "1") {
        location.reload();
    }
});