// let eventmode=document.querySelector("#click");
// let currmode="white";

// eventmode.addEventListener("click", ()=>{
//     if(currmode==="white"){
//         currmode="black";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else if (currmode==="black"){
//                currmode="red";
//         document.querySelector("body").style.backgroundColor="red";

//     }else{
//         currmode="white";
//         document.querySelector("body").style.backgroundColor="white";
//     }

// })

// let eventmode=document.querySelector("#click");
// let circule=document.querySelector(".circule")
// let currmode="white";

// eventmode.addEventListener("click",()=>{
//     if(currmode==="white"){
//         currmode="black";
//         circule.style.backgroundColor="black"
//     }else if(currmode==="black"){
//         currmode="red";      
//         circule.style.backgroundColor="red";
//     }
//     else{
//         currmode="white";
//         circule.style.backgroundColor="white";
//     }
// })


let carlight=document.querySelector(".carlight");
let light=document.querySelector(".light");
let currmode="white";

carlight.addEventListener("click",()=>{
    if(currmode==="white"){
        currmode="black";
        light.style.backgroundColor="yellow"
        light.style.boxShadow="3px 3px 74px yellow,5px 5px 42px yellow" ;
    }
    else{
        currmode="white";
        light.style.backgroundColor="white";
    }
})
