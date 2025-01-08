const buttons = document.querySelectorAll('.button')//saare buttons ko select kiya 
// console.log(buttons)
const body = document.querySelector('body') //fir page ki puri body ko select kiya

buttons.forEach(function(button) { //saare button p for each loop laga diya jisse ek baar mein hi,event chalasake
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target); //selection of target id from the events
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;}
        
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;}
        
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id;}
           
    });
});