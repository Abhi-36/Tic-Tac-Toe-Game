const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
const msg=document.querySelector(".msg");
const win=document.querySelector("#win");
const newgame=document.querySelector("#newgame");

let turn=true;
const winning=
[
    [0,1,2],
    [3,4,5],//horizontal
    [6,7,8],

    [0,3,6],
    [1,4,7],//Vertical
    [2,5,8],

    [0,4,8],//Vertical
    [2,4,6]
]

boxes.forEach((box)=>
{
 box.addEventListener("click",()=>
{

 if(turn)
 {
    box.textContent="o";
    turn=false;
 }
 else
 {
    box.textContent="x";
    turn=true;
 }
 box.disabled=true;
 chekwinner();

});
})

const chekwinner=()=>
{
    for(let pattern of winning)
    {
        let value1=boxes[pattern[0]].textContent;
        let value2=boxes[pattern[1]].textContent;
        let value3=boxes[pattern[2]].textContent;

      if(value1 != "" && value2!= "" && value3 != "")  
      {
        if(value1===value2 && value2===value3)
        {
            showwinner(value1);
        }
    }
    }
}

const showwinner=(winner)=>
{
  win.textContent=`Congrulations , You are Winner ${winner}`;
  msg.classList.remove("hide");
  disabledBox();
}

const disabledBox=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBox=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.textContent="";
    }
}

const resetgame=()=>
{
  trun=true;
  enableBox();
  msg.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
