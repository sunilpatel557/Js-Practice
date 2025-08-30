
// let h1 =document.querySelector("h1");

// function changeColor(color , delay , nextColorChange){
//  setTimeout( ()=>{
//      h1.style.backgroundColor = color;
//        if(nextColorChange) nextColorChange();
//  },delay);
   
// }

// changeColor("red" , 1000 , ()=>{
//    changeColor("blue" , 1000 , ()=>{
//      changeColor("yellow" , 1000);
//    });  
// });







// function savetoDb(data , success , failure){
//      let internetSpeed =Math.floor(Math.random()*10)+1;
//      if(internetSpeed >4){
//           success();
//      }else{
     
//           failure();
//      }
// }

// savetoDb("apna collage" , ()=>{
//      console.log(" success: your data was saved ");

//      savetoDb("hello world" , ()=>{
//           console.log("succes2 data2 saved ");

//           savetoDb("hello sunil" ,()=>{
//                console.log("success3  data3 saved");
//           },()=>{
//                console.log("faliure3 data3 not saved")
//           })
//      },()=>{
//           console.log("faliure2 data2 not saved");
//      })

// }, ()=>{
//      console.log(" faliure: weak connection, data not saved");
// });


function savetoDb(data){
    
     return new Promise((resolve , reject)=>{
       
          let internetSpeed =Math.floor(Math.random()*10)+1;
          if(internetSpeed > 4){
              resolve("succes data saved"); 
          }else{
               reject("faliure weak connection"); 
          }
     });
      
 }

//  let request = savetoDb();

//  request
//  .then(()=>{
//      console.log("promise was resolivd");
//      console.log(request);
//  })

//  .catch(()=>{
// console.log("promise was rejected");
// console.log(request);
//  });

savetoDb("apna college").then((result)=>{
   console.log("data1 saved promise was resolivd");
   console.log("result of promise" , result);
   return savetoDb("hello world")
})

.then((result)=>{
     console.log("data2 saved"); 
     console.log("result of promise " , result)
     return savetoDb("hello world")
})

.then((result)=>{
     console.log("data3 saved");
     console.log("result of promise", result) 
})

.catch((error)=>{
     console.log("promise was rejectd");
     console.log("error of promise", error);
})




