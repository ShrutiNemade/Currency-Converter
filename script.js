
const BASE_URL="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";

const dropdown=document.querySelectorAll(".dropdown select");

const btn=document.querySelector(".exchange-btn");

const amount=document.querySelector(".amount input");

const from=document.querySelector(".from select");

const to=document.querySelector(".to select");

let updatedMsg =document.querySelector(".rate-msg")

for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag=(element)=>{
let currCode=element.value;
let countryCode=countryList[currCode];
let flagLink=`https://flagsapi.com/${countryCode}/flat/64.png`;
let flag=element.parentElement.querySelector("img");
flag.src=flagLink;
}

btn.addEventListener("click",async (evt)=>{
evt.preventDefault();
let amtVal=amount.value;
if(amtVal==="" || amtVal<1 )
{
    amtVal=1;
}
const URL=`${BASE_URL}${to.value}_${from.value}.json`;

let response = await fetch(URL);
let data = await response.json();
let final=amtVal*data.rate;
updatedMsg.innerText=`${amtVal} ${from.value} = ${final} ${to.value}`;

});





