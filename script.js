//  const btn=document.querySelectorAll(".box");
// // btn.forEach((box)=>{
// //    // console.log(box);
// //     box.addEventListner=("click",()=>{
// //        //const pchoice=btn.getAttribute("id");
// //        //console.log('${name} was clicked');
// //        console.log("choice was clicked");
// //        //playerGame(pchoice);
// // });
// // });
// const ro=document.querySelector("#rock");
// console.log("enter")
// ro.addEventListner=("ondblclick",()=>{
//     //const pchoice=btn.getAttribute("id");
//     //console.log('${name} was clicked');
//     console.log("choice was clicked");
// })

// const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//       const userChoice = choice.getAttribute("id");
//       playGame(userChoice);
//     });
//   });
let computerChoice;
let userChoice;
let sel;
let userScore=0;
let computerScore=0;

let msg=document.querySelector("#pick");



const computerValue=()=>{
    let opt=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    //computerChoice=opt[index];
    return opt[index];
}
let me=document.querySelector("#us");
let comp=document.querySelector("#cs");
const win=(success,computerChoice)=>{
    if(success){
        msg.textContent=`user choice ${sel} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        me.textContent=`${userScore}`;
    }
    else{
        msg.textContent=`user choice ${sel} loses to ${computerChoice}`;
        msg.style.backgroundColor="red";
        computerScore++;
        comp.textContent=`${computerScore}`;
    }
}


const playGame=(value)=>{
    let userWin=true;
    computerChoice=computerValue();
    console.log(computerChoice);
    if(value===computerChoice){
        msg.textContent="its a draw";
        msg.style.background="white";
        return;
   
    }else{
        if(value==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(value==="scissors"){
            userWin=computerChoice==="rock"?false:true;
        }
        else if(value==="paper"){
            userWin=computerChoice==="scissors"?false:true;
        };
    
    
    };
    win(userWin,computerChoice);
}



const choice=document.querySelectorAll(".box");
//console.log(choice);
choice.forEach((val)=>{
    val.addEventListener("click",()=>{
        sel=val.getAttribute("id");
        console.log(sel);
        console.log("You clicked me");
        playGame(sel);
    });
});








