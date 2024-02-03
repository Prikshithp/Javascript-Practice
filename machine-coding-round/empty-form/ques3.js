// const form =document.querySelector("form");
// let inp1=document.querySelector("#inp1");
// let inp2=document.querySelector("#inp2");
// let h4=document.querySelector("h4");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     if(inp1.value === '' || inp2.value===''){
//         h4.textContent="error,some field are blank";
//         h4.style.color='red';
//     }
//     else{
//         h4.textContent='';
//     }
// })

// Optimized Solution
const form=document.querySelector("form");
const input=document.querySelectorAll('input[type="text"]'); //Nodelist -> array 
console.log(input);
const h4=document.querySelector("h4");

form.addEventListener('submit',function(e){
e.preventDefault();
    for(let i = 0;i<input.length;i++){
        if(input[i].value.trim() ===""){
            h4.textContent="lkjdssd";
            h4.style.color='red';
            /* break; */
        }
    }
})
