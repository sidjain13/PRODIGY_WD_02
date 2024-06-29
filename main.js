let timer=0;
let milli=0;
let sec=0;
let min=0;
let hr=0;

let getHr=0
let getMin=0 
let getSec=0    

function start(){
    timer=true;
    myFunc();
}

function pause(){
    timer=false;
    myFunc();
}

function reset(){
    location.reload(true);
}


function myFunc(){
    if(timer==1){
        milli=milli+1;
        if(milli==100){
            sec=sec+1;
            milli=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }

        
        getSec=sec;
        getMin=min;
        getHr=hr;

        if(sec<10){
            getSec="0"+getSec;
        }

        if(min<10){
            getMin="0"+getMin;
        }

        if(hr<10){
            getHr="0"+getHr;
        }

        setTimeout("myFunc()",10);
        document.getElementById("milli").innerHTML=milli;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;
    }
}

let laps=document.getElementById("laps");
let count=0;
function lap(){
    count++;
    let li=document.createElement("li");
    li.innerHTML=`${"#"+count} - ${getHr}:${getMin}:${getSec}:${milli}`
    laps.appendChild(li);
    
}
