let add=document.querySelector("#add");
let remove=document.querySelector("#remove");
let input=document.querySelector("input");
let li;
let ul=document.querySelector("ul");
add.addEventListener("click",function(){
    if(input.value.trim()=== ''){}
    else{
        li=document.createElement("li");
        li.textContent=input.value;
        ul.appendChild(li);
        input.value="";
    }
})

remove.addEventListener("click",function(){
    ul.removeChild(li);
})
