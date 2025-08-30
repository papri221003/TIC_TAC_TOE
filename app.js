let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let new_game=document.querySelector(".new_game");
let msg_container=document.querySelector(".msg_container")
let msg=document.querySelector("#msg");

let currplayer_O=true;     //1player should O and 2Player should X
let winning_condn=[
    [0,1,2] , 
    [0,3,6] , 
    [0,4,8] , 
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("The box was clicked");
        if(currplayer_O==true)
        {
            box.innerText="O";
            currplayer_O=false;
        }
        else{
            box.innerText="X";
            currplayer_O=true;
        }
        box.disabled = true; //button disabled after one time click
        checkWinner();
    });
});

let resetGame=()=>
{
    currplayer_O=true;
    enable_box();
    msg_container.classList.add("hide");
}

reset_btn.addEventListener("click",()=>{
    resetGame();

});
new_game.addEventListener("click",()=>{
    resetGame();
});

let enable_box=()=>
{
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].disabled=false;
        boxes[i].innerText="";
    }
}


let disable_box=()=>
{
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].disabled=true;
    }
}
let showmsg=(winner)=>{
    msg.innerText=`Congratulations!!!!!  Winner is player ${winner}`;
    msg_container.classList.remove("hide");
    disable_box();
}
let checkWinner=()=>{
    for(let i=0;i<winning_condn.length;i++)
    {
         let pos1=boxes[winning_condn[i][0]].innerText;
         let pos2=boxes[winning_condn[i][1]].innerText;
         let pos3=boxes[winning_condn[i][2]].innerText;
         if(pos1!="" && pos2!="" && pos3!="")
         {
             if(pos1===pos2 && pos1===pos3)
             {
                console.log("Winner is Player ",pos1);
                showmsg(pos1);
             }
         }
    }

}

