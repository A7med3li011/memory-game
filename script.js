
// overlay for start game

let  start = document.querySelector(".overlay span");
start.onclick = function(){
    let name = prompt("what's your name?");
    
    if(name == null || name === ""){
        document.querySelector(".game-info .name span").innerHTML = "unKnown"

    }else{
    document.querySelector(".game-info .name span").innerHTML = name

    }
    
    document.querySelector(".overlay").remove();

}












let blocksContainer =document.querySelector(".memory-game");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()]
 
shuffle(orderRange)

blocks.forEach((block,index)=>{
block.style.order = orderRange[index]
block.addEventListener("click",function(){
    rotate(block)

    let Allrotate = blocks.filter(block=>block.classList.contains("rotate"));
    console.log(Allrotate);
        if(Allrotate.length === 2){
            stop();
        }
        checked(Allrotate[0],Allrotate[1]);
    })
})




function shuffle(array){
    let currnet = array.length;
    let temp ;
    let random;

    while(currnet>0){
        random = Math.floor(Math.random()*currnet)
        currnet--;
        temp = array[currnet]
        array[currnet]=array[random]
        array[random]=temp
    }
    return array;

}

function rotate(block){

    block.classList.add("rotate");

}



function stop(){
    blocksContainer.classList.add("stop")
    setTimeout(function(){
        blocksContainer.classList.remove("stop")

    },1000)
}



function checked(b1,b2){
    if(b1.dataset.name === b2.dataset.name){
        b1.classList.remove("rotate");
        b2.classList.remove("rotate");

        b1.classList.add("flipe");
        b2.classList.add("flipe");
    }else{
        let tries = document.querySelector(".tries span")
        tries.innerHTML = parseInt(tries.innerHTML) ;
        tries.innerHTML ++;
        
        
        setTimeout(()=>{
            b1.classList.remove("rotate");
            b2.classList.remove("rotate");
        
        },1000)
    }

}



















































































































